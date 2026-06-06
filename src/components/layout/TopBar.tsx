"use client";

import { Search, Bell } from "lucide-react";

export function TopBar() {
  return (
    <header className="h-16 border-b border-border-subtle bg-bg-subtle/80 backdrop-blur-sm flex items-center justify-between px-5 shrink-0">
      <h2 className="text-sm font-semibold text-white/60 hidden md:block">Dashboard</h2>

      <div className="flex items-center gap-2 ml-auto">
        <div className="flex items-center gap-2 bg-bg-elevated border border-border-subtle rounded-xl px-3 py-2 w-48 md:w-60">
          <Search size={14} className="text-white/25 shrink-0" />
          <input
            type="text"
            placeholder="Search courses..."
            className="bg-transparent text-xs text-white/60 placeholder:text-white/25 outline-none w-full"
          />
        </div>

        <button className="relative w-9 h-9 rounded-xl bg-bg-elevated border border-border-subtle flex items-center justify-center text-white/40 hover:text-white/70 transition-colors">
          <Bell size={15} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </button>
      </div>
    </header>
  );
}
