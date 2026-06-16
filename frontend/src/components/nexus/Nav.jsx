import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_SECTIONS } from "@/lib/nexusData";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="nexus-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#2d2d2d]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => go("welcome")}
          className="flex items-center gap-3 group"
        >
          <span className="w-9 h-9 bg-[#0b3b24] flex items-center justify-center">
            <span className="block w-3 h-3 bg-[#d4af37]" />
          </span>
          <span className="flex flex-col items-start leading-tight">
            <span className={`font-display font-bold text-[15px] tracking-tight ${scrolled ? "text-[#0a0a0a]" : "text-white"}`}>
              NEXUS REGIONAL HUB
            </span>
            <span className={`eyebrow text-[10px] ${scrolled ? "text-[#0b3b24]" : "text-[#d4af37]"}`}>
              Wagga Wagga Pilot
            </span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-6">
          {["challenge", "masterplan", "revenue", "economic", "roadmap"].map((id) => {
            const sec = NAV_SECTIONS.find((s) => s.id === id);
            return (
              <button
                key={id}
                data-testid={`nav-link-${id}`}
                onClick={() => go(id)}
                className={`text-sm tracking-wide transition-colors ${
                  scrolled
                    ? "text-[#2d2d2d] hover:text-[#0b3b24]"
                    : "text-white/90 hover:text-[#d4af37]"
                }`}
              >
                {sec?.label}
              </button>
            );
          })}
          <button
            data-testid="nav-cta"
            onClick={() => go("cta")}
            className="btn-primary text-sm py-2.5 px-5"
          >
            Partner With Us <ArrowRight size={14} />
          </button>
        </nav>

        <button
          data-testid="nav-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 ${scrolled ? "text-[#0a0a0a]" : "text-white"}`}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-[#2d2d2d]/10" data-testid="nav-mobile-panel">
          <div className="max-h-[70vh] overflow-y-auto px-5 py-6 grid grid-cols-1 gap-1">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s.id}
                data-testid={`nav-mobile-${s.id}`}
                onClick={() => go(s.id)}
                className="flex items-center justify-between py-3 border-b border-[#2d2d2d]/10 text-left"
              >
                <span className="text-[#0a0a0a] text-sm font-medium">{s.label}</span>
                <span className="section-num">{s.num}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
