import React from "react";
import SectionHeader from "./SectionHeader";
import { CHALLENGE_STATS } from "@/lib/nexusData";
import { TrendingDown, Users, Truck, Home, Briefcase, AlertTriangle } from "lucide-react";

const ICONS = [TrendingDown, Home, Users, Truck, Briefcase, AlertTriangle];

export default function Challenge() {
  return (
    <section
      id="challenge"
      data-testid="section-challenge"
      className="bg-[#f7f9f8] py-24 md:py-32 border-t border-[#2d2d2d]/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="02"
          eyebrow="The Challenge"
          title="Regional Australia is bleeding spend, jobs, and infrastructure."
          kicker="Communities along Australia's major freight corridors are caught between rising demand for amenities and decades of underinvestment. The pressure points are visible — and measurable."
          testId="challenge-header"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2d2d2d]/10 mt-16 border border-[#2d2d2d]/10">
          {CHALLENGE_STATS.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={s.label}
                data-testid={`challenge-stat-${i}`}
                className="bg-white p-8 md:p-10 flex flex-col gap-4 hover:bg-[#0b3b24] hover:text-white group transition-colors duration-300"
              >
                <Icon size={22} className="text-[#0b3b24] group-hover:text-[#d4af37] transition-colors" />
                <div className="font-display text-5xl md:text-6xl font-bold text-[#0a0a0a] group-hover:text-white">
                  {s.value}
                </div>
                <p className="text-sm leading-relaxed text-[#2d2d2d]/80 group-hover:text-white/90">
                  {s.label}
                </p>
                <span className="eyebrow text-[10px] text-[#2d2d2d]/50 group-hover:text-[#d4af37] mt-auto">
                  {s.source}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-[#2d2d2d]/60 max-w-3xl">
          * Indicative figures — to be validated during Phase 1 feasibility with
          NHVR, Transport for NSW, Tourism Research Australia and ABS regional
          datasets.
        </p>
      </div>
    </section>
  );
}
