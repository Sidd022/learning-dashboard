"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronLeft,
  Sparkles,
  Bell,
  GraduationCap,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { id: "courses", label: "Courses", icon: BookOpen, href: "#" },
  { id: "analytics", label: "Analytics", icon: BarChart2, href: "#" },
  { id: "settings", label: "Settings", icon: Settings, href: "#" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("dashboard");

  return (
    <motion.nav
      animate={{ width: collapsed ? 64 : 220 }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      className="relative flex-shrink-0 hidden md:flex flex-col bg-bg-subtle border-r border-border-subtle overflow-hidden"
    >
      <div className="flex items-center gap-3 p-4 h-16 border-b border-border-subtle">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shrink-0">
          <GraduationCap size={16} className="text-white" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.15 }}
              className="text-sm font-bold text-white whitespace-nowrap"
            >
              LearnSpace
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <ul className="flex-1 p-2 space-y-0.5">
        {navItems.map((item) => (
          <motion.li key={item.id} layout>
            <Link
              href={item.href}
              onClick={() => setActive(item.id)}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors group"
            >
              {active === item.id && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-0 rounded-xl bg-white/5 border border-white/8"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <item.icon
                size={17}
                className={`relative z-10 shrink-0 transition-colors ${
                  active === item.id
                    ? "text-cyan-400"
                    : "text-white/35 group-hover:text-white/60"
                }`}
              />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    className={`relative z-10 whitespace-nowrap font-medium ${
                      active === item.id ? "text-white" : "text-white/45"
                    }`}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="p-2 border-t border-border-subtle space-y-0.5">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-white/35 hover:text-white/60 transition-colors">
          <Bell size={17} className="shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm font-medium whitespace-nowrap"
              >
                Notifications
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 shrink-0 flex items-center justify-center">
            <Sparkles size={12} className="text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-xs font-semibold text-white/80 whitespace-nowrap">Alex Johnson</p>
                <p className="text-[10px] text-white/30">Pro Plan</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-5 -right-3 w-6 h-6 rounded-full bg-bg-overlay border border-border-strong flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-bg-elevated transition-colors z-10"
      >
        <motion.div animate={{ rotate: collapsed ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronLeft size={12} />
        </motion.div>
      </button>
    </motion.nav>
  );
}
