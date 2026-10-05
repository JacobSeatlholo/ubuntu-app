"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { SHOPPING_LIST, PROGRAM } from "@/lib/program-data";
import { useShoppingList } from "@/lib/storage";

export default function ShoppingSection() {
  const [checked, setChecked] = useShoppingList();
  const [hideChecked, setHideChecked] = useState(false);

  const allItems = useMemo(
    () => SHOPPING_LIST.flatMap((c) => c.items),
    []
  );
  const total = allItems.length;
  const doneCount = allItems.filter((i) => checked.includes(i)).length;
  const pct = Math.round((doneCount / total) * 100);

  const toggle = (item: string) => {
    setChecked((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const checkAllCategory = (items: string[]) => {
    setChecked((prev) => {
      const s = new Set(prev);
      const allIn = items.every((i) => s.has(i));
      items.forEach((i) => (allIn ? s.delete(i) : s.add(i)));
      return [...s];
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="border-uw-teal/20">
        <CardHeader>
          <CardTitle className="flex flex-wrap items-center justify-between gap-3 text-uw-navy">
            <span>🛒 Ubuntu Shopping List</span>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-uw-teal-light text-uw-teal">
                {doneCount}/{total} items
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setHideChecked((v) => !v)}
                className="border-uw-teal/40 text-uw-teal"
              >
                {hideChecked ? "Show all" : "Hide checked"}
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div>
            <Progress value={pct} className="h-2.5" />
            <p className="mt-1.5 text-xs text-muted-foreground">
              {pct}% of your Ubuntu pantry gathered · Please note: buy fresh items as
              necessary
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {SHOPPING_LIST.map((cat) => {
              const catDone = cat.items.filter((i) => checked.includes(i)).length;
              return (
                <div
                  key={cat.category}
                  className="rounded-2xl border border-border bg-white p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <p className="flex items-center gap-2 font-bold text-uw-navy">
                      <span aria-hidden className="text-xl">{cat.icon}</span>
                      {cat.category}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-[10px]">
                        {catDone}/{cat.items.length}
                      </Badge>
                      <button
                        onClick={() => checkAllCategory(cat.items)}
                        className="text-xs font-semibold text-uw-teal hover:underline"
                      >
                        {catDone === cat.items.length ? "Uncheck all" : "Check all"}
                      </button>
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {cat.items
                      .filter((i) => !hideChecked || !checked.includes(i))
                      .map((item) => {
                        const isChecked = checked.includes(item);
                        return (
                          <li key={item}>
                            <label
                              className={cn(
                                "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-uw-teal-light/60",
                                isChecked && "opacity-60"
                              )}
                            >
                              <Checkbox
                                checked={isChecked}
                                onCheckedChange={() => toggle(item)}
                                aria-label={item}
                              />
                              <span
                                className={cn(
                                  "text-uw-navy",
                                  isChecked && "line-through"
                                )}
                              >
                                {item}
                              </span>
                            </label>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl bg-uw-teal-light/70 p-4 text-sm text-uw-navy">
            <p className="font-semibold">Need any assistance?</p>
            <p className="mt-1 text-muted-foreground">
              Program Nutritionist — {PROGRAM.contact.nutritionist.name} ·{" "}
              <a
                href={`mailto:${PROGRAM.contact.nutritionist.email}`}
                className="text-uw-teal hover:underline"
              >
                {PROGRAM.contact.nutritionist.email}
              </a>{" "}
              · {PROGRAM.contact.nutritionist.phone}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
