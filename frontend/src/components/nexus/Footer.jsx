import React from "react";

export default function Footer() {
  return (
    <footer
      data-testid="nexus-footer"
      className="bg-[#0b3b24] text-white py-14 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 bg-[#d4af37] flex items-center justify-center">
                <span className="block w-3 h-3 bg-[#0b3b24]" />
              </span>
              <span className="font-display font-bold tracking-tight text-lg">
                NEXUS REGIONAL HUB
              </span>
            </div>
            <p className="text-white/75 text-sm leading-relaxed max-w-md">
              A community-owned regional infrastructure model.
              Wagga Wagga pilot project · Cassowary partnership proposal.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="eyebrow text-[#d4af37] mb-3">Contact</div>
            <p className="text-sm text-white/80">
              Cassowary Partnership Team <br />
              partnerships@nexusregionalhub.au <br />
              +61 (0) 000 000 000
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow text-[#d4af37] mb-3">Status</div>
            <p className="text-sm text-white/80">
              Document Version · v1.0 <br />
              Issued · Briefing Edition <br />
              Audience · Council, Government, Industry
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/55">
          <span className="font-mono tracking-widest">
            © {new Date().getFullYear()} NEXUS REGIONAL HUB · WAGGA WAGGA PILOT PROJECT
          </span>
          <span className="font-mono tracking-widest">
            CONFIDENTIAL · FOR COUNCILLOR & STAKEHOLDER REVIEW
          </span>
        </div>
      </div>
    </footer>
  );
}
