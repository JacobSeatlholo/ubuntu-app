"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  MEAL_PLANS,
  DETOX_SMOOTHIE,
  SPROUTING,
  STRESS_RELIEF,
} from "@/lib/program-data";
import { useMealChecks } from "@/lib/storage";

function MealSlot({
  label,
  items,
  checkKey,
}: {
  label: string;
  items: string[];
  checkKey?: string;
}) {
  const [checks, setChecks] = useMealChecks();
  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-uw-teal">
        {label}
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => {
          const key = checkKey ? `${checkKey}:${label}:${item}` : null;
          const checked = key ? !!checks[key] : false;
          return (
            <li key={item}>
              {key ? (
                <label className="flex cursor-pointer items-center gap-2 text-sm text-uw-navy">
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() =>
                      setChecks((prev) => ({ ...prev, [key]: !prev[key] }))
                    }
                    aria-label={item}
                  />
                  <span className={cn(checked && "text-muted-foreground line-through")}>
                    {item}
                  </span>
                </label>
              ) : (
                <span className="text-sm text-uw-navy">{item}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function MealsSection() {
  const [planId, setPlanId] = useState(1);
  const [dayIdx, setDayIdx] = useState(0);

  const plan = MEAL_PLANS.find((p) => p.id === planId) ?? MEAL_PLANS[0];
  const day = plan.days[dayIdx];

  return (
    <div className="flex flex-col gap-8">
      {/* ── Meal plan picker ─────────────────────────────── */}
      <div>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-bold text-uw-navy">Ubuntu 7-Day Meal Plans</h2>
          <Badge variant="outline" className="border-uw-teal/40 text-uw-teal">
            Each meal is interchangeable
          </Badge>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          Three interchangeable weekly plans from the manual. Tick off meals as you enjoy
          them — everything is oil-free, whole food and plant-based.
        </p>
        <Tabs
          value={String(planId)}
          onValueChange={(v) => {
            setPlanId(Number(v));
            setDayIdx(0);
          }}
        >
          <TabsList className="flex-wrap">
            {MEAL_PLANS.map((p) => (
              <TabsTrigger key={p.id} value={String(p.id)}>
                Part {p.id}
              </TabsTrigger>
            ))}
          </TabsList>
          {MEAL_PLANS.map((p) => (
            <TabsContent key={p.id} value={String(p.id)} className="mt-4">
              <div className="flex flex-col gap-6">
                {/* Manual page preview */}
                <Card className="overflow-hidden border-uw-teal/20">
                  <CardContent className="p-4">
                    <div className="scroll-area max-h-96 overflow-y-auto rounded-xl">
                      <Image
                        src={p.image}
                        alt={`Ubuntu meal plan part ${p.id} — original manual page`}
                        width={910}
                        height={1287}
                        className="w-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Day picker */}
                <div className="flex flex-wrap gap-2">
                  {p.days.map((d, i) => (
                    <button
                      key={d.day}
                      onClick={() => setDayIdx(i)}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                        i === dayIdx
                          ? "bg-uw-teal text-white shadow-sm"
                          : "border border-border bg-white text-uw-navy hover:bg-uw-teal-light"
                      )}
                    >
                      {d.day}
                    </button>
                  ))}
                </div>

                {/* Selected day */}
                <div className="grid gap-3 md:grid-cols-3">
                  <MealSlot
                    label="🌅 Breakfast"
                    items={day.breakfast}
                    checkKey={`p${p.id}-d${dayIdx}`}
                  />
                  <MealSlot
                    label="☀️ Lunch"
                    items={day.lunch}
                    checkKey={`p${p.id}-d${dayIdx}`}
                  />
                  <MealSlot
                    label="🌙 Dinner"
                    items={day.dinner}
                    checkKey={`p${p.id}-d${dayIdx}`}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* ── Detox smoothie recipe ────────────────────────── */}
      <Card className="border-uw-green/25 bg-gradient-to-br from-uw-green/5 to-uw-teal-light/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-uw-navy">
            <span aria-hidden>🥤</span> {DETOX_SMOOTHIE.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-uw-navy">
              Benefits of a regular heavy metal detox:
            </p>
            <ul className="space-y-1.5">
              {DETOX_SMOOTHIE.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-uw-navy">
                  <span className="mt-0.5 text-uw-green" aria-hidden>✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-uw-navy">Ingredients</p>
            <ul className="space-y-1.5">
              {DETOX_SMOOTHIE.ingredients.map((ing) => (
                <li key={ing} className="flex items-start gap-2 text-sm text-uw-navy">
                  <span className="mt-0.5 text-uw-teal" aria-hidden>•</span>
                  {ing}
                </li>
              ))}
            </ul>
            <p className="mt-3 rounded-lg bg-white p-3 text-xs italic text-muted-foreground">
              {DETOX_SMOOTHIE.note}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ── Sprouting guide ──────────────────────────────── */}
      <Card className="border-uw-teal/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-uw-navy">
            <span aria-hidden>🌱</span> The Basics of Sprouting
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-muted-foreground">{SPROUTING.intro}</p>
            <div className="grid grid-cols-3 gap-2">
              {SPROUTING.steps.map((s, i) => (
                <div
                  key={s}
                  className="rounded-xl border border-uw-teal/25 bg-uw-teal-light/60 p-3 text-center"
                >
                  <span className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-uw-teal text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-xs font-semibold text-uw-navy">{s}</span>
                </div>
              ))}
            </div>
            <div className="scroll-area max-h-64 overflow-y-auto rounded-xl">
              <Image
                src="/images/manual-sprouting.png"
                alt="Sprouting guide page from the Ubuntu manual"
                width={910}
                height={1287}
                className="w-full object-contain"
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-uw-navy">Benefits of sprouting:</p>
            <ul className="space-y-2">
              {SPROUTING.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 rounded-lg bg-uw-teal-light/50 p-2.5 text-sm text-uw-navy"
                >
                  <span className="mt-0.5 text-uw-green" aria-hidden>✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* ── Stress relief ────────────────────────────────── */}
      <Card className="border-uw-amber/30 bg-uw-amber/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-uw-navy">
            <span aria-hidden>🧘</span> The Importance of Stress Relief
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {STRESS_RELIEF.intro}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {STRESS_RELIEF.body}
          </p>
          <div className="flex flex-wrap gap-2">
            {STRESS_RELIEF.techniques.map((t) => (
              <Badge key={t} className="bg-uw-amber/90 text-white">
                {t}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="border-uw-teal/40 text-uw-teal">
              <a href="https://ubuntuwellness.app" target="_blank" rel="noopener noreferrer">
                Visit ubuntuwellness.app ↗
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
