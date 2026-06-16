import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { PRECINCTS, IMAGES } from "@/lib/nexusData";
import { ArrowUpRight } from "lucide-react";

export default function Masterplan() {
  const [active, setActive] = useState(PRECINCTS[0].id);
  const current = PRECINCTS.find((p) => p.id === active);

  return (
    <section
      id="masterplan"
      data-testid="section-masterplan"
      className="bg-[#0b3b24] text-white py-24 md:py-32 relative overflow-hidden"
    >
      <img
        src={IMAGES.masterplan}
        alt="Masterplan aerial"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b3b24]/95 via-[#0b3b24]/85 to-[#0b3b24]/95" />

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="04"
          eyebrow="The Nexus Hub Model"
          title="One site. Six precincts. Built for the next 50 years."
          kicker="A 3 to 5 hectare integrated precinct, designed as a single operating system for community, transport, accommodation, retail, events and emergency response."
          dark
          testId="masterplan-header"
        />

        <div className="grid lg:grid-cols-12 gap-10 mt-16">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {PRECINCTS.map((p, i) => (
                <button
                  key={p.id}
                  data-testid={`precinct-tile-${p.id}`}
                  onClick={() => setActive(p.id)}
                  className={`text-left p-6 transition-all duration-300 ${
                    active === p.id
                      ? "bg-[#d4af37] text-[#0a0a0a]"
                      : "bg-[#0b3b24] hover:bg-[#0f4e30] text-white"
                  }`}
                >
                  <span className={`section-num ${active === p.id ? "text-[#0b3b24]" : "text-[#d4af37]"}`}>
                    P0{i + 1}
                  </span>
                  <div className="font-display font-bold text-base md:text-lg mt-2 leading-tight">
                    {p.title}
                  </div>
                  <div className={`mt-2 eyebrow text-[10px] ${active === p.id ? "text-[#0b3b24]" : "text-white/60"}`}>
                    {p.eyebrow}
                  </div>
                </button>
              ))}
            </div>
            <p className="mt-6 text-white/60 text-xs font-mono tracking-widest">
              CLICK ANY PRECINCT TO INSPECT
            </p>
          </div>

          <div className="lg:col-span-5">
            <div
              key={current.id}
              data-testid={`precinct-detail-${current.id}`}
              className="border border-white/15 p-8 md:p-10 reveal"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="eyebrow text-[#d4af37]">
                  {current.eyebrow} · Precinct
                </span>
                <ArrowUpRight size={18} className="text-[#d4af37]" />
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight">
                {current.title}
              </h3>
              <p className="mt-4 text-white/80 leading-relaxed">
                {current.summary}
              </p>
              <ul className="mt-6 space-y-3">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/85 text-sm">
                    <span className="block w-1.5 h-1.5 bg-[#d4af37] mt-2 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
