import { SkeletonCard } from "@/components/ui/SkeletonCard";

export function CoursesLoading() {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <SkeletonCard key={i} className="min-h-[180px]" />
        ))}
      </div>
    </div>
  );
}
