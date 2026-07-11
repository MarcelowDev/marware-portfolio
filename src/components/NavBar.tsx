"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "/" },
    { name: "Tech", href: "/tech-stack" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto animate-slide-in-left animate-duration-900">
        <div className="glass-surface px-5 md:px-8 h-16 rounded-2xl flex items-center justify-between md:justify-start gap-4 md:gap-10 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xs backdrop-grayscale">
          <Link href="/" className="text-xl font-black tracking-tighter text-white group" onClick={() => setIsOpen(false)}>
            I'M<span className="text-primary-container group-hover:text-rose-accent transition-colors">MARCELO</span>
          </Link>

          {/* Desktop links */}
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

          <Link href="/contact" className="text-[10px] font-label-bold uppercase tracking-widest bg-white text-black px-5 py-2 rounded-lg hover:bg-primary-container transition-all active:scale-95 hidden md:inline-flex items-center">
            Hire
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden ml-auto flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`fixed inset-x-4 top-[5.5rem] z-40 md:hidden glass-surface rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-5 py-4 rounded-xl font-label-bold text-sm uppercase tracking-widest transition-all ${isActive
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="h-px bg-white/10 my-2" />
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="px-5 py-4 rounded-xl font-label-bold text-sm uppercase tracking-widest bg-white text-black hover:bg-primary-container transition-all text-center active:scale-95"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* Overlay to close on tap outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
