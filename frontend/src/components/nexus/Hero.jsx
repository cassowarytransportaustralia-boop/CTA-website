import React from "react";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import { IMAGES } from "@/lib/nexusData";

export default function Hero() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="welcome"
      data-testid="section-hero"
      className="relative min-h-[100vh] w-full flex flex-col overflow-hidden bg-[#0a0a0a]"
    >
      <img
        src={IMAGES.hero}
        alt="Regional Australian landscape"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/85 via-[#0b3b24]/55 to-[#0a0a0a]/90" />
      <div className="absolute inset-0 grain" />

      <div className="relative flex-1 flex items-end">
        <div className="max-w-[1400px] mx-auto w-full px-5 lg:px-10 pt-32 pb-12 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 reveal">
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-3 h-3 bg-[#d4af37]" />
                <span className="eyebrow text-[#d4af37]">
                  Nexus Regional Hub · Wagga Wagga Pilot Project
                </span>
              </div>
              <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-[88px] leading-[0.98] tracking-tight">
                The Future of <br />
                <span className="text-[#d4af37]">Regional Australia</span> <br />
                Starts Here.
              </h1>
              <p className="mt-8 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                A community-owned infrastructure model designed to create jobs,
                improve road safety, lift tourism spend, support veterans,
                strengthen local business, and generate long-term regional
                revenue.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  data-testid="hero-cta-primary"
                  onClick={() => go("masterplan")}
                  className="btn-gold"
                >
                  Explore the Hub Model <ArrowRight size={16} />
                </button>
                <button
                  data-testid="hero-cta-secondary"
                  onClick={() => go("cta")}
                  className="btn-ghost text-white border-white/40 hover:bg-white/10"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
                >
                  Request Council Briefing
                </button>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 text-white/80 text-sm">
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#d4af37]" />
                  Wagga Wagga · Riverina NSW
                </span>
                <span className="font-mono text-xs tracking-widest">
                  PILOT SITE · 3–5 HECTARES
                </span>
                <span className="font-mono text-xs tracking-widest">
                  PROPOSAL STATUS · READY FOR FEASIBILITY
                </span>
              </div>
            </div>

            <aside className="lg:col-span-4 flex flex-col justify-end reveal reveal-delay-2">
              <div className="border border-white/20 bg-white/5 backdrop-blur-md p-6">
                <div className="eyebrow text-[#d4af37] mb-4">Headline Outcomes · 10 Years</div>
                <ul className="space-y-4">
                  {[
                    ["$612M", "Regional GDP uplift"],
                    ["230+", "Permanent jobs"],
                    ["62", "Veteran roles"],
                    ["24,500", "Members in catchment"],
                  ].map(([n, l]) => (
                    <li key={n} className="flex items-baseline justify-between border-b border-white/10 pb-3 last:border-0">
                      <span className="font-display text-3xl text-white">{n}</span>
                      <span className="text-white/70 text-sm text-right max-w-[160px]">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <button
        data-testid="hero-scroll-down"
        onClick={() => go("challenge")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-[#d4af37] flex flex-col items-center gap-1 transition-colors"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
