"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutDashboard, BookOpen, BarChart2, Settings } from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Home", icon: LayoutDashboard, href: "/" },
  { id: "courses", label: "Courses", icon: BookOpen, href: "#" },
  { id: "stats", label: "Analytics", icon: BarChart2, href: "#" },
  { id: "settings", label: "Settings", icon: Settings, href: "#" },
];

export function MobileNav() {
  const [active, setActive] = useState("dashboard");

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-subtle border-t border-border-subtle">
      <ul className="flex">
        {navItems.map((item) => (
          <li key={item.id} className="flex-1">
            <Link
              href={item.href}
              onClick={() => setActive(item.id)}
              className="flex flex-col items-center gap-1 py-3 px-2 relative"
            >
              {active === item.id && (
                <motion.div
                  layoutId="mob-pill"
                  className="absolute inset-x-2 top-1 bottom-1 rounded-xl bg-white/6"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <item.icon
                size={18}
                className={`relative z-10 transition-colors ${
                  active === item.id ? "text-cyan-400" : "text-white/35"
                }`}
              />
              <span
                className={`text-[10px] font-medium relative z-10 ${
                  active === item.id ? "text-white/80" : "text-white/30"
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
