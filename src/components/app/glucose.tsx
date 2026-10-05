"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GLUCOSE_NOTES, GLUCOSE_SLOTS, WHAT_IS_DIABETES } from "@/lib/program-data";
import { useGlucoseLog, type GlucoseEntry } from "@/lib/storage";

function readingToNumber(v?: string): number | null {
  if (!v) return null;
  const n = parseFloat(v.replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

function severityColor(n: number | null): string {
  if (n === null) return "";
  if (n < 4) return "text-red-600";
  if (n <= 7) return "text-uw-green";
  if (n <= 10) return "text-uw-amber";
  return "text-red-600";
}

export default function GlucoseSection() {
  const [log, setLog] = useGlucoseLog();
  const [newDate, setNewDate] = useState("");

  const dates = useMemo(
    () => Object.keys(log).sort((a, b) => a.localeCompare(b)),
    [log]
  );

  const today = new Date().toISOString().slice(0, 10);
  const activeDate = newDate || dates[dates.length - 1] || today;

  const update = (date: string, slot: string, value: string) => {
    setLog((prev) => {
      const entry: GlucoseEntry = { ...(prev[date] ?? {}) };
      if (value === "") delete entry[slot];
      else entry[slot] = value;
      return { ...prev, [date]: entry };
    });
  };

  const updateNotes = (date: string, value: string) => {
    setLog((prev) => ({
      ...prev,
      [date]: { ...(prev[date] ?? {}), notes: value || undefined },
    }));
  };

  const addDate = () => {
    if (!newDate) return;
    setLog((prev) => ({ ...prev, [newDate]: prev[newDate] ?? {} }));
    setNewDate("");
  };

  const deleteDate = (date: string) => {
    setLog((prev) => {
      const next = { ...prev };
      delete next[date];
      return next;
    });
  };

  // chart data: fasting readings across dates
  const chartReadings = useMemo(() => {
    return dates
      .map((d) => ({ date: d, value: readingToNumber(log[d]?.["fasting"]) }))
      .filter((r) => r.value !== null) as { date: string; value: number }[];
  }, [dates, log]);

  const allValues = useMemo(
    () =>
      dates
        .flatMap((d) => GLUCOSE_SLOTS.map((s) => readingToNumber(log[d]?.[s.id])))
        .filter((n): n is number => n !== null),
    [dates, log]
  );

  const avg = allValues.length
    ? (allValues.reduce((a, b) => a + b, 0) / allValues.length).toFixed(1)
    : "—";

  return (
    <div className="flex flex-col gap-8">
      <Card className="border-uw-teal/20">
        <CardHeader>
          <CardTitle className="text-uw-navy">Blood Glucose Log</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-uw-teal-light p-4">
              <p className="text-2xl font-extrabold text-uw-teal">{dates.length}</p>
              <p className="text-xs text-muted-foreground">Days logged</p>
            </div>
            <div className="rounded-2xl bg-uw-teal-light p-4">
              <p className="text-2xl font-extrabold text-uw-teal">{allValues.length}</p>
              <p className="text-xs text-muted-foreground">Readings</p>
            </div>
            <div className="rounded-2xl bg-uw-teal-light p-4">
              <p className="text-2xl font-extrabold text-uw-teal">{avg}</p>
              <p className="text-xs text-muted-foreground">Average (mmol/L)</p>
            </div>
          </div>

          {/* Add date */}
          <div className="flex flex-wrap items-center gap-2">
            <Input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-auto flex-1"
              aria-label="Pick a date to add"
            />
            <Button onClick={addDate} disabled={!newDate} className="bg-uw-teal text-white hover:bg-uw-teal/85">
              Add day
            </Button>
          </div>

          {dates.length === 0 && (
            <p className="rounded-xl border border-dashed border-uw-teal/40 bg-uw-teal-light/50 p-6 text-center text-sm text-muted-foreground">
              No readings yet. Add a day above, then record your glucose values below.
              Work with your health care provider to determine your blood sugar goals.
            </p>
          )}

          {/* Simple bar chart of fasting readings */}
          {chartReadings.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-uw-navy">
                Fasting glucose trend (mmol/L)
              </h3>
              <div className="scroll-area flex max-h-48 items-end gap-2 overflow-x-auto rounded-2xl border border-border bg-white p-4">
                {chartReadings.map((r) => {
                  const h = Math.max(6, Math.min(100, (r.value / 15) * 100));
                  const inRange = r.value >= 4 && r.value <= 7;
                  return (
                    <div key={r.date} className="flex min-w-10 flex-1 flex-col items-center gap-1">
                      <span className="text-[10px] font-semibold text-uw-navy">{r.value}</span>
                      <div
                        title={`${r.date}: ${r.value} mmol/L`}
                        className={`w-full max-w-8 rounded-t-md ${
                          inRange ? "bg-uw-green/70" : "bg-uw-amber/80"
                        }`}
                        style={{ height: `${h}px` }}
                      />
                      <span className="whitespace-nowrap text-[9px] text-muted-foreground">
                        {r.date.slice(5)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Green bars: within a typical 4–7 mmol/L fasting target range. Always
                confirm your personal targets with your health care provider.
              </p>
            </div>
          )}

          {/* Readings table */}
          {dates.length > 0 && (
            <div className="scroll-area max-h-96 overflow-y-auto rounded-2xl border border-border">
              <Table>
                <TableHeader className="sticky top-0 z-10 bg-uw-teal-light">
                  <TableRow>
                    <TableHead className="sticky left-0 z-10 bg-uw-teal-light">Date</TableHead>
                    {GLUCOSE_SLOTS.map((s) => (
                      <TableHead key={s.id} className="min-w-28 text-center text-[11px] leading-tight">
                        {s.label}
                      </TableHead>
                    ))}
                    <TableHead className="w-10" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dates.map((d) => (
                    <TableRow key={d}>
                      <TableCell className="sticky left-0 z-10 bg-white font-medium">
                        {new Date(d + "T00:00:00").toLocaleDateString("en-ZA", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </TableCell>
                      {GLUCOSE_SLOTS.map((s) => {
                        const v = log[d]?.[s.id];
                        const n = readingToNumber(v);
                        return (
                          <TableCell key={s.id} className="p-1">
                            <Input
                              value={v ?? ""}
                              onChange={(e) => update(d, s.id, e.target.value)}
                              inputMode="decimal"
                              placeholder="—"
                              aria-label={`${s.label} on ${d}`}
                              className={`h-9 border-none bg-transparent text-center text-sm font-semibold shadow-none focus-visible:bg-uw-teal-light ${severityColor(n)}`}
                            />
                          </TableCell>
                        );
                      })}
                      <TableCell className="p-1 text-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteDate(d)}
                          aria-label={`Delete ${d}`}
                          className="h-8 w-8 text-muted-foreground hover:text-red-600"
                        >
                          ✕
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Notes editor for active date */}
          {dates.length > 0 && (
            <div>
              <label
                htmlFor="glucose-notes"
                className="mb-1.5 block text-sm font-semibold text-uw-navy"
              >
                Notes for {activeDate}
              </label>
              <textarea
                id="glucose-notes"
                value={log[activeDate]?.notes ?? ""}
                onChange={(e) => updateNotes(activeDate, e.target.value)}
                placeholder="Breakfast, lunch, supper, snacks, exercise, how you feel…"
                rows={3}
                className="w-full rounded-xl border border-input bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uw-teal/40"
              />
            </div>
          )}

          <ul className="space-y-2">
            {GLUCOSE_NOTES.map((n) => (
              <li key={n} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <span className="mt-0.5 text-uw-teal" aria-hidden>ℹ</span>
                {n}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* ── A1C reference ────────────────────────────────── */}
      <Tabs defaultValue="a1c">
        <TabsList className="flex-wrap">
          <TabsTrigger value="a1c">A1C Reference</TabsTrigger>
          <TabsTrigger value="diabetes">What is Diabetes?</TabsTrigger>
        </TabsList>
        <TabsContent value="a1c">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {WHAT_IS_DIABETES.hba1c}
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-5">
                {WHAT_IS_DIABETES.a1cReference.map((r) => (
                  <div key={r.a1c} className="rounded-xl border border-border p-3 text-center">
                    <p className="text-xl font-extrabold text-uw-teal">{r.a1c}</p>
                    <p className="text-[11px] leading-tight text-muted-foreground">{r.average}</p>
                  </div>
                ))}
              </div>
              <Badge variant="outline" className="mt-4 border-uw-teal/40 text-uw-teal">
                ADA target for many patients: A1C below 7%
              </Badge>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="diabetes">
          <Card>
            <CardContent className="space-y-4 p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {WHAT_IS_DIABETES.intro}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {WHAT_IS_DIABETES.diagnosis}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-uw-teal/25 bg-uw-teal-light/60 p-4">
                  <h3 className="text-sm font-bold text-uw-navy">Type 1</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The pancreas does not produce enough insulin.
                  </p>
                </div>
                <div className="rounded-xl border border-uw-teal/25 bg-uw-teal-light/60 p-4">
                  <h3 className="text-sm font-bold text-uw-navy">Type 2</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The body cannot effectively use the insulin it produces.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
