// import React from "react";
import Image from "next/image";
import {
  IconTerminal2,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandCss3,
  IconBrandAngular,
  IconBraces,
  IconDatabase,
  IconCircleCheck,
  IconBrandDocker,
  IconBrandAws,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandHtml5,
  IconWorld,
  IconBrandCloudflare,
  IconSend,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandGraphql,
} from "@tabler/icons-react";

export default function TechStack() {
  return (
    <main className="pt-32 pb-xl px-margin md:px-16 max-w-7xl mx-auto grow w-full relative">
      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-on-tertiary-container/5 blur-[100px] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="mb-lg text-center md:text-left animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-on-tertiary-container/30 bg-on-tertiary-container/5 mb-md">
          <IconTerminal2 size={16} className="text-on-tertiary-container" />
          <span className="text-on-tertiary-container font-label-bold text-xs uppercase tracking-widest">Architectural Foundation</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl mb-md">Tech <span className="text-primary">Stack</span></h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A suite of modern technologies chosen for its performance, scalability, and robust development experience.
        </p>
      </section>

      {/* Bento Grid: Frontend */}
      <section className="mb-xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        <div className="flex items-center gap-4 mb-lg">
          <h2 className="font-headline-md text-headline-md">Frontend <span className="text-white/20">/</span> Architecture</h2>
          <div className="h-px grow bg-white/10"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-md">
          {/* React Card */}
          <div className="glass-surface md:col-span-2 p-md rounded-xl group hover:border-primary/50 transition-all duration-300 lime-glow flex flex-col">
            <div className="flex justify-between items-start mb-md">
              <div className="p-sm bg-white/5 rounded-lg">
                <IconBrandReact size={32} className="text-[#75c2d9]" />
              </div>
              <span className="px-2 py-1 rounded-sm border border-on-tertiary-container text-on-tertiary-container font-label-sm text-[10px] uppercase">Core Expert</span>
            </div>
            <h3 className="font-headline-md text-xl mb-xs">React</h3>
            <p className="text-on-surface-variant text-sm">Hooks, Context API, and advanced pattern implementation for complex UIs.</p>
          </div>
          {/* Next.js Card */}
          <div className="glass-surface md:col-span-2 p-md rounded-xl group hover:border-primary/50 transition-all duration-300 lime-glow flex flex-col">
            <div className="flex justify-between items-start mb-md">
              <div className="p-sm bg-white/5 rounded-lg text-white">
                <IconBrandNextjs size={32} />
              </div>
              <span className="px-2 py-1 rounded-sm border border-white/20 text-white/40 font-label-sm text-[10px] uppercase">Daily Tool</span>
            </div>
            <h3 className="font-headline-md text-xl mb-xs">Next.js</h3>
            <p className="text-on-surface-variant text-sm">Server components, SSR/SSG strategies, and App Router proficiency.</p>
          </div>
          {/* Tailwind Card */}
          <div className="glass-surface md:col-span-2 p-md rounded-xl group hover:border-primary/50 transition-all duration-300 lime-glow flex flex-col">
            <div className="flex justify-between items-start mb-md">
              <div className="p-sm bg-white/5 rounded-lg">
                <IconBrandTailwind size={32} className="text-[#52b3d0]" />
              </div>
            </div>
            <h3 className="font-headline-md text-xl mb-xs">Tailwind CSS</h3>
            <p className="text-on-surface-variant text-sm">Utility-first styling with complex custom configurations and design systems.</p>
          </div>

          {/* Smaller Grid Items */}
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <IconBrandTypescript size={24} className="text-white/40 mb-xs group-hover:text-primary transition-colors" />
            <span className="font-label-bold text-xs">TypeScript</span>
          </div>
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <IconBrandJavascript size={24} className="text-white/40 mb-xs group-hover:text-primary transition-colors" />
            <span className="font-label-bold text-xs">JavaScript</span>
          </div>
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <IconBrandCss3 size={24} className="text-white/40 mb-xs group-hover:text-primary transition-colors" />
            <span className="font-label-bold text-xs">CSS3</span>
          </div>
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <IconBrandAngular size={24} className="text-white/40 mb-xs group-hover:text-primary transition-colors" />
            <span className="font-label-bold text-xs">Angular</span>
          </div>
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <IconBraces size={24} className="text-white/40 mb-xs group-hover:text-primary transition-colors" />
            <span className="font-label-bold text-xs">Zustand</span>
          </div>
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <IconBrandHtml5 size={24} className="text-white/40 mb-xs group-hover:text-primary transition-colors" />
            <span className="font-label-bold text-xs">Semantic HTML</span>
          </div>
        </div>
      </section>

      {/* Bento Grid: Backend */}
      <section className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
        <div className="flex items-center gap-4 mb-lg">
          <h2 className="font-headline-md text-headline-md">Backend <span className="text-white/20">/</span> Infrastructure</h2>
          <div className="h-px grow bg-white/10"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-md">
          {/* Large Backend Featured */}
          <div className="glass-surface md:col-span-2 md:row-span-2 p-lg rounded-xl flex flex-col justify-start gap-lg border-l-4 border-on-tertiary-container bg-linear-to-br from-on-tertiary-container/5 to-transparent relative overflow-hidden">
            {/* Dot grid decoration */}
            <div className="absolute top-4 right-4 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-white/60" />
              ))}
            </div>

            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-on-tertiary-container mb-md">
                <IconDatabase size={16} />
                <span className="font-label-bold tracking-widest uppercase text-xs">Database Design</span>
              </div>
              <h3 className="font-headline-lg text-4xl font-black mb-sm">Node.js &amp; PostgreSQL</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-lg">
                Architecting robust RESTful and GraphQL APIs with a focus on data integrity, complex relational mapping, and high-concurrency handling.
              </p>
              <div className="w-full h-px bg-white/10 mb-lg" />

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-sm">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-rose-accent/15 rounded-lg shrink-0">
                    <IconWorld size={18} className="text-rose-accent" />
                  </div>
                  <div>
                    <p className="font-label-bold text-sm">REST APIs</p>
                    <p className="text-on-surface-variant text-xs leading-snug">Scalable architecture and best practices for modern web services.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-white/5 rounded-lg shrink-0">
                    <IconBrandPrisma size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-label-bold text-sm">Prisma ORM</p>
                    <p className="text-on-surface-variant text-xs leading-snug">Type-safe queries and migrations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-violet-500/15 rounded-lg shrink-0">
                    <IconBrandGraphql size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="font-label-bold text-sm">GraphQL</p>
                    <p className="text-on-surface-variant text-xs leading-snug">Flexible schemas and efficient data fetching.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-orange-500/15 rounded-lg shrink-0">
                    <IconBrandCloudflare size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="font-label-bold text-sm">Cloudflare</p>
                    <p className="text-on-surface-variant text-xs leading-snug">Edge computing and global CDN optimization.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-sky-500/15 rounded-lg shrink-0">
                    <IconSend size={18} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="font-label-bold text-sm">Resend</p>
                    <p className="text-on-surface-variant text-xs leading-snug">Modern transactional email infrastructure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-emerald-500/15 rounded-lg shrink-0">
                    <IconBrandNodejs size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-label-bold text-sm">Express.js</p>
                    <p className="text-on-surface-variant text-xs leading-snug">Fast, unopinionated, minimalist web framework.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div>


              {/* Tech Pills */}
              {/* <div className="flex flex-wrap gap-2">
                {[
                  // { label: "Node.js", color: "text-emerald-400 border-emerald-400/30" },
                  // { label: "PostgreSQL", color: "text-sky-400 border-sky-400/30" },
                  // { label: "Prisma ORM", color: "text-violet-400 border-violet-400/30" },
                  { label: "Express", color: "text-white/60 border-white/20" },
                  // { label: "Cloudflare", color: "text-orange-400 border-orange-400/30" },
                  // { label: "Resend", color: "text-sky-400 border-sky-400/30" },
                ].map(({ label, color }) => (
                  <span key={label} className={`px-3 py-1 bg-white/5 border rounded-full font-label-sm text-[10px] ${color}`}>{label}</span>
                ))}
              </div> */}
            </div>
          </div>
          {/* Cloud/DevOps Card */}
          <div className="glass-surface p-md rounded-xl hover:border-[#FF9900]/50 transition-all duration-300 orange-glow">
            <div className="p-sm bg-white/5 rounded-lg w-fit mb-md">
              <IconBrandAws size={32} stroke={1} className="text-[#FF9900]" />
            </div>
            <h3 className="font-headline-md text-lg mb-xs">AWS Ecosystem</h3>
            <p className="text-on-surface-variant text-sm mb-md">Lambda, S3, EC2, and CloudFront deployment workflows.</p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary inline-block"></div>
              <span className="text-[10px] font-label-bold text-white/40 uppercase">Production Ready</span>
            </div>
          </div>
          {/* Docker Card */}
          <div className="glass-surface p-md rounded-xl hover:border-[#2f62e5]/50 transition-all duration-300 blue-glow">
            <div className="p-sm bg-white/5 rounded-lg w-fit mb-md">
              <IconBrandDocker size={32} stroke={1} className="text-[#2f62e5]" />
            </div>
            <h3 className="font-headline-md text-lg mb-xs">Docker</h3>
            <p className="text-on-surface-variant text-sm mb-md">Containerization for consistent dev-to-prod environments.</p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary font-label-sm text-[10px] rounded uppercase">Essential</span>
            </div>
          </div>
          {/* Ruby on Rails Card */}
          <div className="glass-surface p-md rounded-xl hover:border-rose-accent/50 transition-all duration-300 rose-glow">
            <div className="p-sm bg-white/5 rounded-lg w-fit mb-md">
              <Image src="/ror_logo.svg" alt="Ruby on Rails" width={50} height={25} className="opacity-90 aspect-[2/1]" />
            </div>
            <h3 className="font-headline-md text-lg mb-xs">Ruby on Rails</h3>
            <p className="text-on-surface-variant text-sm mb-md">Rapid prototyping and robust MVC architecture for scalable backends.</p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-rose-accent/10 text-rose-accent font-label-sm text-[10px] rounded uppercase">Mid-level</span>
            </div>
          </div>
          {/* Other Tools */}
          <div className="glass-surface p-md rounded-xl lime-glow hover:border-white/20 transition-all duration-300">
            <h4 className="font-label-bold text-xs text-white/40 uppercase mb-md tracking-widest">Other Utilities</h4>
            <ul className="space-y-sm">
              {["Git / Github Actions", "Jest / Vitest", "Supabase", "Python / FastAPI", "Learning AI/LLMs"].map((tool) => (
                <li key={tool} className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <IconCircleCheck size={16} className="text-green-400 shrink-0" />
                  {tool}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </section>
    </main>
  );
}
