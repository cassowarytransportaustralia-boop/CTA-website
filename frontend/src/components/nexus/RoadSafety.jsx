import React from "react";
import SectionHeader from "./SectionHeader";
import { ROAD_SAFETY, IMAGES } from "@/lib/nexusData";
import { ShieldCheck } from "lucide-react";

export default function RoadSafety() {
  return (
    <section
      id="road-safety"
      data-testid="section-road-safety"
      className="bg-white py-24 md:py-32 border-t border-[#2d2d2d]/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="11"
          eyebrow="Road Safety Impact"
          title="A fatigue-management asset on a national freight corridor."
          kicker="Driver fatigue is one of the most cited causal factors in heavy-vehicle incidents. The Nexus Hub directly addresses fatigue by clustering rest, food, accommodation, parking and emergency support on a single safe site."
          testId="road-safety-header"
        />

        <div className="grid lg:grid-cols-12 gap-10 mt-16">
          <div className="lg:col-span-5">
            <div className="relative h-[280px] lg:h-[440px]">
              <img
                src={IMAGES.freight}
                alt="Heavy vehicle on Australian highway"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b3b24]/90 via-[#0b3b24]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <ShieldCheck size={28} className="text-[#d4af37] mb-3" />
                <div className="font-display text-white text-2xl md:text-3xl leading-tight">
                  Stop. Refuel. Reset. Sleep. Safely.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-[#2d2d2d]/10 border-y border-[#2d2d2d]/10">
              {ROAD_SAFETY.map((r, i) => (
                <li
                  key={r.k}
                  data-testid={`road-safety-row-${i}`}
                  className="py-6 grid grid-cols-12 gap-4 items-start"
                >
                  <span className="col-span-1 section-num text-[#0b3b24]">0{i + 1}</span>
                  <span className="col-span-11 md:col-span-4 font-display font-medium text-[#0a0a0a]">
                    {r.k}
                  </span>
                  <span className="col-span-12 md:col-span-7 text-sm text-[#2d2d2d]/80 leading-relaxed">
                    {r.v}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border border-[#2d2d2d]/10 p-5 bg-[#f7f9f8] grid grid-cols-3 gap-4">
              {[
                ["8", "Driver rest amenities"],
                ["24", "Secure HGV bays"],
                ["24/7", "On-site response"],
              ].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-[#0b3b24]">{n}</div>
                  <div className="eyebrow text-[10px] text-[#2d2d2d]/70 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
