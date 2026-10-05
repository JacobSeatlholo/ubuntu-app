"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  PROGRAM,
  WFPB_BENEFITS,
  FOUR_PILLARS,
  SITE_STATS_BENEFITS,
  KEY_DATES,
  MISSION,
} from "@/lib/program-data";
import type { TabId } from "./nav";

// Site benefit icons from ubuntuwellness.com/diabetes-reversal
const SITE_BENEFIT_ICONS: Record<string, string> = {
  "Reduce risk of mortality from obesity": "/images/icon-1.png",
  "Lowers cholesterol": "/images/icon-2.png",
  "Reduce risk of heart disease": "/images/icon-4.png",
  "Lowers chances of certain cancers": "/images/icon-3.png",
  "Manages diabetes by reducing A1C levels": "/images/icon-5.png",
  "Metabolism benefits": "/images/icon-7.png",
};

export default function HomeSection({
  completedCount,
  onNavigate,
  onStart,
  hasStarted,
}: {
  completedCount: number;
  onNavigate: (tab: TabId) => void;
  onStart: () => void;
  hasStarted: boolean;
}) {
  const pct = Math.round((completedCount / 21) * 100);

  return (
    <div className="flex flex-col gap-10">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-3xl bg-uw-navy text-white">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/manual-cover.png"
            alt="Ubuntu Wellness program manual cover"
            fill
            priority
            className="object-cover object-right"
          />
        </div>
        <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-uw-teal/30 blur-3xl" />
        <div className="absolute -bottom-16 left-1/3 h-48 w-48 rounded-full bg-uw-green/20 blur-3xl" />

        <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:p-14">
          <div className="flex flex-col justify-center gap-5">
            <Badge variant="outline" className="w-fit border-white/40 bg-white/10 text-white">
              21-Day Guided Program · {PROGRAM.hashtag}
            </Badge>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Holistic Diabetes
              <br />
              <span className="text-teal-200">Self Care Empowerment</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Welcome to the Ubuntu 21-Day Diabetes &amp; Other Lifestyle Diseases
              Self-Management Program. {PROGRAM.tagline} You will receive recipes and
              education materials to help you live plant-based for 21 days — guided every
              day with educational and motivational materials, with blood tests before,
              during and at the end to monitor results with your physician.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                size="lg"
                onClick={onStart}
                className="bg-uw-teal text-white hover:bg-uw-teal/85"
              >
                {hasStarted ? "Continue Your Journey" : "Start Day 1"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("meals")}
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Explore Meal Plans
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="animate-float rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <div className="relative h-44 w-36 overflow-hidden rounded-xl shadow-2xl sm:h-56 sm:w-44">
                <Image
                  src="/images/manual-cover.png"
                  alt="WFPB Ubuntu Manual cover with almonds and apricots"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-xs text-white/70">
                Prepared by {PROGRAM.preparedBy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Your progress ────────────────────────────────── */}
      {hasStarted && (
        <section>
          <Card className="border-uw-teal/25 bg-uw-teal-light/60">
            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-uw-teal">
                  Your 21-day journey
                </p>
                <p className="text-2xl font-bold text-uw-navy">
                  {completedCount} of 21 days completed
                </p>
                <Progress value={pct} className="mt-3 h-2.5" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center sm:w-72">
                {KEY_DATES.filter((d) => [1, 11, 21].includes(d.day)).map((d) => (
                  <div
                    key={d.day}
                    className={`rounded-xl border p-2 text-xs ${
                      completedCount >= d.day
                        ? "border-uw-green/40 bg-uw-green/10 text-uw-green"
                        : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    <span className="block text-lg font-bold">Day {d.day}</span>
                    {d.label}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* ── Stats ────────────────────────────────────────── */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-uw-navy">Why this program matters</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {PROGRAM.stats.map((s) => (
            <Card key={s.label} className="border-none shadow-sm">
              <CardContent className="p-5">
                <p className="text-2xl font-extrabold text-uw-teal sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {s.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-4 rounded-2xl border-l-4 border-uw-amber bg-uw-amber/10 p-4 text-sm italic text-uw-navy">
          &ldquo;{PROGRAM.quote.text}&rdquo; — {PROGRAM.quote.author}
        </p>
      </section>

      {/* ── Benefits grid ────────────────────────────────── */}
      <section>
        <h2 className="mb-1 text-xl font-bold text-uw-navy">
          Whole Food Plant-Based diet benefits
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Plant-based diets inherently focus on whole grains, beans, fresh produce, seeds
          and nuts.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {WFPB_BENEFITS.map((b) => (
            <Card key={b.text} className="border-none shadow-sm transition-transform hover:-translate-y-0.5">
              <CardContent className="flex items-center gap-3 p-4">
                <span className="text-2xl" aria-hidden>
                  {b.icon}
                </span>
                <span className="text-sm font-medium leading-snug">{b.text}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── 4 Pillars ────────────────────────────────────── */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-uw-navy">The 4 Pillars of the program</h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {FOUR_PILLARS.map((p) => (
            <div
              key={p.title}
              className="flex items-center gap-3 rounded-2xl border border-uw-teal/20 bg-white p-4 shadow-sm"
            >
              <span className="text-3xl" aria-hidden>
                {p.icon}
              </span>
              <span className="font-semibold text-uw-navy">{p.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────── */}
      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="border-uw-teal/20">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-uw-navy">Our mission</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{MISSION.text}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{MISSION.udrp}</p>
            <h3 className="mt-4 text-sm font-semibold text-uw-navy">
              Training outcomes — by the end of this program you will be equipped with:
            </h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {MISSION.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-uw-green/25 bg-uw-green/5">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-uw-navy">Clinically proven outcomes</h2>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SITE_STATS_BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 text-sm font-medium text-uw-navy shadow-sm"
                >
                  <span
                    className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg"
                    aria-hidden
                  >
                    <Image
                      src={SITE_BENEFIT_ICONS[b] ?? "/images/icon-7.png"}
                      alt=""
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-white p-3 text-xs leading-relaxed text-muted-foreground">
              In September 2020, Premier Alan Winde accepted an invitation by Ubuntu
              Wellness NPO to participate in a supervised 21-day plant-based eating program
              meant to help heal his 12-year chronic condition. His physician, Dr. Marina
              Klocke, was astounded at the medical results.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ── Research initiative ─────────────────────────── */}
      <section className="overflow-hidden rounded-3xl border border-uw-teal/15 bg-white shadow-sm">
        <div className="relative aspect-[21/9] w-full sm:aspect-[2/1]">
          <Image
            src="/images/Diabetes-reversal-333.jpg"
            alt="Fresh plant-based whole foods — the foundation of the Ubuntu Wellness diabetes reversal program"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-8">
          <h2 className="text-lg font-bold text-uw-navy">
            Ubuntu Wellness × North-West University research initiative
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            This initiative proposed between Ubuntu Wellness and the North West University
            is meant to research and document the scientific connection between diet and
            nutrition and how a plant-based diet can help fight lifestyle diseases in
            South Africa. Lifestyle-related diseases such as diabetes are responsible for
            24.5% of deaths of all South Africans — and by 2045 the International Diabetes
            Federation projects around 47 million people living with diabetes in the
            African region alone.
          </p>
        </div>
      </section>

      {/* ── Quick nav ────────────────────────────────────── */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-uw-navy">Jump back in</h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {(
            [
              { id: "journey", icon: "🗓️", label: "21-Day Tracker" },
              { id: "glucose", icon: "🩸", label: "Glucose Log" },
              { id: "meals", icon: "🍲", label: "Meal Plans" },
              { id: "learn", icon: "📚", label: "Learn" },
              { id: "shopping", icon: "🛒", label: "Shopping List" },
            ] as { id: TabId; icon: string; label: string }[]
          ).map((n) => (
            <button
              key={n.id}
              onClick={() => onNavigate(n.id)}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-uw-teal/40 hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>
                {n.icon}
              </span>
              <span className="text-sm font-semibold text-uw-navy">{n.label}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
