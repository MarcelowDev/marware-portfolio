import React from "next";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto relative overflow-visible grow w-full">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-on-tertiary-container/10 blur-[100px] rounded-full -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Identity & Contact Info */}
        <div className="lg:col-span-5 space-y-12 animate-fade-in-up">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-container/30 bg-primary-container/10 text-primary-container font-label-bold text-label-sm uppercase">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              Available for projects
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary leading-none">Get in touch</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg md:max-w-full">
              Have a vision for a high-end digital product? Let's build something exceptional together. MarWare specializes in technical precision and creative expression.
            </p>
          </div>
          <div className="space-y-8">
            {/* Email Card */}
            <div className="glass-surface p-8 rounded-xl group relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-4">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Direct Contact</span>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="font-headline-md text-2xl lg:text-xl xl:text-2xl text-primary tracking-tight break-all">marcelo@marware.dev</span>
                  <button className="flex shrink-0 items-center justify-center gap-2 bg-on-tertiary-container text-white px-6 py-3 rounded-lg font-label-bold text-label-bold active:scale-95 transition-all hover:brightness-110">
                    <span className="material-symbols-outlined text-[20px]">content_copy</span>
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-on-tertiary-container/10 blur-3xl group-hover:bg-on-tertiary-container/20 transition-all"></div>
            </div>
            {/* Social Media */}
            <div className="flex flex-wrap gap-4">
              <a className="glass-surface p-4 rounded-xl flex items-center gap-3 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all group" href="https://github.com/marware" target="_blank" rel="noopener noreferrer">
                <span className="font-label-bold text-label-bold uppercase">Github</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_outward</span>
              </a>
              <a className="glass-surface p-4 rounded-xl flex items-center gap-3 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all group" href="https://linkedin.com/in/marware" target="_blank" rel="noopener noreferrer">
                <span className="font-label-bold text-label-bold uppercase">LinkedIn</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_outward</span>
              </a>
              <a className="glass-surface p-4 rounded-xl flex items-center gap-3 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all group" href="https://twitter.com/marware" target="_blank" rel="noopener noreferrer">
                <span className="font-label-bold text-label-bold uppercase">Twitter</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_outward</span>
              </a>
              <a className="glass-surface p-4 rounded-xl flex items-center gap-3 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all group" href="https://dribbble.com/marware" target="_blank" rel="noopener noreferrer">
                <span className="font-label-bold text-label-bold uppercase">Dribbble</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div className="glass-surface p-8 md:p-12 rounded-2xl relative">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="font-label-bold text-label-sm uppercase text-on-surface-variant group-focus-within:text-[#00FF66] transition-colors">Name</label>
                  <input className="w-full bg-white/5 border-0 border-b border-white/10 p-4 font-body-md text-primary focus:ring-0 focus:border-[#00FF66] focus:outline-none transition-all placeholder:text-white/20" placeholder="Your full name" type="text" />
                </div>
                <div className="space-y-2 group">
                  <label className="font-label-bold text-label-sm uppercase text-on-surface-variant group-focus-within:text-[#00FF66] transition-colors">Email Address</label>
                  <input className="w-full bg-white/5 border-0 border-b border-white/10 p-4 font-body-md text-primary focus:ring-0 focus:border-[#00FF66] focus:outline-none transition-all placeholder:text-white/20" placeholder="example@domain.com" type="email" />
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="font-label-bold text-label-sm uppercase text-on-surface-variant group-focus-within:text-[#00FF66] transition-colors">Subject</label>
                <input className="w-full bg-white/5 border-0 border-b border-white/10 p-4 font-body-md text-primary focus:ring-0 focus:border-[#00FF66] focus:outline-none transition-all placeholder:text-white/20" placeholder="Project Inquiry / Collaboration" type="text" />
              </div>
              <div className="space-y-2 group">
                <label className="font-label-bold text-label-sm uppercase text-on-surface-variant group-focus-within:text-[#00FF66] transition-colors">Message</label>
                <textarea className="w-full bg-white/5 border-0 border-b border-white/10 p-4 font-body-md text-primary focus:ring-0 focus:border-[#00FF66] focus:outline-none transition-all placeholder:text-white/20 resize-none" placeholder="Briefly describe your project or idea..." rows={4}></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full md:w-auto bg-primary text-black px-12 py-5 rounded-xl font-label-bold text-label-bold uppercase tracking-widest flex items-center justify-center gap-4 lime-glow transition-all active:scale-95" type="button">
                  Send Message
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 pointer-events-none">
              <Image width={128} height={128} className="w-full h-full object-contain" alt="geometric wireframe grid pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOzd9r30vFVdpYjoRCk5kjRFYDEvTqY0TDbZHenP2bPSMTmyume6U5eXimsg7t-G4pLe5n9a0Js3iXF-NT0IVItudrnpm_siNxB4fccj-vmuwlOEX9Nnk_cH-0yAxVOiyElv8UIJu3EaQJMATSPjAeI7IrOTe8EjjDrkc-neqEyqib7_9uYRuIXIv9Ve-7dADjWwDabkDs8ACfh6fVQv_KknGRg76bnFBf0Pqvi7OhRKOnd3pfFmczxvRmc2jLRXua42iRCdKUBgA" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
