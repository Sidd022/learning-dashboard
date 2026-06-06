import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ActivityDay } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

// Generates a fake 84-day activity grid (12 weeks).
// Using a fixed seed-like sequence so it looks realistic but stays stable
// between renders without needing an actual DB query.
export function generateActivityData(): ActivityDay[] {
  const days: ActivityDay[] = [];
  const weights = [0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 3, 4]; // rough monthly pattern

  for (let i = 83; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];

    const weekday = d.getDay();
    const monthWeight = weights[d.getMonth() % weights.length];
    // weekdays are more likely to have sessions
    const base = weekday >= 1 && weekday <= 5 ? monthWeight : Math.floor(monthWeight / 2);
    const jitter = Math.floor(((i * 17 + 31) % 7) - 2);
    const count = Math.max(0, base + jitter);

    days.push({ date: dateStr, count });
  }

  return days;
}
