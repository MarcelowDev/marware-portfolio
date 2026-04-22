import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grow noise-overlay relative">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-container/10 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-rose-accent/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-secondary-fixed-dim/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 px-8 md:px-16 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 w-full items-center">

          {/* Left Content: Luminous Identity */}
          <div className="col-span-1 md:col-span-7 lg:col-span-6 z-10 space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-surface border border-white/10 shadow-xl backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-primary-container animate-ping"></span>
                <span className="font-label-sm tracking-[0.2em] text-white/60 uppercase text-[10px]">Senior Software Engineer</span>
              </div>

              <h1 className="font-headline-xl text-[clamp(3.5rem,8vw,6rem)] leading-[0.95] tracking-tight text-primary">
                Marcelo <br />
                <span className="text-gradient-lime drop-shadow-[0_0_30px_rgba(198,241,116,0.3)]">Rosales</span>
              </h1>

              <p className="font-body-lg text-white/50 text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
                Architecting <span className="text-white italic">resilient backend ecosystems</span> and crafting <span className="text-primary-container">high-performance digital experiences</span> with technical precision and creative soul.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-4">
              <Link href="/contact" className="group relative px-10 py-5 rounded-2xl bg-white text-black font-label-bold text-sm uppercase tracking-widest transition-all duration-500 hover:bg-primary-container active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)] overflow-hidden">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>

              <div className="flex items-center gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass-surface flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary-container group">
                  <span className="material-symbols-outlined text-white/40 group-hover:text-primary-container transition-colors">terminal</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass-surface flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary-container group">
                  <span className="material-symbols-outlined text-white/40 group-hover:text-primary-container transition-colors">language</span>
                </a>
              </div>
            </div>

            {/* Quick Stats Overlay */}
            <div className="grid grid-cols-3 gap-8 pt-4 border-t border-white/5">
              {[
                { label: "Experience", val: "3+ Years" },
                { label: "Projects", val: "3+" },
                { label: "Uptime", val: "99.9%" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-label-bold">{stat.label}</p>
                  <p className="text-xl font-headline-md text-white/80">{stat.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content: Portrait & Composition */}
          <div className="col-span-1 md:col-span-5 lg:col-span-6 flex justify-center items-center animate-fade-in-right">
            <div className="relative group">
              {/* Outer Decorative Rings */}
              <div className="absolute -inset-8 border border-white/5 rounded-[4rem] animate-[spin_20s_linear_infinite] opacity-50"></div>
              <div className="absolute -inset-4 border border-primary-container/20 rounded-[3.5rem] opacity-30"></div>

              <div className="relative w-full aspect-4/5 md:w-[400px] lg:w-[470px] overflow-hidden rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.04]">
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10 opacity-60"></div>
                <Image
                  alt="Portrait"
                  width={500}
                  height={700}
                  priority
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWaRgUmraLWvxFzzxsWFmSrXyLeh9gAWjLoks1IHxoTpiURtVUlVepVZ4xHHW1zBqGZZF4fTJlG9yQ8beGvtrqaW4kuwTU4VS5_Jsl2JpOBSoO67k__m8v1wZ5QkCoVpcinpfqvCEzzig5_Bjb6653nATOo0kcdHN7ar40PUpWenAShNVj8g-5o3AuidN_DMNeOtVAM8hJY1HboVu_A2GxActkz4xaEeeOoeJnfjt8ZPSghm3mHBzwXw5X9dtKK1ySqeVOJxef9oY"
                />
              </div>

              {/* Floating Badge - Restored and Fixed */}
              {/* <div className="absolute -bottom-6 -right-6 glass-surface p-4 rounded-2xl border-primary-container/30 backdrop-blur-xl animate-bounce shadow-2xl" style={{ animationDuration: "3s" }}>
                <span className="material-symbols-outlined text-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary-container"></div>
              <span className="font-label-bold text-primary-container uppercase tracking-[0.4em] text-[10px]">Featured Work</span>
            </div>
            <h2 className="font-headline-lg text-5xl md:text-7xl tracking-tighter text-white">Selected Works</h2>
          </div>
          <Link href="/work" className="group flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-500 font-label-bold uppercase text-[10px] tracking-widest">
            Explore All Projects
            <span className="material-symbols-outlined transition-transform duration-500 group-hover:translate-x-2">east</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Neon Fluidity",
              tag: "Digital Art",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI7DCBNo9tP2t11K4icwvCZgiRmtMfWaZPN8Wxv_we6cYGCysMVWt2uC6-q5m3GZz64UM6oLEc_O2Koc0rcKppQOlD-2rjgDEVDI86flggdk4O2pXxvThSsn2M-NNYvCt2iI06VUV3Inkmqux8T6IdHOkTbIFcDlt2_fnrE6Q02tQmnyqoh4B2rKTavTYfUcgh5EN85Q5LFngJ_RcM8gGSOaVqE9xAP57tkPMx4LBAbhv0ASup0TUsewIlI_DIzpM_CQrNhAdNZ54"
            },
            {
              title: "Lume App UI",
              tag: "UI/UX Design",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe619BDB3t2AkwdQxIVJE_g4JuHYV2CIVA9N_4UsgM0IReOLjdXlr4tK4CV7FcERkuqZtSQ6Or_fMx0QALlNbcTWi942kGkfzqECh_8DXOpen0pkje4T5Xc62IPPsa3_QARylQ7xpJd7NLQGvGgp0u-RgnBLFexcjFoQxunqkl1RYuTuocjyjk-yTHKGfEO9SACG49RTuuWHqE5vnIeUH-Q36DNBW6zmDKt_F0W-bkj3ZuvKpDIANP5w9jgM3n85nY9ef9HtGruVM"
            },
            {
              title: "Cyber Spaces",
              tag: "Archviz",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDERP8cHD9Unvb5GYfTWhpREloQa65cQBurXUQC-37F3upmnz0CStogqspQqGu2K-_l-GnQx1ttAZ6iKjoJIwGe0pGW0Yz3mjWaDmXjv3uKhXBodeHnusSp7nzdN44TlgRWnJmPwDMdWVgC0ZfMeBjSuGXnEeXi0APBIHih3Qb8KwBR3cVtBnm_3gBFA565UKxNu0fjSRF1mHq7n6wUDpeSJffpD9B-AiKUNytSkaddwVMpuvfPQj3AFfqyOoiNsO5IM4vGUM70WSI"
            }
          ].map((project, i) => (
            <div key={i} className="group relative h-[550px] rounded-[2.5rem] overflow-hidden glass-surface border-white/5 hover:border-primary-container/50 transition-all duration-700">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  alt={project.title}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                  src={project.img}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-10 space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-label-bold text-primary-container text-[10px] uppercase tracking-[0.3em]">{project.tag}</p>
                <h3 className="font-headline-md text-3xl text-white">{project.title}</h3>
                <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex justify-between items-center">
                  <span className="text-white/40 text-[10px] font-label-bold uppercase tracking-widest underline underline-offset-8">Case Study</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary-container transition-colors">
                    <span className="material-symbols-outlined text-white group-hover:text-primary-container transition-colors">arrow_outward</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto mb-32 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
        <div className="glass-surface rounded-[4rem] p-16 md:p-32 text-center border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 blur-[150px] mr-[-400px] mt-[-400px] group-hover:bg-primary-container/20 transition-all duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-accent/10 blur-[130px] ml-[-300px] mb-[-300px] opacity-40"></div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <h2 className="font-headline-lg text-6xl md:text-8xl tracking-tight text-white leading-[1.1]">
              Ready to <br />
              <span className="text-gradient-lime italic">elevate</span> your project?
            </h2>
            <p className="font-body-lg text-white/50 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-light">
              I am currently accepting select opportunities for high-impact collaborations. Let's build something that matters.
            </p>
            <div className="pt-8">
              <Link href="/contact" className="group relative px-16 py-8 rounded-[2.5rem] bg-white text-black font-label-bold text-lg uppercase tracking-[0.2em] transition-all duration-500 hover:bg-primary-container active:scale-95 shadow-[0_30px_60px_rgba(255,255,255,0.1)] overflow-hidden inline-block">
                <span className="relative z-10">Initiate Collaboration</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

