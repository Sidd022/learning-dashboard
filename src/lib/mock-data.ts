import type { Course } from "@/types";

export const MOCK_COURSES: Course[] = [
  {
    id: "1",
    title: "Advanced React Patterns",
    progress: 75,
    icon_name: "Layers",
    created_at: "2024-09-01T00:00:00.000Z",
  },
  {
    id: "2",
    title: "System Design Fundamentals",
    progress: 42,
    icon_name: "Network",
    created_at: "2024-09-10T00:00:00.000Z",
  },
  {
    id: "3",
    title: "TypeScript Mastery",
    progress: 90,
    icon_name: "Code2",
    created_at: "2024-10-03T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Database Architecture",
    progress: 28,
    icon_name: "Database",
    created_at: "2024-10-15T00:00:00.000Z",
  },
];
