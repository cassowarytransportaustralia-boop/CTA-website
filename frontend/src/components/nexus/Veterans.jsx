import React from "react";
import SectionHeader from "./SectionHeader";
import { VETERAN_SKILLS, VETERAN_ROLES, IMAGES } from "@/lib/nexusData";
import { Shield, ArrowRight } from "lucide-react";

export default function Veterans() {
  return (
    <section
      id="veterans"
      data-testid="section-veterans"
      className="bg-white py-24 md:py-32 border-t border-[#2d2d2d]/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="07"
          eyebrow="Veteran Employment Program"
          title="The operator workforce regional Australia has been waiting for."
          kicker="Defence-trained veterans bring logistics, leadership, asset and emergency-management skills that map directly onto the operational demands of a regional infrastructure hub."
          testId="veterans-header"
        />

        <div className="grid lg:grid-cols-12 gap-10 mt-16 items-stretch">
          <div className="lg:col-span-5 relative min-h-[420px]">
            <img
              src={IMAGES.veterans}
              alt="Veteran professional"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b3b24]/85 via-[#0b3b24]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <Shield size={18} className="text-[#d4af37]" />
                <span className="eyebrow text-[#d4af37]">Service to Operations</span>
              </div>
              <p className="font-display text-white text-2xl md:text-3xl leading-tight">
                Veteran-led operations as a national signature of the Nexus model.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-8">
            <div>
              <div className="eyebrow text-[#0b3b24] mb-4">Transferable Skills</div>
              <ul className="divide-y divide-[#2d2d2d]/10 border-y border-[#2d2d2d]/10">
                {VETERAN_SKILLS.map((s) => (
                  <li key={s.k} className="py-4 grid grid-cols-12 gap-4">
                    <span className="col-span-12 md:col-span-4 font-display text-[#0a0a0a] font-medium">{s.k}</span>
                    <span className="col-span-12 md:col-span-8 text-sm text-[#2d2d2d]/80">{s.v}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="eyebrow text-[#0b3b24] mb-4">Employment Pathways</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {VETERAN_ROLES.map((r) => (
                  <div
                    key={r}
                    data-testid={`veteran-role-${r.toLowerCase().replace(/\s/g, "-")}`}
                    className="border border-[#2d2d2d]/10 px-4 py-3 flex items-center justify-between hover:border-[#0b3b24] transition-colors"
                  >
                    <span className="text-sm text-[#0a0a0a]">{r}</span>
                    <ArrowRight size={14} className="text-[#0b3b24]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
