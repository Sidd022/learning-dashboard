// base skeleton used by Suspense boundaries and loading.tsx
export default function CourseCardSkeleton() {
  return (
    <div className="rounded-2xl border border-[#1e2d40] bg-[#111827] p-5 overflow-hidden">
      <div className="w-10 h-10 rounded-xl skeleton mb-4" />
      <div className="h-4 rounded skeleton mb-2 w-3/4" />
      <div className="h-3 rounded skeleton mb-4 w-1/2" />
      <div className="space-y-1.5">
        <div className="flex justify-between">
          <div className="h-3 w-12 rounded skeleton" />
          <div className="h-3 w-8 rounded skeleton" />
        </div>
        <div className="h-1.5 w-full rounded-full skeleton" />
      </div>
    </div>
  );
}

export function CourseGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <CourseCardSkeleton key={i} />
      ))}
    </>
  );
}
