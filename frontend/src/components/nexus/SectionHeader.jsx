import React from "react";

export default function SectionHeader({ num, eyebrow, title, kicker, dark = false, testId }) {
  const titleColor = dark ? "text-white" : "text-[#0a0a0a]";
  const kickerColor = dark ? "text-white/70" : "text-[#2d2d2d]/70";
  const ruleColor = dark ? "bg-[#d4af37]" : "bg-[#0b3b24]";

  return (
    <header className="max-w-4xl" data-testid={testId}>
      <div className="flex items-center gap-4 mb-6">
        <span className={`section-num ${dark ? "text-[#d4af37]" : "text-[#0b3b24]"}`}>
          {num}
        </span>
        <span className={`h-px w-12 ${ruleColor}`} />
        <span
          className={`eyebrow ${dark ? "text-[#d4af37]" : "text-[#0b3b24]"}`}
        >
          {eyebrow}
        </span>
      </div>
      <h2 className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] ${titleColor}`}>
        {title}
      </h2>
      {kicker && (
        <p className={`mt-6 text-base md:text-lg leading-relaxed max-w-3xl ${kickerColor}`}>
          {kicker}
        </p>
      )}
    </header>
  );
}
