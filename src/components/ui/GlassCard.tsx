import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "lime" | "rose" | "none";
}

export function GlassCard({ children, className = "", glowColor = "none", ...props }: GlassCardProps) {
  const glowClass = glowColor === "lime" ? "lime-glow" : glowColor === "rose" ? "rose-glow" : "";
  
  return (
    <div 
      className={`glass-surface p-md rounded-xl ${glowClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
