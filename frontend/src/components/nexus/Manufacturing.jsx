import React from "react";
import SectionHeader from "./SectionHeader";
import { MANUFACTURING_PILLARS, IMAGES } from "@/lib/nexusData";

export default function Manufacturing() {
  return (
    <section
      id="manufacturing"
      data-testid="section-manufacturing"
      className="bg-[#f7f9f8] py-24 md:py-32 border-t border-[#2d2d2d]/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="08"
          eyebrow="Local Manufacturing Strategy"
          title="Built by the region, for the region."
          kicker="A mandated local-first procurement and fabrication strategy that retains capital expenditure inside the Riverina — and generates skills, suppliers, and sustained manufacturing capacity."
          testId="manufacturing-header"
        />

        <div className="grid lg:grid-cols-12 gap-10 mt-16">
          <div className="lg:col-span-7">
            <ul className="divide-y divide-[#2d2d2d]/10 border-y border-[#2d2d2d]/10">
              {MANUFACTURING_PILLARS.map((p, i) => (
                <li
                  key={p.k}
                  data-testid={`manufacturing-row-${i}`}
                  className="py-6 grid grid-cols-12 gap-4 items-start"
                >
                  <span className="col-span-1 section-num text-[#0b3b24]">0{i + 1}</span>
                  <span className="col-span-11 md:col-span-4 font-display font-medium text-[#0a0a0a] text-lg">
                    {p.k}
                  </span>
                  <span className="col-span-12 md:col-span-7 text-sm text-[#2d2d2d]/80 leading-relaxed">
                    {p.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[280px] lg:h-[420px]">
              <img
                src={IMAGES.infrastructure}
                alt="Regional manufacturing"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="eyebrow text-[#d4af37] mb-2">Multiplier Effect</div>
                <div className="font-display text-3xl md:text-4xl font-bold">$1 → $1.85</div>
                <p className="text-white/85 text-sm mt-1">Every dollar spent locally returns into regional economic activity.</p>
              </div>
            </div>
            <div className="mt-6 border border-[#2d2d2d]/10 p-5 bg-white">
              <div className="eyebrow text-[#0b3b24] mb-2">Procurement Standard</div>
              <p className="text-sm text-[#2d2d2d]/80 leading-relaxed">
                Minimum <span className="font-display font-semibold text-[#0a0a0a]">70% Riverina-sourced</span> capex
                with transparent supplier registry and quarterly reporting to Council.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
