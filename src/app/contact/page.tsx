"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconCopy, IconArrowUpRight, IconSend, IconCheck } from "@tabler/icons-react";
import { toast, Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Message sent successfully!");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      toast.error("An error occurred while sending the message.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto relative overflow-visible grow w-full">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(20, 20, 20, 0.8)',
            color: '#fff',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          success: {
            iconTheme: {
              primary: '#00FF66',
              secondary: '#111',
            },
          },
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-on-tertiary-container/10 blur-[100px] rounded-full -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-12 animate-fade-in-up">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-container/30 bg-primary-container/10 text-primary-container font-label-bold text-label-sm uppercase">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              Available for projects
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary leading-none">Get in touch</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg md:max-w-full">
              Have a vision for a high-end digital product? Let&apos;s build something exceptional together. MarWare specializes in technical precision and creative expression.
            </p>
          </div>
          <div className="space-y-8">
            <div className="glass-surface p-8 rounded-xl group relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-4">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Direct Contact</span>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="font-headline-md text-2xl lg:text-xl xl:text-2xl text-primary tracking-tight break-all">marcelo@marware.dev</span>
                  <button className="flex shrink-0 items-center justify-center gap-2 bg-on-tertiary-container text-white px-6 py-3 rounded-lg font-label-bold text-label-bold active:scale-95 transition-all hover:brightness-110">
                    <IconCopy size={20} />
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-on-tertiary-container/10 blur-3xl group-hover:bg-on-tertiary-container/20 transition-all"></div>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Github", href: "https://github.com/marware" },
                { label: "LinkedIn", href: "https://linkedin.com/in/marware" },
                { label: "Twitter", href: "https://twitter.com/marware" },
                // { label: "Dribbble", href: "https://dribbble.com/marware" },
              ].map(({ label, href }) => (
                <a key={label} className="glass-surface p-4 rounded-xl flex items-center gap-3 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all group" href={href} target="_blank" rel="noopener noreferrer">
                  <span className="font-label-bold text-label-bold uppercase">{label}</span>
                  <IconArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div className="glass-surface p-8 md:p-12 rounded-2xl relative">
            <form className="space-y-8" onSubmit={handleSendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="font-label-bold text-label-sm uppercase text-on-surface-variant group-focus-within:text-[#00FF66] transition-colors">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border-0 border-b border-white/10 p-4 font-body-md text-primary focus:ring-0 focus:border-[#00FF66] focus:outline-none transition-all placeholder:text-white/20"
                    placeholder="Your full name"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="font-label-bold text-label-sm uppercase text-on-surface-variant group-focus-within:text-[#00FF66] transition-colors">Email Address</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border-0 border-b border-white/10 p-4 font-body-md text-primary focus:ring-0 focus:border-[#00FF66] focus:outline-none transition-all placeholder:text-white/20"
                    placeholder="example@domain.com"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="font-label-bold text-label-sm uppercase text-on-surface-variant group-focus-within:text-[#00FF66] transition-colors">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border-0 border-b border-white/10 p-4 font-body-md text-primary focus:ring-0 focus:border-[#00FF66] focus:outline-none transition-all placeholder:text-white/20"
                  placeholder="Project Inquiry / Collaboration"
                  type="text"
                />
              </div>
              <div className="space-y-2 group">
                <label className="font-label-bold text-label-sm uppercase text-on-surface-variant group-focus-within:text-[#00FF66] transition-colors">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border-0 border-b border-white/10 p-4 font-body-md text-primary focus:ring-0 focus:border-[#00FF66] focus:outline-none transition-all placeholder:text-white/20 resize-none"
                  placeholder="Briefly describe your project or idea..."
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  disabled={status === "sending"}
                  className="w-full md:w-auto bg-primary text-black px-12 py-5 rounded-xl font-label-bold text-label-bold uppercase tracking-widest flex items-center justify-center gap-4 lime-glow transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                >
                  {status === "idle" && (
                    <>
                      Send Message
                      <IconSend size={20} />
                    </>
                  )}
                  {status === "sending" && "Sending..."}
                  {status === "success" && (
                    <>
                      Message Sent!
                      <IconCheck size={20} />
                    </>
                  )}
                  {status === "error" && "Error! Try again"}
                </button>
              </div>
            </form>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 pointer-events-none">
              <Image width={128} height={128} className="w-full h-full object-contain" alt="geometric wireframe grid pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOzd9r30vFVdpYjoRCk5kjRFYDEvTqY0TDbZHenP2bPSMTmyume6U5eXimsg7t-G4pLe5n9a0Js3iXF-NT0IVItudrnpm_siNxB4fccj-vmuwlOEX9Nnk_cH-0yAxVOiyElv8UIJu3EaQJMATSPjAeI7IrOTe8EjjDrkc-neqEyqib7_9uYRuIXIv9Ve-7dADjWwDabkDs8ACfh6fVQv_KknGRg76bnFBf0Pqvi7OhRKOnd3pfFmczxvRmc2jLRXua42iRCdKUBgA" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

