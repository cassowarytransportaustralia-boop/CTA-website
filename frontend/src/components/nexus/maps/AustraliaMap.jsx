import React, { useState } from "react";
import { NATIONAL_HUBS } from "@/lib/nexusData";

const STATUS_STYLE = {
  pilot: { color: "#d4af37", label: "Pilot Site" },
  "wave-1": { color: "#0b3b24", label: "Wave 1" },
  "wave-2": { color: "#4a6b58", label: "Wave 2" },
  "wave-3": { color: "#2d2d2d", label: "Wave 3" },
};

export default function AustraliaMap() {
  const [hover, setHover] = useState(null);

  return (
    <div className="relative" data-testid="australia-map">
      <svg
        viewBox="0 0 820 620"
        className="w-full h-auto"
        role="img"
        aria-label="Stylised national vision map of Australia with future Nexus Hub sites"
      >
        <defs>
          <pattern id="aus-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="820" height="620" fill="#0b3b24" />
        <rect x="0" y="0" width="820" height="620" fill="url(#aus-grid)" />

        {/* Australia outline (stylised) */}
        <path
          d="M 110 240 L 140 180 L 200 140 L 270 110 L 360 90 L 440 95 L 520 110 L 600 140 L 670 190 L 720 250 L 740 320 L 720 400 L 660 470 L 580 520 L 470 560 L 360 570 L 250 540 L 160 480 L 110 400 L 95 320 Z"
          fill="#0f4e30"
          stroke="#d4af37"
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />

        {/* Tasmania */}
        <path d="M 480 590 L 520 580 L 540 600 L 520 615 L 490 612 Z" fill="#0f4e30" stroke="#d4af37" strokeOpacity="0.6" strokeWidth="1.2" />

        {/* Connecting lines from Wagga pilot to all sites */}
        {NATIONAL_HUBS.filter((h) => h.status !== "pilot").map((h) => (
          <line
            key={`line-${h.name}`}
            x1="660"
            y1="470"
            x2={h.x}
            y2={h.y}
            stroke="#d4af37"
            strokeOpacity="0.25"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
        ))}

        {/* Hubs */}
        {NATIONAL_HUBS.map((h) => {
          const s = STATUS_STYLE[h.status];
          const isPilot = h.status === "pilot";
          return (
            <g
              key={h.name}
              onMouseEnter={() => setHover(h.name)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: "pointer" }}
              data-testid={`aus-hub-${h.name.toLowerCase().replace(/\s/g, "-")}`}
            >
              <circle cx={h.x} cy={h.y} r={isPilot ? 12 : 7} fill={s.color} stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
              {isPilot && <circle cx={h.x} cy={h.y} r="12" fill={s.color} className="map-pulse" />}
              <text
                x={h.x + (isPilot ? 18 : 12)}
                y={h.y + 4}
                fontSize={isPilot ? 13 : 11}
                fontWeight={isPilot ? 700 : 500}
                fill={isPilot ? "#d4af37" : "#ffffff"}
                fontFamily={isPilot ? "Cabinet Grotesk" : "IBM Plex Sans"}
                opacity={hover && hover !== h.name && !isPilot ? 0.5 : 1}
              >
                {h.name}
              </text>
            </g>
          );
        })}

        {/* Legend */}
        <g transform="translate(40, 540)">
          {Object.entries(STATUS_STYLE).map(([k, v], i) => (
            <g key={k} transform={`translate(${i * 130}, 0)`}>
              <circle cx="6" cy="6" r="6" fill={v.color} />
              <text x="20" y="10" fontSize="11" fill="#ffffff" fontFamily="IBM Plex Mono" letterSpacing="1.5">
                {v.label.toUpperCase()}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
