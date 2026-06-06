import { SkeletonCard, SkeletonHero } from "@/components/ui/SkeletonCard";

export default function Loading() {
  return (
    <div className="grid grid-cols-4 gap-3 p-5">
      <SkeletonHero />
      {/* activity + stats tiles */}
      <SkeletonCard className="min-h-[200px] col-span-3" />
      <SkeletonCard className="min-h-[200px]" />
      {/* course cards */}
      {[1, 2, 3, 4].map((i) => (
        <SkeletonCard key={i} className="min-h-[180px]" />
      ))}
    </div>
  );
}
