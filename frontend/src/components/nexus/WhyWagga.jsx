import React from "react";
import SectionHeader from "./SectionHeader";
import { WHY_WAGGA } from "@/lib/nexusData";
import NSWMap from "./maps/NSWMap";

export default function WhyWagga() {
  return (
    <section
      id="why-wagga"
      data-testid="section-why-wagga"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="03"
          eyebrow="Strategic Assessment"
          title="Why Wagga Wagga is the right pilot site."
          kicker="A single inland city where freight, defence, agriculture, education and tourism converge — with the infrastructure, scale, and political will to lead a national model."
          testId="why-wagga-header"
        />

        <div className="grid lg:grid-cols-12 gap-12 mt-16 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="border border-[#2d2d2d]/10 bg-[#f7f9f8] p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-6">
                <span className="eyebrow text-[#0b3b24]">NSW Freight Network</span>
                <span className="font-mono text-xs text-[#2d2d2d]/60">SCHEMATIC · NOT TO SCALE</span>
              </div>
              <NSWMap />
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#2d2d2d]/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="block w-3 h-3 bg-[#0b3b24]" /> Olympic Hwy
                </div>
                <div className="flex items-center gap-2">
                  <span className="block w-3 h-3 bg-[#d4af37]" /> Sturt Hwy
                </div>
                <div className="flex items-center gap-2">
                  <span className="block w-3 h-3 bg-[#2d2d2d]" /> Inland Rail
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <ul className="divide-y divide-[#2d2d2d]/10 border-y border-[#2d2d2d]/10">
              {WHY_WAGGA.map((row, i) => (
                <li
                  key={row.k}
                  data-testid={`why-wagga-row-${i}`}
                  className="py-5 grid grid-cols-12 gap-4 items-start"
                >
                  <span className="col-span-12 md:col-span-5 font-display font-medium text-[#0a0a0a] text-base md:text-[17px]">
                    {row.k}
                  </span>
                  <span className="col-span-12 md:col-span-7 text-sm text-[#2d2d2d]/80 leading-relaxed">
                    {row.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
