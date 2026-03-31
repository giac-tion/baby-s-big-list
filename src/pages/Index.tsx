import { useState, useEffect } from "react";
import { Baby } from "lucide-react";
import { periods } from "@/data/checklistData";
import ChecklistCard from "@/components/ChecklistCard";

const STORAGE_KEY = "baby-checklist";

const Index = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const totalItems = periods.flatMap((p) => p.items).length;
  const totalDone = periods
    .flatMap((p) => p.items)
    .filter((i) => checked[i.id]).length;
  const overallPct = totalItems > 0 ? Math.round((totalDone / totalItems) * 100) : 0;

  return (
    <div className="min-h-screen pb-16">
      {/* Hero */}
      <header className="pt-12 pb-8 px-4 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
          <Baby className="w-7 h-7 text-primary" />
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Baby Prep Checklist
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto text-sm">
          Everything you need to do and buy — from first trimester through the newborn stage.
        </p>

        {/* Overall progress */}
        <div className="mt-6 max-w-xs mx-auto">
          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
            <span>Overall progress</span>
            <span className="font-medium text-foreground">{overallPct}%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700"
              style={{ width: `${overallPct}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">
            {totalDone} of {totalItems} items completed
          </p>
        </div>
      </header>

      {/* Cards */}
      <main className="max-w-2xl mx-auto px-4 space-y-4">
        {periods.map((period) => (
          <ChecklistCard
            key={period.id}
            period={period}
            checked={checked}
            onToggle={toggle}
          />
        ))}
      </main>
    </div>
  );
};

export default Index;
