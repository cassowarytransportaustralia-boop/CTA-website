import React from "react";
import SectionHeader from "./SectionHeader";
import { EVENTS, IMAGES } from "@/lib/nexusData";
import { CalendarDays } from "lucide-react";

export default function Events() {
  return (
    <section
      id="events"
      data-testid="section-events"
      className="bg-[#f7f9f8] py-24 md:py-32 border-t border-[#2d2d2d]/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="12"
          eyebrow="Community Events"
          title="365-day activation. Every weekend, a reason to gather."
          kicker="The event precinct is engineered for relentless year-round programming — from weekly markets through to flagship regional festivals — keeping the hub vital, social and economically alive."
          testId="events-header"
        />

        <div className="grid lg:grid-cols-12 gap-10 mt-16">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-px bg-[#2d2d2d]/10 border border-[#2d2d2d]/10">
              {EVENTS.map((e, i) => (
                <div
                  key={e}
                  data-testid={`event-tile-${i}`}
                  className="bg-white p-6 md:p-7 flex items-start gap-4 hover:bg-[#0b3b24] hover:text-white group transition-colors"
                >
                  <CalendarDays size={20} className="text-[#0b3b24] group-hover:text-[#d4af37] flex-shrink-0 mt-1" />
                  <div>
                    <span className="section-num text-[#0b3b24] group-hover:text-[#d4af37]">0{i + 1}</span>
                    <div className="font-display font-medium text-base md:text-lg text-[#0a0a0a] group-hover:text-white mt-1">
                      {e}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[300px] lg:h-[420px]">
              <img
                src={IMAGES.community}
                alt="Community gathering"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-[#0b3b24]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="eyebrow text-[#d4af37] mb-2">Programmed by Council & Community</div>
                <div className="font-display text-2xl md:text-3xl leading-tight">
                  Events drive visitation. Visitation drives spend. Spend rebuilds local economies.
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["48+", "Events per year"],
                ["120K+", "Visitors annually"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="border border-[#2d2d2d]/10 p-5 bg-white"
                >
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
