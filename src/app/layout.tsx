import type { Metadata } from "next";
import { Epilogue, Manrope, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarceloRosales - Senior FullStack Developer",
  description: "Architecting robust backend systems and crafting dynamic, high-performance frontends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${manrope.variable} ${spaceGrotesk.variable} antialiased dark`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md selection:bg-rose-accent/30 selection:text-white min-h-dvh flex flex-col overflow-x-hidden">
        {/* Floating Navigation */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto">
          <div className="glass-surface px-8 h-16 rounded-2xl flex items-center gap-10 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xs backdrop-grayscale">
            <Link href="/" className="text-xl font-black tracking-tighter text-white group">
              MAR<span className="text-primary-container group-hover:text-rose-accent transition-colors">WARE</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link className="text-[10px] font-label-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors relative group" href="/">
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-container group-hover:w-full transition-all duration-500"></span>
              </Link>
              <Link className="text-[10px] font-label-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors relative group" href="/tech-stack">
                Tech
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-container group-hover:w-full transition-all duration-500"></span>
              </Link>
              <Link className="text-[10px] font-label-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors relative group" href="/contact">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-container group-hover:w-full transition-all duration-500"></span>
              </Link>
            </div>

            <div className="h-6 w-[1px] bg-white/10 hidden md:block"></div>

            <Link href="/contact" className="text-[10px] font-label-bold uppercase tracking-widest bg-white text-black px-5 py-2 rounded-lg hover:bg-primary-container transition-all active:scale-95">
              Hire
            </Link>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="w-full py-20 bg-black/90 border-t border-white/10 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center px-16 max-w-7xl mx-auto gap-8 font-label-bold text-xs uppercase tracking-[0.2em]">
            <div className="text-lg font-black text-white">MarWare</div>
            <div className="text-white/40">© 2024 MarWare. BUILT FOR THE FUTURE.</div>
            <div className="flex gap-8">
              <a className="text-white/40 hover:text-rose-accent transition-colors duration-400 opacity-80 hover:opacity-100" href="https://github.com/marware" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="text-white/40 hover:text-rose-accent transition-colors duration-400 opacity-80 hover:opacity-100" href="https://linkedin.com/in/marware" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="text-white/40 hover:text-rose-accent transition-colors duration-400 opacity-80 hover:opacity-100" href="https://dribbble.com/marware" target="_blank" rel="noopener noreferrer">Dribbble</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
