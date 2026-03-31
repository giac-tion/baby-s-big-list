export type ChecklistItem = {
  id: string;
  label: string;
  category: "todo" | "buy";
};

export type Period = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  items: ChecklistItem[];
};

export const periods: Period[] = [
  {
    id: "first-trimester",
    title: "First Trimester",
    subtitle: "Weeks 1–12",
    emoji: "🌱",
    items: [
      { id: "1a", label: "Schedule first prenatal appointment", category: "todo" },
      { id: "1b", label: "Start taking prenatal vitamins", category: "buy" },
      { id: "1c", label: "Research health insurance coverage", category: "todo" },
      { id: "1d", label: "Choose an OB-GYN or midwife", category: "todo" },
      { id: "1e", label: "Pregnancy journal", category: "buy" },
      { id: "1f", label: "Begin budgeting for baby expenses", category: "todo" },
      { id: "1g", label: "Comfortable maternity bras", category: "buy" },
    ],
  },
  {
    id: "second-trimester",
    title: "Second Trimester",
    subtitle: "Weeks 13–26",
    emoji: "🌿",
    items: [
      { id: "2a", label: "Start a baby registry", category: "todo" },
      { id: "2b", label: "Research childcare options", category: "todo" },
      { id: "2c", label: "Sign up for a birthing class", category: "todo" },
      { id: "2d", label: "Maternity clothes", category: "buy" },
      { id: "2e", label: "Pregnancy pillow", category: "buy" },
      { id: "2f", label: "Begin thinking about baby names", category: "todo" },
      { id: "2g", label: "Nursery furniture (crib, dresser)", category: "buy" },
      { id: "2h", label: "Schedule anatomy scan", category: "todo" },
    ],
  },
  {
    id: "third-trimester",
    title: "Third Trimester",
    subtitle: "Weeks 27–40",
    emoji: "🍼",
    items: [
      { id: "3a", label: "Pack hospital bag", category: "todo" },
      { id: "3b", label: "Install car seat", category: "todo" },
      { id: "3c", label: "Car seat", category: "buy" },
      { id: "3d", label: "Stroller", category: "buy" },
      { id: "3e", label: "Diapers (newborn & size 1)", category: "buy" },
      { id: "3f", label: "Baby monitor", category: "buy" },
      { id: "3g", label: "Write a birth plan", category: "todo" },
      { id: "3h", label: "Pre-register at hospital", category: "todo" },
      { id: "3i", label: "Wash baby clothes & linens", category: "todo" },
      { id: "3j", label: "Swaddles & sleep sacks", category: "buy" },
      { id: "3k", label: "Bottles & bottle brush", category: "buy" },
      { id: "3l", label: "Set up nursery", category: "todo" },
    ],
  },
  {
    id: "postpartum",
    title: "After Baby Arrives",
    subtitle: "First 3 months",
    emoji: "👶",
    items: [
      { id: "4a", label: "Apply for birth certificate", category: "todo" },
      { id: "4b", label: "Add baby to insurance", category: "todo" },
      { id: "4c", label: "Schedule newborn pediatrician visit", category: "todo" },
      { id: "4d", label: "Postpartum recovery essentials", category: "buy" },
      { id: "4e", label: "Breast pump or formula", category: "buy" },
      { id: "4f", label: "Set up a feeding station", category: "todo" },
      { id: "4g", label: "Baby bathtub & toiletries", category: "buy" },
      { id: "4h", label: "Thank-you cards for gifts", category: "buy" },
      { id: "4i", label: "Look into postpartum support groups", category: "todo" },
      { id: "4j", label: "Baby carrier/wrap", category: "buy" },
    ],
  },
];
