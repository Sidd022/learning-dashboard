"use client";

import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center h-full min-h-[200px]">
      <div className="flex flex-col items-center gap-4 text-center p-8">
        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
          <AlertTriangle size={20} className="text-rose-400" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white/80">Something went wrong</h2>
          <p className="text-xs text-white/40 mt-1">{error.message}</p>
        </div>
        <button
          onClick={reset}
          className="text-xs px-4 py-2 rounded-xl bg-bg-elevated border border-border-subtle text-white/60 hover:text-white/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
