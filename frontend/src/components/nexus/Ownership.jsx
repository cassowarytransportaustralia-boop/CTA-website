import React from "react";
import SectionHeader from "./SectionHeader";
import { Building2, Wrench, Settings, Network } from "lucide-react";

const PILLARS = [
  { icon: Building2, k: "Council owns the asset", v: "Land, structures and long-term infrastructure remain with Council." },
  { icon: Wrench, k: "Cassowary as developer", v: "Designs, delivers and de-risks the build under fixed-scope contracts." },
  { icon: Settings, k: "Cassowary as operator", v: "Day-to-day operations, tenant management, member services." },
  { icon: Network, k: "Cassowary as systems manager", v: "Standards, technology, replication playbook across the national network." },
];

export default function Ownership() {
  return (
    <section
      id="ownership"
      data-testid="section-ownership"
      className="bg-[#f7f9f8] py-24 md:py-32 border-t border-[#2d2d2d]/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="06"
          eyebrow="Community Ownership Model"
          title="The hub remains a community asset — permanently."
          kicker="Asset ownership stays local. Revenue stays local. Community benefits stay local. Cassowary's role is to deliver and operate — not to extract."
          testId="ownership-header"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2d2d2d]/10 mt-16 border border-[#2d2d2d]/10">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.k}
                data-testid={`ownership-pillar-${i}`}
                className="bg-white p-8 md:p-10 flex flex-col gap-4 min-h-[260px]"
              >
                <Icon size={28} className="text-[#0b3b24]" />
                <div className="font-display font-bold text-lg text-[#0a0a0a] leading-tight">
                  {p.k}
                </div>
                <p className="text-sm text-[#2d2d2d]/75 leading-relaxed">{p.v}</p>
                <span className="eyebrow text-[10px] text-[#0b3b24] mt-auto">PILLAR · 0{i + 1}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {[
            ["Asset ownership", "remains local."],
            ["Revenue", "stays local."],
            ["Community benefits", "remain local."],
          ].map(([k, v], i) => (
            <div
              key={k}
              data-testid={`ownership-promise-${i}`}
              className="border-l-2 border-[#d4af37] pl-6 py-2"
            >
              <div className="eyebrow text-[#0b3b24]">{k}</div>
              <div className="font-display text-2xl md:text-3xl text-[#0a0a0a] mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
