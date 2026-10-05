"use client";

import { cn } from "@/lib/utils";

export type TabId = "home" | "journey" | "glucose" | "meals" | "learn" | "shopping";

export const TABS: { id: TabId; label: string; icon: string }[] = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "journey", label: "My Journey", icon: "🗓️" },
  { id: "glucose", label: "Glucose Log", icon: "🩸" },
  { id: "meals", label: "Meal Plans", icon: "🍲" },
  { id: "learn", label: "Learn", icon: "📚" },
  { id: "shopping", label: "Shopping", icon: "🛒" },
];

export function TopNav({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-uw-teal/15 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => onChange("home")}
            className="flex items-center gap-2.5 text-left"
            aria-label="Go to home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-uw-teal text-lg text-white shadow-sm">
              ❄
            </span>
            <span>
              <span className="block text-sm font-extrabold uppercase tracking-widest text-uw-navy">
                Ubuntu Wellness
              </span>
              <span className="block text-[11px] text-muted-foreground">
                Diabetes Reversal Companion
              </span>
            </span>
          </button>
          <a
            href="https://ubuntuwellness.com/diabetes-reversal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-uw-teal/30 px-4 py-1.5 text-xs font-semibold text-uw-teal transition-colors hover:bg-uw-teal hover:text-white sm:block"
          >
            ubuntuwellness.com ↗
          </a>
        </div>

        {/* Desktop tabs */}
        <nav aria-label="Main" className="hidden gap-1 md:flex">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              aria-current={active === t.id ? "page" : undefined}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === t.id
                  ? "bg-uw-teal text-white shadow-sm"
                  : "text-muted-foreground hover:bg-uw-teal-light hover:text-uw-teal"
              )}
            >
              <span aria-hidden>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function BottomNav({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  return (
    <nav
      aria-label="Main mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-uw-teal/15 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <div className="grid grid-cols-6">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            aria-current={active === t.id ? "page" : undefined}
            className={cn(
              "flex min-h-[56px] flex-col items-center justify-center gap-0.5 px-1 py-2 text-[10px] font-medium transition-colors",
              active === t.id ? "text-uw-teal" : "text-muted-foreground"
            )}
          >
            <span className="text-lg" aria-hidden>
              {t.icon}
            </span>
            <span className="truncate">{t.label}</span>
            <span
              className={cn(
                "h-0.5 w-6 rounded-full",
                active === t.id ? "bg-uw-teal" : "bg-transparent"
              )}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
