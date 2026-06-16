import React from "react";
import SectionHeader from "./SectionHeader";
import { EMERGENCY_USES, IMAGES } from "@/lib/nexusData";
import { Siren } from "lucide-react";

export default function EmergencyResponse() {
  return (
    <section
      id="emergency"
      data-testid="section-emergency"
      className="bg-white py-24 md:py-32 border-t border-[#2d2d2d]/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="13"
          eyebrow="Emergency Response Capability"
          title="Built to keep the region operating when systems fail."
          kicker="The hub is architected as critical infrastructure — power-independent, communications-redundant, and pre-equipped for evacuation, accommodation and supply distribution during regional emergencies."
          testId="emergency-header"
        />

        <div className="grid lg:grid-cols-12 gap-10 mt-16">
          <div className="lg:col-span-5 relative min-h-[380px]">
            <img
              src={IMAGES.emergency}
              alt="Emergency response team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0b3b24]/40 to-[#0a0a0a]/85" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Siren size={26} className="text-[#d4af37] mb-3" />
              <div className="font-display text-2xl md:text-3xl leading-tight">
                A regional safety asset, every day of the year.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-[#2d2d2d]/10 border border-[#2d2d2d]/10">
              {EMERGENCY_USES.map((u, i) => (
                <div
                  key={u.k}
                  data-testid={`emergency-use-${i}`}
                  className="bg-white p-7 min-h-[180px] flex flex-col"
                >
                  <span className="section-num text-[#0b3b24]">0{i + 1}</span>
                  <div className="font-display font-bold text-xl text-[#0a0a0a] mt-2">{u.k}</div>
                  <p className="text-sm text-[#2d2d2d]/80 leading-relaxed mt-3">{u.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2d2d2d]/10 border border-[#2d2d2d]/10">
              {[
                ["80", "Emergency beds"],
                ["72h", "Off-grid power"],
                ["StarLink", "Backup comms"],
                ["RFS · SES", "Agency liaison"],
              ].map(([n, l]) => (
                <div key={l} className="bg-[#0b3b24] text-white p-5">
                  <div className="font-display text-xl md:text-2xl text-[#d4af37]">{n}</div>
                  <div className="eyebrow text-[10px] mt-1 text-white/80">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
