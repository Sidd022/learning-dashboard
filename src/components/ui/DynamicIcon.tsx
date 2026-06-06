"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  // fall back to BookOpen if icon name isn't found
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[name];
  if (!IconComponent) return <Icons.BookOpen {...props} />;
  return <IconComponent {...props} />;
}
