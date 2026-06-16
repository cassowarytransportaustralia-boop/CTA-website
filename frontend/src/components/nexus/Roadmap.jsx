import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { ROADMAP } from "@/lib/nexusData";
import { Check } from "lucide-react";

export default function Roadmap() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="roadmap"
      data-testid="section-roadmap"
      className="bg-[#0b3b24] text-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 grain" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="15"
          eyebrow="Implementation Roadmap"
          title="Six phases from feasibility to national network."
          kicker="A staged, fundable, governance-friendly delivery sequence — each phase with clear deliverables, partners and milestones."
          dark
          testId="roadmap-header"
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/15" data-testid="roadmap-phases">
          {ROADMAP.map((p, i) => (
            <button
              key={p.title}
              data-testid={`roadmap-phase-${i}`}
              onClick={() => setActive(i)}
              className={`p-5 text-left transition-colors ${
                active === i ? "bg-[#d4af37] text-[#0a0a0a]" : "bg-[#0b3b24] hover:bg-[#0f4e30] text-white"
              }`}
            >
              <div className={`section-num ${active === i ? "text-[#0b3b24]" : "text-[#d4af37]"}`}>
                {p.phase.toUpperCase()}
              </div>
              <div className="font-display font-bold text-lg md:text-xl mt-2 leading-tight">{p.title}</div>
              <div className={`eyebrow text-[10px] mt-2 ${active === i ? "text-[#0b3b24]" : "text-white/60"}`}>{p.window}</div>
            </button>
          ))}
        </div>

        <div
          key={active}
          data-testid={`roadmap-detail-${active}`}
          className="mt-10 border border-white/15 p-8 md:p-10 grid lg:grid-cols-3 gap-10 reveal"
        >
          <div>
            <div className="eyebrow text-[#d4af37]">{ROADMAP[active].phase}</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mt-2">{ROADMAP[active].title}</h3>
            <div className="eyebrow text-white/60 mt-2">{ROADMAP[active].window}</div>
          </div>
          <div className="lg:col-span-2">
            <ul className="grid sm:grid-cols-2 gap-3">
              {ROADMAP[active].points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-white/90 text-sm border border-white/10 p-4">
                  <Check size={16} className="text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
