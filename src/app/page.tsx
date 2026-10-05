"use client";

import { useEffect, useState } from "react";
import { TopNav, BottomNav, type TabId } from "@/components/app/nav";
import { AppFooter } from "@/components/app/footer";
import HomeSection from "@/components/app/home";
import JourneySection from "@/components/app/journey";
import GlucoseSection from "@/components/app/glucose";
import MealsSection from "@/components/app/meals";
import LearnSection from "@/components/app/learn";
import ShoppingSection from "@/components/app/shopping";
import { useCompletedDays, useProgramStart, useChecklist, useShoppingList, useGlucoseLog, useMealChecks } from "@/lib/storage";

export default function Page() {
  const [tab, setTab] = useState<TabId>("home");
  const [programStart, setProgramStart] = useProgramStart();
  const [completed] = useCompletedDays();
  const [checklist] = useChecklist();
  const [shopping] = useShoppingList();
  const [glucose] = useGlucoseLog();
  const [mealChecks] = useMealChecks();

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab]);

  const startProgram = () => {
    if (!programStart) setProgramStart(new Date().toISOString().slice(0, 10));
    setTab("journey");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopNav active={tab} onChange={setTab} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-6 sm:px-6 md:pb-10">
        {tab === "home" && (
          <HomeSection
            completedCount={completed.length}
            onNavigate={setTab}
            onStart={startProgram}
            hasStarted={!!programStart}
          />
        )}
        {tab === "journey" && <JourneySection />}
        {tab === "glucose" && <GlucoseSection />}
        {tab === "meals" && <MealsSection />}
        {tab === "learn" && <LearnSection />}
        {tab === "shopping" && <ShoppingSection />}
      </main>

      <AppFooter />
      <BottomNav active={tab} onChange={setTab} />

      {/* Hidden debug/status for hydration consistency — persists all data in localStorage */}
      <span className="sr-only" data-testid="app-state" data-state={JSON.stringify({ programStart, completed, checklist, shopping, glucose, mealChecks })} />
    </div>
  );
}
