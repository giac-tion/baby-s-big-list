import { useState } from "react";
import { Check, ShoppingBag, ClipboardList, ChevronDown } from "lucide-react";
import type { Period } from "@/data/checklistData";

type Props = {
  period: Period;
  checked: Record<string, boolean>;
  onToggle: (id: string) => void;
};

const ChecklistCard = ({ period, checked, onToggle }: Props) => {
  const [open, setOpen] = useState(true);

  const total = period.items.length;
  const done = period.items.filter((i) => checked[i.id]).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  const todoItems = period.items.filter((i) => i.category === "todo");
  const buyItems = period.items.filter((i) => i.category === "buy");

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden transition-all">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-secondary/40 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl shrink-0">{period.emoji}</span>
          <div className="min-w-0">
            <h2 className="font-display text-lg font-semibold text-foreground leading-tight">
              {period.title}
            </h2>
            <p className="text-sm text-muted-foreground">{period.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-medium text-muted-foreground">
            {done}/{total}
          </span>
          <div className="w-16 h-2 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-0" : "-rotate-90"}`}
          />
        </div>
      </button>

      {/* Content */}
      {open && (
        <div className="px-5 pb-5 space-y-4">
          {todoItems.length > 0 && (
            <Section
              icon={<ClipboardList className="w-4 h-4" />}
              title="To Do"
              items={todoItems}
              checked={checked}
              onToggle={onToggle}
              accentClass="text-primary"
            />
          )}
          {buyItems.length > 0 && (
            <Section
              icon={<ShoppingBag className="w-4 h-4" />}
              title="To Buy"
              items={buyItems}
              checked={checked}
              onToggle={onToggle}
              accentClass="text-accent"
            />
          )}
        </div>
      )}
    </div>
  );
};

type SectionProps = {
  icon: React.ReactNode;
  title: string;
  items: { id: string; label: string }[];
  checked: Record<string, boolean>;
  onToggle: (id: string) => void;
  accentClass: string;
};

const Section = ({ icon, title, items, checked, onToggle, accentClass }: SectionProps) => (
  <div>
    <div className={`flex items-center gap-1.5 mb-2 ${accentClass}`}>
      {icon}
      <span className="text-xs font-semibold uppercase tracking-wider">{title}</span>
    </div>
    <ul className="space-y-1">
      {items.map((item) => {
        const isDone = !!checked[item.id];
        return (
          <li key={item.id}>
            <button
              onClick={() => onToggle(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors
                ${isDone ? "bg-secondary/50" : "hover:bg-secondary/30"}`}
            >
              <span
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all
                  ${isDone ? "bg-primary border-primary" : "border-muted-foreground/30"}`}
              >
                {isDone && <Check className="w-3.5 h-3.5 text-primary-foreground" />}
              </span>
              <span
                className={`text-sm transition-all ${isDone ? "line-through text-muted-foreground" : "text-foreground"}`}
              >
                {item.label}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

export default ChecklistCard;
