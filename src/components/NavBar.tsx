"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Work", href: "/" },
    { name: "Tech", href: "/tech-stack" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto animate-slide-in-left animate-duration-900">
      <div className="glass-surface px-8 h-16 rounded-2xl flex items-center gap-10 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xs backdrop-grayscale">
        <Link href="/" className="text-xl font-black tracking-tighter text-white group">
          MAR<span className="text-primary-container group-hover:text-rose-accent transition-colors">WARE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[10px] font-label-bold uppercase tracking-widest transition-colors relative group ${isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-primary-container transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
              </Link>
            );
          })}
        </div>

        <div className="h-6 w-px bg-white/10 hidden md:block"></div>

        <Link href="/contact" className="text-[10px] font-label-bold uppercase tracking-widest bg-white text-black px-5 py-2 rounded-lg hover:bg-primary-container transition-all active:scale-95">
          Hire
        </Link>
      </div>
    </nav>
  );
}
