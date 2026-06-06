export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl bg-bg-elevated border border-border-subtle overflow-hidden ${className}`}
    >
      <div className="p-5 h-full flex flex-col gap-4">
        <div className="w-10 h-10 rounded-xl bg-bg-muted animate-pulse" />
        <div className="space-y-2 flex-1">
          <div className="h-4 w-3/4 rounded-full bg-bg-muted animate-pulse" />
          <div className="h-3 w-1/2 rounded-full bg-bg-muted animate-pulse" />
        </div>
        {/* progress area */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-3 w-14 rounded-full bg-bg-muted animate-pulse" />
            <div className="h-3 w-8 rounded-full bg-bg-muted animate-pulse" />
          </div>
          <div className="h-1.5 w-full rounded-full bg-bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="rounded-2xl bg-bg-elevated border border-border-subtle overflow-hidden col-span-4">
      <div className="p-8 h-full flex flex-col gap-6">
        <div className="space-y-3">
          <div className="h-4 w-28 rounded-full bg-bg-muted animate-pulse" />
          <div className="h-9 w-2/3 rounded-xl bg-bg-muted animate-pulse" />
        </div>
        <div className="flex gap-4 mt-auto flex-wrap">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-14 w-28 rounded-xl bg-bg-muted animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
