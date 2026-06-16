import React from "react";
import SectionHeader from "./SectionHeader";
import AustraliaMap from "./maps/AustraliaMap";
import { NATIONAL_HUBS } from "@/lib/nexusData";

export default function NationalVision() {
  const counts = NATIONAL_HUBS.reduce((acc, h) => {
    acc[h.status] = (acc[h.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <section
      id="national"
      data-testid="section-national"
      className="bg-white py-24 md:py-32 border-t border-[#2d2d2d]/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="16"
          eyebrow="The National Vision"
          title="One pilot. A national network of community-owned hubs."
          kicker="Wagga Wagga is the proving ground. The replication playbook is designed so every regional Council in Australia can plug into the same model — without losing local ownership or character."
          testId="national-header"
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-8">
            <AustraliaMap />
          </div>
          <div className="lg:col-span-4 space-y-6">
            {[
              ["Regional growth", "A national strategy anchored in the towns that feed and move the country."],
              ["Community ownership", "Every hub remains the asset of its local Council — never sold, never extracted."],
              ["Veteran employment", "A national operator workforce drawn from transitioning ADF personnel."],
              ["Regional manufacturing", "Mandated local-first supply chains across every site."],
              ["Tourism network", "A regional membership and trail program connecting hubs as destinations."],
              ["Freight support", "A coordinated network of safe-stop infrastructure across national corridors."],
            ].map(([k, v], i) => (
              <div
                key={k}
                data-testid={`national-pillar-${i}`}
                className="border-l-2 border-[#d4af37] pl-5"
              >
                <div className="eyebrow text-[#0b3b24]">{k}</div>
                <p className="text-sm text-[#2d2d2d]/80 mt-1 leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2d2d2d]/10 border border-[#2d2d2d]/10">
          {[
            ["1", "Pilot site (Wagga)"],
            [counts["wave-1"] || 0, "Wave 1 candidates"],
            [counts["wave-2"] || 0, "Wave 2 candidates"],
            [counts["wave-3"] || 0, "Wave 3 candidates"],
          ].map(([n, l], i) => (
            <div key={l} className="bg-white p-6">
              <div className="font-display text-3xl font-bold text-[#0b3b24]">{n}</div>
              <div className="eyebrow text-[10px] text-[#2d2d2d]/70 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
