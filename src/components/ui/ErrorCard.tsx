import { AlertTriangle } from "lucide-react";

interface ErrorCardProps {
  message?: string;
}

export default function ErrorCard({ message }: ErrorCardProps) {
  return (
    <div className="col-span-full rounded-2xl border border-rose-500/25 bg-rose-500/5 p-5 flex items-center gap-3">
      <AlertTriangle size={18} className="text-rose-400 shrink-0" />
      <div>
        <p className="text-sm font-semibold text-rose-300">Failed to load courses</p>
        <p className="text-xs text-rose-400/60 mt-0.5">
          {message ?? "Could not connect. Check your Supabase env vars."}
        </p>
      </div>
    </div>
  );
}
