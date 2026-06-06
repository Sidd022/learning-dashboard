import { Suspense } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { BentoGrid } from "@/components/dashboard/BentoGrid";
import { HeroTile } from "@/components/dashboard/HeroTile";
import { ActivityTile } from "@/components/dashboard/ActivityTile";
import { StatsTile } from "@/components/dashboard/StatsTile";
import { CoursesGrid } from "@/components/dashboard/CoursesGrid";
import { CoursesLoading } from "@/components/dashboard/CoursesLoading";

export default function HomePage() {
  return (
    <div className="flex h-screen bg-bg-base overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopBar />

        <main className="flex-1 overflow-y-auto p-4 pb-20 md:pb-5 scrollbar-none">
          <BentoGrid>
            <HeroTile />
            <ActivityTile />
            <StatsTile />

            {/* courses section — server component with its own loading state */}
            <Suspense fallback={<CoursesLoading />}>
              <CoursesGrid />
            </Suspense>
          </BentoGrid>
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
