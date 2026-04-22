import React from "next";

export default function TechStack() {
  return (
    <main className="pt-32 pb-xl px-margin md:px-16 max-w-7xl mx-auto grow w-full relative">
      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-on-tertiary-container/5 blur-[100px] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="mb-xl text-center md:text-left animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-on-tertiary-container/30 bg-on-tertiary-container/5 mb-md">
          <span className="material-symbols-outlined text-on-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <span className="text-on-tertiary-container font-label-bold text-xs uppercase tracking-widest">Architectural Foundation</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl mb-md">Tech <span className="text-primary">Stack</span></h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A carefully curated ecosystem of technologies chosen for performance, scalability, and developer experience. Specialized in building high-performance full-stack applications with a focus on modern web standards.
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
          <div className="glass-surface md:col-span-2 p-md rounded-xl group hover:border-primary/50 transition-all duration-300 lime-glow">
            <div className="flex justify-between items-start mb-md">
              <div className="p-sm bg-white/5 rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl">deployed_code</span>
              </div>
              <span className="px-2 py-1 rounded-sm border border-on-tertiary-container text-on-tertiary-container font-label-sm text-[10px] uppercase">Core Expert</span>
            </div>
            <h3 className="font-headline-md text-xl mb-xs">React</h3>
            <p className="text-on-surface-variant text-sm mb-md">Hooks, Context API, and advanced pattern implementation for complex UIs.</p>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[95%]"></div>
            </div>
          </div>
          {/* Next.js Card */}
          <div className="glass-surface md:col-span-2 p-md rounded-xl group hover:border-primary/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-md">
              <div className="p-sm bg-white/5 rounded-lg text-white">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <span className="px-2 py-1 rounded-sm border border-white/20 text-white/40 font-label-sm text-[10px] uppercase">Daily Tool</span>
            </div>
            <h3 className="font-headline-md text-xl mb-xs">Next.js</h3>
            <p className="text-on-surface-variant text-sm mb-md">Server components, SSR/SSG strategies, and App Router proficiency.</p>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[90%]"></div>
            </div>
          </div>
          {/* Tailwind Card */}
          <div className="glass-surface md:col-span-2 p-md rounded-xl group hover:border-primary/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-md">
              <div className="p-sm bg-white/5 rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl">palette</span>
              </div>
            </div>
            <h3 className="font-headline-md text-xl mb-xs">Tailwind CSS</h3>
            <p className="text-on-surface-variant text-sm mb-md">Utility-first styling with complex custom configurations and design systems.</p>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[100%]"></div>
            </div>
          </div>

          {/* Smaller Grid Items */}
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-2xl text-white/40 mb-xs group-hover:text-primary transition-colors">javascript</span>
            <span className="font-label-bold text-xs">TypeScript</span>
          </div>
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-2xl text-white/40 mb-xs group-hover:text-primary transition-colors">animation</span>
            <span className="font-label-bold text-xs">Framer Motion</span>
          </div>
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors border-on-tertiary-container/30">
            <span className="material-symbols-outlined text-2xl text-on-tertiary-container mb-xs" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <span className="font-label-bold text-xs">Three.js</span>
          </div>
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-2xl text-white/40 mb-xs group-hover:text-primary transition-colors">query_stats</span>
            <span className="font-label-bold text-xs">TanStack Query</span>
          </div>
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-2xl text-white/40 mb-xs group-hover:text-primary transition-colors">data_object</span>
            <span className="font-label-bold text-xs">Zustand</span>
          </div>
          <div className="glass-surface p-sm rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-2xl text-white/40 mb-xs group-hover:text-primary transition-colors">html</span>
            <span className="font-label-bold text-xs">Semantic HTML</span>
          </div>
        </div>
      </section>

      {/* Bento Grid: Backend */}
      <section className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
        <div className="flex items-center gap-4 mb-lg">
          <h2 className="font-headline-md text-headline-md">Backend <span className="text-white/20">/</span> Infrastructure</h2>
          <div className="h-px flex-grow bg-white/10"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-md">
          {/* Large Backend Featured */}
          <div className="glass-surface md:col-span-2 md:row-span-2 p-lg rounded-xl flex flex-col justify-between border-l-4 border-on-tertiary-container bg-gradient-to-br from-on-tertiary-container/5 to-transparent">
            <div>
              <div className="flex items-center gap-2 text-on-tertiary-container mb-md">
                <span className="material-symbols-outlined">database</span>
                <span className="font-label-bold tracking-widest uppercase">Database Design</span>
              </div>
              <h3 className="font-headline-lg text-headline-md mb-md">Node.js & PostgreSQL</h3>
              <p className="font-body-md text-on-surface-variant">
                Architecting robust RESTful and GraphQL APIs with a focus on data integrity, complex relational mapping, and high-concurrency handling.
              </p>
            </div>
            <div className="mt-lg flex flex-wrap gap-sm">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-sm text-white/60">Prisma ORM</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-sm text-white/60">Express</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-sm text-white/60">Redis</span>
            </div>
          </div>
          {/* Cloud/DevOps Card */}
          <div className="glass-surface p-md rounded-xl hover:border-on-tertiary-container/50 transition-all duration-300">
            <div className="p-sm bg-white/5 rounded-lg w-fit mb-md">
              <span className="material-symbols-outlined text-white/60 text-2xl">cloud</span>
            </div>
            <h3 className="font-headline-md text-lg mb-xs">AWS Ecosystem</h3>
            <p className="text-on-surface-variant text-sm mb-md">Lambda, S3, EC2, and CloudFront deployment workflows.</p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary inline-block"></div>
              <span className="text-[10px] font-label-bold text-white/40 uppercase">Production Ready</span>
            </div>
          </div>
          {/* Docker Card */}
          <div className="glass-surface p-md rounded-xl hover:border-primary/50 transition-all duration-300 lime-glow">
            <div className="p-sm bg-white/5 rounded-lg w-fit mb-md">
              <span className="material-symbols-outlined text-primary text-2xl">box</span>
            </div>
            <h3 className="font-headline-md text-lg mb-xs">Docker</h3>
            <p className="text-on-surface-variant text-sm mb-md">Containerization for consistent dev-to-prod environments.</p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary font-label-sm text-[10px] rounded uppercase">Essential</span>
            </div>
          </div>
          {/* Other Tools */}
          <div className="glass-surface p-md rounded-xl hover:border-white/20 transition-all duration-300">
            <h4 className="font-label-bold text-xs text-white/40 uppercase mb-md tracking-widest">Other Utilities</h4>
            <ul className="space-y-sm">
              <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-primary">check_circle</span> Git / Github Actions
              </li>
              <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-primary">check_circle</span> Jest / Vitest
              </li>
              <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-primary">check_circle</span> Firebase / Supabase
              </li>
              <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-primary">check_circle</span> Python / FastAPI
              </li>
            </ul>
          </div>
          {/* Learning Block */}
          <div className="glass-surface p-md rounded-xl flex items-center justify-center group overflow-hidden relative border-dashed border-white/10">
            <div className="absolute inset-0 bg-on-tertiary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-center z-10">
              <span className="material-symbols-outlined text-3xl text-white/20 mb-xs">add_circle</span>
              <p className="font-label-bold text-xs text-white/20 uppercase">Learning AI/LLMs</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
