"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * localStorage-backed store hook built on useSyncExternalStore.
 * - SSR-safe: server snapshot returns the initial value.
 * - Referentially stable: parsed values are cached per key.
 * - Cross-instance sync: all hook instances for the same key update together.
 */

type Listener = () => void;
const listeners = new Set<Listener>();
const notify = () => listeners.forEach((l) => l());

if (typeof window !== "undefined") {
  // Keep multiple tabs in sync
  window.addEventListener("storage", notify);
}

// Cache: key -> { raw, value } so getSnapshot returns a stable reference
const cache = new Map<string, { raw: string | null; value: unknown }>();

function readLS<T>(key: string, initial: T): T {
  if (typeof window === "undefined") return initial;
  try {
    const raw = window.localStorage.getItem(key);
    const entry = cache.get(key);
    if (entry && entry.raw === raw) return entry.value as T;
    const value = raw === null ? initial : (JSON.parse(raw) as T);
    cache.set(key, { raw, value });
    return value;
  } catch {
    return initial;
  }
}

function writeLS<T>(key: string, value: T) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    // keep cache in sync immediately
    cache.set(key, { raw: JSON.stringify(value), value });
  } catch {
    // storage full / private mode — ignore
  }
}

export function useLocalStorage<T>(key: string, initial: T) {
  const subscribe = useCallback((cb: Listener) => {
    listeners.add(cb);
    return () => {
      listeners.delete(cb);
    };
  }, []);

  const value = useSyncExternalStore(
    subscribe,
    () => readLS(key, initial),
    () => initial
  );

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const prev = readLS(key, initial);
      const resolved =
        typeof next === "function" ? (next as (p: T) => T)(prev) : next;
      writeLS(key, resolved);
      notify();
    },
    [key, initial]
  );

  const reset = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // ignore
    }
    cache.delete(key);
    notify();
  }, [key]);

  return [value, setValue, reset] as const;
}

/** Program start date stored as ISO string (yyyy-mm-dd). */
export function useProgramStart() {
  return useLocalStorage<string | null>("ubuntu.programStart", null);
}

/** Completed program days: array of day numbers 1..21 */
export function useCompletedDays() {
  return useLocalStorage<number[]>("ubuntu.completedDays", []);
}

/** 10-step checklist completion */
export function useChecklist() {
  return useLocalStorage<number[]>("ubuntu.checklist", []);
}

/** Shopping list checked items */
export function useShoppingList() {
  return useLocalStorage<string[]>("ubuntu.shopping", []);
}

/** Glucose readings: { "2026-01-05": { fasting: "5.6", ... } } */
export type GlucoseEntry = Partial<Record<string, string>> & { notes?: string };
export function useGlucoseLog() {
  return useLocalStorage<Record<string, GlucoseEntry>>("ubuntu.glucose", {});
}

/** Daily meal check-off per plan part */
export function useMealChecks() {
  return useLocalStorage<Record<string, boolean>>("ubuntu.mealChecks", {});
}
