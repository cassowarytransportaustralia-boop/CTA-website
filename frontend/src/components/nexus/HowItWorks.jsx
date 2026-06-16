import React from "react";
import SectionHeader from "./SectionHeader";
import { FLOW_ROLES } from "@/lib/nexusData";
import { ArrowRight } from "lucide-react";

const COLOUR_MAP = {
  green: { bg: "bg-[#0b3b24]", text: "text-white", accent: "text-[#d4af37]", num: "text-[#d4af37]" },
  gold: { bg: "bg-[#d4af37]", text: "text-[#0a0a0a]", accent: "text-[#0b3b24]", num: "text-[#0b3b24]" },
  charcoal: { bg: "bg-[#0a0a0a]", text: "text-white", accent: "text-[#d4af37]", num: "text-[#d4af37]" },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-testid="section-how-it-works"
      className="bg-white py-24 md:py-32 border-t border-[#2d2d2d]/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="05"
          eyebrow="How The Model Works"
          title="A clean three-party model — built so value stays local."
          kicker="Council owns the asset. Cassowary delivers and operates. The community benefits — through jobs, infrastructure, revenue, services and events."
          testId="how-it-works-header"
        />

        <div className="grid lg:grid-cols-3 gap-6 mt-16 relative">
          {FLOW_ROLES.map((role, i) => {
            const c = COLOUR_MAP[role.color];
            return (
              <React.Fragment key={role.title}>
                <div
                  data-testid={`flow-role-${role.title.toLowerCase()}`}
                  className={`${c.bg} ${c.text} p-8 md:p-10 relative`}
                >
                  <div className={`section-num ${c.num}`}>0{i + 1}</div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl mt-3">
                    {role.title}
                  </h3>
                  <div className={`eyebrow mt-2 ${c.accent}`}>{role.subtitle}</div>
                  <ul className="mt-8 space-y-3">
                    {role.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm leading-relaxed">
                        <ArrowRight size={14} className={`mt-1 flex-shrink-0 ${c.accent}`} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-12 border border-[#2d2d2d]/10 p-6 md:p-8 bg-[#f7f9f8] grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <div className="eyebrow text-[#0b3b24] mb-2">Governance Outcome</div>
            <p className="font-display text-lg md:text-xl text-[#0a0a0a] leading-snug">
              Public asset. Private delivery discipline. Local benefit.
            </p>
          </div>
          <div className="md:text-right text-sm text-[#2d2d2d]/70">
            A model designed to scale across regional Australia without losing local ownership.
          </div>
        </div>
      </div>
    </section>
  );
}
