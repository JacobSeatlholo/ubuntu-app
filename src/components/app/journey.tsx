"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CHECKLIST_10_STEPS, KEY_DATES, SELFCARE_ACRONYM } from "@/lib/program-data";
import {
  useCompletedDays,
  useChecklist,
  useProgramStart,
} from "@/lib/storage";

const DAY_TIPS: Record<number, string> = {
  1: "Dr Session + Training — begin your program today!",
  8: "Weekly Zoom meeting — stay connected with participants.",
  9: "Draw blood for tests & schedule your second doctor appointment.",
  11: "Dr Session 2 + Training Session 2 — review your results.",
  15: "Weekly Zoom meeting — share your wins and challenges.",
  20: "Final blood draw — schedule the last doctor session.",
  21: "Program Exit + Maintenance Info — celebrate how far you've come!",
};

export default function JourneySection() {
  const [start, setStart] = useProgramStart();
  const [completed, setCompleted] = useCompletedDays();
  const [checklist, setChecklist] = useChecklist();

  const pct = Math.round((completed.length / 21) * 100);
  const checklistDone = checklist.length >= CHECKLIST_10_STEPS.length;

  const toggleDay = (day: number) => {
    setCompleted((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day].sort((a, b) => a - b)
    );
  };

  const toggleStep = (i: number) => {
    setChecklist((prev) =>
      prev.includes(i) ? prev.filter((d) => d !== i) : [...prev, i]
    );
  };

  const startProgram = () => {
    setStart(new Date().toISOString().slice(0, 10));
  };

  const currentDay = start
    ? Math.min(
        21,
        Math.floor(
          (Date.now() - new Date(start + "T00:00:00").getTime()) / 86400000
        ) + 1
      )
    : null;

  return (
    <div className="flex flex-col gap-8">
      {/* ── Program status ───────────────────────────────── */}
      <Card className="border-uw-teal/20">
        <CardHeader>
          <CardTitle className="flex flex-wrap items-center justify-between gap-3 text-uw-navy">
            <span>21-Day Program Tracker</span>
            {start ? (
              <Badge className="bg-uw-teal text-white">
                Started {new Date(start + "T00:00:00").toLocaleDateString("en-ZA", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
                {currentDay !== null && ` · Day ${currentDay}`}
              </Badge>
            ) : (
              <Button onClick={startProgram} className="bg-uw-teal text-white hover:bg-uw-teal/85">
                Set today as Day 1
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-muted-foreground">
                {completed.length} of 21 days completed
              </span>
              <span className="font-bold text-uw-teal">{pct}%</span>
            </div>
            <Progress value={pct} className="h-3" />
          </div>

          {/* Day grid */}
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 21 }, (_, i) => i + 1).map((day) => {
              const done = completed.includes(day);
              const keyDate = KEY_DATES.find((d) => d.day === day);
              const isToday = currentDay === day;
              return (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  title={keyDate ? `Day ${day}: ${keyDate.label}` : `Day ${day}`}
                  aria-pressed={done}
                  aria-label={keyDate ? `Day ${day}: ${keyDate.label}${done ? ", completed" : ""}` : `Day ${day}${done ? ", completed" : ""}`}
                  className={cn(
                    "relative flex aspect-square flex-col items-center justify-center rounded-xl border text-sm font-semibold transition-all",
                    done
                      ? "border-uw-green bg-uw-green text-white shadow-sm"
                      : keyDate
                        ? "border-uw-amber/60 bg-uw-amber/10 text-uw-navy hover:bg-uw-amber/25"
                        : "border-border bg-white text-uw-navy hover:border-uw-teal/50 hover:bg-uw-teal-light"
                  )}
                >
                  {day}
                  {done && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] text-uw-green shadow">
                      ✓
                    </span>
                  )}
                  {isToday && !done && (
                    <span className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-uw-teal" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-uw-green" /> Completed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-uw-amber/40" /> Doctor session / milestone
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded border border-border" /> Tap to mark done
            </span>
          </div>

          {/* Important dates */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-uw-navy">
              Important dates
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {KEY_DATES.map((d) => (
                <div
                  key={d.day}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border p-3 text-sm",
                    completed.includes(d.day)
                      ? "border-uw-green/40 bg-uw-green/5"
                      : "border-border bg-white"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                      completed.includes(d.day)
                        ? "bg-uw-green text-white"
                        : "bg-uw-amber/15 text-uw-navy"
                    )}
                  >
                    {d.day}
                  </span>
                  <span className="font-medium text-uw-navy">{d.label}</span>
                </div>
              ))}
            </div>
          </div>

          {currentDay !== null && DAY_TIPS[currentDay] && (
            <p className="rounded-xl bg-uw-teal-light p-4 text-sm text-uw-navy">
              <strong>Today (Day {currentDay}):</strong> {DAY_TIPS[currentDay]}
            </p>
          )}
        </CardContent>
      </Card>

      {/* ── 10-step checklist ────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-uw-navy">
            <span>10-Step Checklist</span>
            <Badge variant={checklistDone ? "default" : "secondary"} className={checklistDone ? "bg-uw-green text-white" : ""}>
              {checklist.length}/10
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {CHECKLIST_10_STEPS.map((step, i) => {
            const done = checklist.includes(i);
            return (
              <label
                key={i}
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors",
                  done ? "border-uw-green/40 bg-uw-green/5" : "border-border bg-white hover:border-uw-teal/40"
                )}
              >
                <Checkbox
                  checked={done}
                  onCheckedChange={() => toggleStep(i)}
                  className="mt-0.5"
                  aria-label={`Step ${i + 1}: ${step.title}`}
                />
                <div>
                  <p
                    className={cn(
                      "text-sm font-semibold text-uw-navy",
                      done && "line-through opacity-70"
                    )}
                  >
                    {i + 1}. {step.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </label>
            );
          })}
        </CardContent>
      </Card>

      {/* ── SELF-CARE acronym ────────────────────────────── */}
      <Card className="border-uw-teal/20 bg-uw-teal-light/50">
        <CardHeader>
          <CardTitle className="text-uw-navy">Self-Care is spelled S-E-L-F-C-A-R-E</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            {SELFCARE_ACRONYM.map((item) => (
              <div key={item.letter + item.text} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-uw-teal text-sm font-bold text-white">
                  {item.letter}
                </span>
                <p className="text-sm leading-relaxed text-uw-navy">{item.text}</p>
              </div>
            ))}
          </div>
          <Separator className="my-4" />
          <p className="text-center text-sm font-medium italic text-uw-teal">
            &ldquo;Self-care is an attitude that says I am responsible for myself.&rdquo;
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
