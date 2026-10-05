"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  NUTRITION_QA,
  NUTRIENT_TABLE,
  NUTRIENT_FUNCTIONS,
  PROTOCOL,
  UBUNTU_CIRCLE,
  WELLNESS_PRINCIPLES,
  BALANCED_LIFESTYLE,
  DIABETES8_MODEL,
  DIABETES8_DIMENSIONS,
  DIABETES8_INNER,
  EMOTIONAL_GUIDANCE,
  LEARNING_APPROACH,
  STAGES_OF_LEARNING,
  ROOT_CAUSES,
  INSULIN_RESISTANCE,
  COMPLICATIONS,
  COMPLICATIONS_ADVICE,
  TEN_GUIDELINES,
  EATING_GUIDELINES,
  WFPB_PRINCIPLE,
  TRAINING_NOTE,
  RESOURCES,
} from "@/lib/program-data";

function SectionCard({
  title,
  icon,
  children,
  className,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("border-uw-teal/20", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-uw-navy">
          <span aria-hidden className="text-2xl">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

const LEARN_TOPICS = [
  { id: "why", label: "Why WFPB?", icon: "🥦" },
  { id: "protocol", label: "Healing Protocol", icon: "💧" },
  { id: "wellness", label: "WELLNESS Principles", icon: "✨" },
  { id: "model", label: "Diabetes 8 Model", icon: "🎯" },
  { id: "emotions", label: "Emotional Scale", icon: "🧭" },
  { id: "learning", label: "Learning Path", icon: "🎓" },
  { id: "risks", label: "Root Causes & Risks", icon: "⚠️" },
  { id: "eating", label: "Healthy Eating", icon: "🍽️" },
] as const;

export default function LearnSection() {
  const [topic, setTopic] = useState<string>("why");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-uw-navy">Learn — Food is Medicine</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          The complete education library from the Ubuntu manual: nutrition knowledge, the
          healing protocol, mindset tools and self-care models.
        </p>
      </div>

      {/* Topic chips */}
      <div className="flex flex-wrap gap-2">
        {LEARN_TOPICS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTopic(t.id)}
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
              topic === t.id
                ? "border-uw-teal bg-uw-teal text-white shadow-sm"
                : "border-border bg-white text-uw-navy hover:border-uw-teal/40 hover:bg-uw-teal-light"
            )}
          >
            <span aria-hidden>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── WHY WFPB ─────────────────────────────────────── */}
      {topic === "why" && (
        <div className="flex flex-col gap-6">
          <SectionCard title="Why Whole Food Plant-Based?" icon="🌍">
            <p className="text-sm leading-relaxed text-muted-foreground">
              A Whole Food Plant-Based diet avoids all animal products and is rich in a
              variety of fresh fruits, vegetables, whole grains, legumes and nuts; full of
              fibre, rich in vitamins and minerals, free from cholesterol, naturally low in
              calories and saturated fats.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{TRAINING_NOTE}</p>
          </SectionCard>

          <SectionCard title="But where do I get my…?" icon="❓">
            <div className="grid gap-4 md:grid-cols-3">
              {NUTRITION_QA.map((qa) => (
                <div key={qa.q} className="rounded-2xl border border-border bg-white p-4">
                  <p className="text-sm font-bold text-uw-navy">{qa.q}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{qa.a}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {qa.sources.map((s) => (
                      <Badge key={s} variant="secondary" className="bg-uw-green/10 text-uw-green">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Plant-Based Source Examples" icon="📊">
            <p className="mb-3 text-sm text-muted-foreground">
              Six key nutrients and where to find them in fruits, grains, legumes/nuts and
              vegetables.
            </p>
            <div className="scroll-area max-h-96 overflow-y-auto rounded-xl border border-border">
              <table className="w-full min-w-[640px] text-sm">
                <thead className="sticky top-0 bg-uw-teal text-white">
                  <tr>
                    <th className="p-3 text-left font-semibold">Nutrient</th>
                    <th className="p-3 text-left font-semibold">Fruits</th>
                    <th className="p-3 text-left font-semibold">Grains</th>
                    <th className="p-3 text-left font-semibold">Legumes / Nuts</th>
                    <th className="p-3 text-left font-semibold">Vegetables</th>
                  </tr>
                </thead>
                <tbody>
                  {NUTRIENT_TABLE.map((row, i) => (
                    <tr key={row.nutrient} className={i % 2 ? "bg-uw-teal-light/40" : "bg-white"}>
                      <td className="p-3 font-bold text-uw-teal">{row.nutrient}</td>
                      <td className="p-3 text-muted-foreground">{row.fruits}</td>
                      <td className="p-3 text-muted-foreground">{row.grains}</td>
                      <td className="p-3 text-muted-foreground">{row.legumes}</td>
                      <td className="p-3 text-muted-foreground">{row.vegetables}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          <SectionCard title="Functions of Each Group of Nutrients" icon="🔬">
            <Accordion type="single" collapsible className="w-full">
              {NUTRIENT_FUNCTIONS.map((n) => (
                <AccordionItem key={n.name} value={n.name}>
                  <AccordionTrigger className="text-sm font-bold text-uw-navy">
                    {n.name}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      {n.functions.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <div className="rounded-lg bg-uw-green/10 p-3 text-sm text-uw-green">
                      <strong>Eat:</strong> {n.good}
                    </div>
                    {n.avoid && (
                      <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                        <strong>Limit:</strong> {n.avoid}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SectionCard>

          <Card className="overflow-hidden border-uw-teal/20">
            <CardContent className="p-4">
              <div className="scroll-area max-h-96 overflow-y-auto rounded-xl">
                <Image
                  src="/images/manual-whywfpb.png"
                  alt="Why whole food plant-based — protein, calcium and iron sources from the manual"
                  width={910}
                  height={1287}
                  className="w-full object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ── PROTOCOL ─────────────────────────────────────── */}
      {topic === "protocol" && (
        <div className="flex flex-col gap-6">
          <SectionCard title="The Ubuntu Wellness Protocol" icon="❄️">
            <p className="mb-4 text-sm text-muted-foreground">
              Seven healing elements — the foundation of your 21-day reset.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {PROTOCOL.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-uw-teal/20 bg-gradient-to-br from-white to-uw-teal-light/50 p-5"
                >
                  <p className="flex items-center gap-2 text-base font-bold text-uw-navy">
                    <span aria-hidden className="text-2xl">{p.icon}</span>
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{p.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-2xl bg-uw-navy p-4 text-center text-sm italic leading-relaxed text-white">
              {UBUNTU_CIRCLE}
            </p>
          </SectionCard>

          <Card className="overflow-hidden border-uw-teal/20">
            <CardContent className="p-4">
              <div className="scroll-area max-h-96 overflow-y-auto rounded-xl">
                <Image
                  src="/images/manual-protocol.png"
                  alt="The Ubuntu Wellness Protocol page from the manual"
                  width={910}
                  height={1287}
                  className="w-full object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <SectionCard title="Balanced Lifestyle" icon="⚖️">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BALANCED_LIFESTYLE.map((b) => (
                <div key={b.title} className="rounded-2xl border border-border bg-white p-4">
                  <p className="flex items-center gap-2 font-bold text-uw-navy">
                    <span aria-hidden className="text-xl">{b.icon}</span>
                    {b.title}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {b.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-1.5 text-sm text-muted-foreground">
                        <span className="mt-1 text-uw-teal" aria-hidden>•</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* ── WELLNESS PRINCIPLES ──────────────────────────── */}
      {topic === "wellness" && (
        <div className="flex flex-col gap-6">
          <SectionCard title="The W-E-L-L-N-E-S-S Principles" icon="✨">
            <div className="grid gap-3 sm:grid-cols-2">
              {WELLNESS_PRINCIPLES.map((p) => (
                <div
                  key={p.letter + p.word}
                  className="flex items-start gap-3 rounded-2xl border border-uw-teal/15 bg-white p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-uw-teal text-lg font-extrabold text-white">
                    {p.letter}
                  </span>
                  <div>
                    <p className="font-bold text-uw-navy">{p.word}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* ── DIABETES 8 MODEL ─────────────────────────────── */}
      {topic === "model" && (
        <div className="flex flex-col gap-6">
          <SectionCard title="The Diabetes 8 Self-Care Model" icon="🎯">
            <p className="mb-4 text-sm text-muted-foreground">
              Eight behaviours spelled by D-I-A-B-E-T-E-S — enlighten, inspire, develop,
              optimise.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {DIABETES8_MODEL.map((m) => (
                <div
                  key={m.letter + m.behaviour}
                  className="rounded-2xl bg-gradient-to-br from-uw-teal to-uw-navy p-4 text-center text-white shadow-sm"
                >
                  <p className="text-3xl font-extrabold">{m.letter}</p>
                  <p className="mt-1 text-xs font-semibold leading-tight">{m.behaviour}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-uw-teal/20 bg-uw-teal-light/50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-uw-teal">
                  Outer ring · Four dimensions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {DIABETES8_DIMENSIONS.map((d) => (
                    <Badge key={d} variant="secondary" className="bg-white text-uw-navy">
                      {d}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-uw-green/25 bg-uw-green/5 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-uw-green">
                  Inner ring · Daily practice
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {DIABETES8_INNER.map((d) => (
                    <Badge key={d} variant="secondary" className="bg-white text-uw-navy">
                      {d}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          <Card className="overflow-hidden border-uw-teal/20">
            <CardContent className="p-4">
              <div className="scroll-area max-h-96 overflow-y-auto rounded-xl">
                <Image
                  src="/images/manual-model.png"
                  alt="Diabetes 8 self-care learning model diagram from the manual"
                  width={910}
                  height={1287}
                  className="w-full object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ── EMOTIONAL SCALE ──────────────────────────────── */}
      {topic === "emotions" && (
        <div className="flex flex-col gap-6">
          <SectionCard title="The Emotional Guidance Scale" icon="🧭">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {EMOTIONAL_GUIDANCE.intro}
            </p>
            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              <div>
                <Badge className="mb-3 bg-uw-green text-white">
                  ↑ Upward Spiral — Self Love
                </Badge>
                <div className="flex flex-col gap-2">
                  {EMOTIONAL_GUIDANCE.upward.map((e) => (
                    <div
                      key={e.level}
                      className="flex items-center gap-3 rounded-xl border border-uw-green/25 bg-uw-green/5 p-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-uw-green text-xs font-bold text-white">
                        {e.level}
                      </span>
                      <span className="text-sm font-medium text-uw-navy">{e.emotion}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Badge className="mb-3 bg-red-500 text-white">
                  ↓ Downward Spiral — Fear
                </Badge>
                <div className="scroll-area flex max-h-96 flex-col gap-2 overflow-y-auto pr-1">
                  {EMOTIONAL_GUIDANCE.downward.map((e) => (
                    <div
                      key={e.level}
                      className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50/60 p-3"
                      style={{ opacity: 1 - (e.level - 8) * 0.045 }}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-400 text-xs font-bold text-white">
                        {e.level}
                      </span>
                      <span className="text-sm font-medium text-uw-navy">{e.emotion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 rounded-xl bg-uw-teal-light p-3 text-center text-xs text-uw-navy">
              Based on Abraham Hicks&rsquo; Emotional Guidance Scale
            </p>
          </SectionCard>

          <Card className="overflow-hidden border-uw-teal/20">
            <CardContent className="p-4">
              <div className="scroll-area max-h-96 overflow-y-auto rounded-xl">
                <Image
                  src="/images/manual-emotional.png"
                  alt="Emotional guidance scale diagram from the manual"
                  width={910}
                  height={1287}
                  className="w-full object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ── LEARNING PATH ────────────────────────────────── */}
      {topic === "learning" && (
        <div className="flex flex-col gap-6">
          <SectionCard title="Our Approach to Learning" icon="🎓">
            <div className="grid gap-3 sm:grid-cols-2">
              {LEARNING_APPROACH.map((l) => (
                <div key={l.title} className="rounded-2xl border border-border bg-white p-4">
                  <p className="font-bold text-uw-navy">{l.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{l.text}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="The 4 Stages of Learning" icon="📈">
            <p className="mb-4 text-sm text-muted-foreground">
              Learning occurs when we incorporate knowledge, attitude and behavioural
              components in the intervention process. A person needs to know what and how
              to do it, be willing to do it, and have the ability to do it.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {STAGES_OF_LEARNING.map((s) => (
                <div
                  key={s.stage}
                  className="relative rounded-2xl border border-uw-teal/20 bg-gradient-to-br from-white to-uw-teal-light/60 p-4 pt-6"
                >
                  <span className="absolute -top-3 left-4 flex h-7 w-7 items-center justify-center rounded-full bg-uw-teal text-xs font-bold text-white">
                    {s.stage}
                  </span>
                  <p className="text-sm font-bold text-uw-navy">{s.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-xl bg-uw-amber/10 p-4 text-center text-sm italic text-uw-navy">
              &ldquo;If you can not explain it simply, you do not understand it well
              enough.&rdquo; — Albert Einstein
            </p>
          </SectionCard>

          <Card className="overflow-hidden border-uw-teal/20">
            <CardContent className="p-4">
              <div className="scroll-area max-h-96 overflow-y-auto rounded-xl">
                <Image
                  src="/images/manual-stages.png"
                  alt="Stages of learning grid from the manual"
                  width={910}
                  height={1287}
                  className="w-full object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ── ROOT CAUSES & RISKS ──────────────────────────── */}
      {topic === "risks" && (
        <div className="flex flex-col gap-6">
          <SectionCard
            title="The Root Cause of Diabetes"
            icon="🔍"
            className="border-uw-amber/30"
          >
            <p className="text-sm font-semibold text-uw-navy">
              The root cause of diabetes can be lifestyle factors &amp; poor dietary
              choices.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {INSULIN_RESISTANCE}
            </p>
            <p className="mb-2 mt-4 text-sm font-bold text-uw-navy">
              The root causes of insulin resistance:
            </p>
            <ol className="grid list-inside list-decimal gap-1.5 sm:grid-cols-2">
              {ROOT_CAUSES.map((c) => (
                <li key={c} className="rounded-lg bg-uw-amber/10 p-2.5 text-sm text-uw-navy">
                  {c}
                </li>
              ))}
            </ol>
          </SectionCard>

          <SectionCard title="Possible Diabetes Complications" icon="⚠️">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {COMPLICATIONS.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-red-100 bg-red-50/50 p-4"
                >
                  <p className="flex items-center gap-2 font-bold text-uw-navy">
                    <span aria-hidden className="text-xl">{c.icon}</span>
                    {c.title}
                  </p>
                  {c.detail && (
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {c.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-xl border-l-4 border-uw-teal bg-uw-teal-light p-4 text-sm leading-relaxed text-uw-navy">
              {COMPLICATIONS_ADVICE}
            </p>
            <p className="mt-3 rounded-xl bg-white p-3 text-xs italic text-muted-foreground">
              Always seek the guidance of your doctor or other qualified health
              professional with any questions you may have regarding your health or a
              medical condition.
            </p>
          </SectionCard>

          <Card className="overflow-hidden border-uw-teal/20">
            <CardContent className="p-4">
              <div className="scroll-area max-h-96 overflow-y-auto rounded-xl">
                <Image
                  src="/images/manual-rootcause.png"
                  alt="Root cause of diabetes and the four pillars from the manual"
                  width={910}
                  height={1287}
                  className="w-full object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ── HEALTHY EATING ───────────────────────────────── */}
      {topic === "eating" && (
        <div className="flex flex-col gap-6">
          <SectionCard title="10 Guidelines for Healthy Eating" icon="🍽️">
            <ol className="grid list-inside list-decimal gap-2 sm:grid-cols-2">
              {TEN_GUIDELINES.map((g) => (
                <li key={g} className="rounded-lg bg-uw-teal-light/60 p-3 text-sm text-uw-navy">
                  {g}
                </li>
              ))}
            </ol>
          </SectionCard>

          <SectionCard title="Healthy Eating Guidelines" icon="🌈">
            <p className="mb-4 text-sm text-muted-foreground">
              For a healthy, balanced lifestyle try to implement the following:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {EATING_GUIDELINES.map((g) => (
                <div
                  key={g.word}
                  className="rounded-2xl border border-uw-green/25 bg-uw-green/5 p-4"
                >
                  <p className="text-sm font-extrabold uppercase tracking-wide text-uw-green">
                    {g.word}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-uw-navy">{g.text}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Natural Foods Lead to Health" icon="🌱" className="bg-uw-teal-light/40">
            <p className="text-sm leading-relaxed text-muted-foreground">{WFPB_PRINCIPLE}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The principles of this program promote a healthy natural whole food vegan
              diet for healing and vibrant health that excludes all animal products and
              includes abundant fresh fruits and vegetables, legumes, grains, nuts and
              seeds.
            </p>
          </SectionCard>

          <SectionCard title="Official resources" icon="🔗">
            <div className="flex flex-wrap gap-2">
              {RESOURCES.map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-uw-teal/30 px-4 py-2 text-sm font-medium text-uw-teal transition-colors hover:bg-uw-teal hover:text-white"
                >
                  {r.label} ↗
                </a>
              ))}
            </div>
          </SectionCard>
        </div>
      )}
    </div>
  );
}
