import React from "react";
import SectionHeader from "./SectionHeader";
import { MEMBERSHIP_BENEFITS } from "@/lib/nexusData";
import { Fuel, BedDouble, Store, Ticket, MapPinned, ArrowRight } from "lucide-react";

const ICONS = [Fuel, BedDouble, Store, Ticket, MapPinned];

export default function Membership() {
  return (
    <section
      id="membership"
      data-testid="section-membership"
      className="bg-[#0a0a0a] text-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 grain" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="10"
          eyebrow="Membership Program"
          title="The reason travellers stop — and stay."
          kicker="A national membership giving Australians a tangible reason to spend in regional towns: savings at the pump, discounts on stays, partner offers and exclusive access to events."
          dark
          testId="membership-header"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 mt-16">
          {MEMBERSHIP_BENEFITS.map((b, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={b.k}
                data-testid={`membership-benefit-${i}`}
                className="bg-[#0a0a0a] p-8 flex flex-col gap-4 hover:bg-[#0b3b24] transition-colors duration-300"
              >
                <Icon size={24} className="text-[#d4af37]" />
                <div className="font-display font-bold text-lg">{b.k}</div>
                <p className="text-sm text-white/75 leading-relaxed">{b.v}</p>
                <ArrowRight size={14} className="text-[#d4af37] mt-auto" />
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            ["Encourage travellers", "to stop in regional communities."],
            ["Increase local spending", "and overnight stays."],
            ["Support local business", "with a captive, repeating audience."],
          ].map(([k, v], i) => (
            <div
              key={k}
              data-testid={`membership-purpose-${i}`}
              className="border-l-2 border-[#d4af37] pl-6 py-2"
            >
              <div className="eyebrow text-[#d4af37]">{k}</div>
              <div className="font-display text-xl md:text-2xl text-white mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
