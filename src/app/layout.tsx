import type { Metadata } from "next";
import { Epilogue, Manrope, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
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
      data-scroll-behavior="smooth"
      lang="en"
      className={`${epilogue.variable} ${manrope.variable} ${spaceGrotesk.variable} antialiased dark`}
    >
      <head>
      </head>
      <body className="bg-background text-on-background font-body-md selection:bg-rose-accent/30 selection:text-white min-h-dvh flex flex-col overflow-x-hidden">
        {/* Floating Navigation */}
        <NavBar />

        {children}

        {/* Footer */}
        <footer className="w-full py-10 bg-black/90 border-t border-white/10 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center px-16 max-w-7xl mx-auto gap-8 font-label-bold text-xs uppercase tracking-[0.2em]">
            <div className="text-lg font-black text-white">MarWare</div>
            <div className="text-white/40">© {new Date().getFullYear()} MarWare. BUILT FOR THE FUTURE.</div>
            <div className="flex gap-8">
              <a className="text-white/40 hover:text-rose-accent transition-colors duration-400 opacity-80 hover:opacity-100" href="https://github.com/MarcelowDev" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="text-white/40 hover:text-rose-accent transition-colors duration-400 opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/marcelo-rc/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
