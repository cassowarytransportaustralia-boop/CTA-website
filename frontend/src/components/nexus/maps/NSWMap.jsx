import React from "react";

// Stylised NSW schematic. Wagga Wagga at the centre.
export default function NSWMap() {
  return (
    <svg
      viewBox="0 0 800 480"
      className="w-full h-auto"
      role="img"
      aria-label="Stylised NSW freight network with Wagga Wagga at centre"
      data-testid="nsw-map"
    >
      <defs>
        <pattern id="nsw-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0b3b24" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="800" height="480" fill="#f7f9f8" />
      <rect x="0" y="0" width="800" height="480" fill="url(#nsw-grid)" />

      {/* NSW boundary stylised */}
      <path
        d="M 60 200 L 160 140 L 280 120 L 420 100 L 560 110 L 680 140 L 740 200 L 740 320 L 660 380 L 540 410 L 380 420 L 220 410 L 120 380 L 60 320 Z"
        fill="#ffffff"
        stroke="#0b3b24"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />

      {/* Olympic Hwy (Albury -> Wagga -> Cowra -> Bathurst) */}
      <path
        d="M 360 410 L 400 320 L 440 260 L 500 200 L 560 160"
        fill="none"
        stroke="#0b3b24"
        strokeWidth="3"
      />
      {/* Sturt Hwy (Mildura -> Hay -> Wagga -> Yass -> Sydney) */}
      <path
        d="M 90 290 L 200 280 L 320 280 L 440 260 L 560 240 L 660 220"
        fill="none"
        stroke="#d4af37"
        strokeWidth="3"
      />
      {/* Inland Rail */}
      <path
        d="M 380 420 L 420 340 L 440 260 L 460 180 L 500 110"
        fill="none"
        stroke="#2d2d2d"
        strokeOpacity="0.85"
        strokeWidth="2"
        strokeDasharray="4 5"
      />

      {/* Cities */}
      {[
        { x: 660, y: 220, n: "Sydney" },
        { x: 560, y: 160, n: "Bathurst" },
        { x: 500, y: 200, n: "Cowra" },
        { x: 90, y: 290, n: "Mildura" },
        { x: 200, y: 280, n: "Hay" },
        { x: 360, y: 410, n: "Albury" },
        { x: 560, y: 240, n: "Yass" },
        { x: 500, y: 110, n: "Dubbo" },
        { x: 320, y: 280, n: "Narrandera" },
      ].map((c) => (
        <g key={c.n}>
          <circle cx={c.x} cy={c.y} r="4" fill="#2d2d2d" />
          <text x={c.x + 8} y={c.y + 4} fontSize="11" fill="#2d2d2d" fontFamily="IBM Plex Sans">
            {c.n}
          </text>
        </g>
      ))}

      {/* Wagga Wagga centre */}
      <g>
        <circle cx="440" cy="260" r="22" fill="none" stroke="#0b3b24" strokeWidth="1.5" strokeOpacity="0.35" />
        <circle cx="440" cy="260" r="34" fill="none" stroke="#0b3b24" strokeWidth="1" strokeOpacity="0.18" />
        <circle cx="440" cy="260" r="10" fill="#0b3b24" />
        <circle cx="440" cy="260" r="5" fill="#d4af37" />
        <circle cx="440" cy="260" r="10" fill="#0b3b24" className="map-pulse" />
        <text x="460" y="252" fontSize="13" fontWeight="700" fill="#0b3b24" fontFamily="Cabinet Grotesk">
          WAGGA WAGGA
        </text>
        <text x="460" y="268" fontSize="10" fill="#0b3b24" fontFamily="IBM Plex Mono" letterSpacing="1.2">
          PILOT SITE
        </text>
      </g>

      {/* Catchment ring */}
      <circle cx="440" cy="260" r="120" fill="none" stroke="#d4af37" strokeOpacity="0.35" strokeDasharray="3 4" />
      <text x="440" y="395" textAnchor="middle" fontSize="10" fill="#0b3b24" fontFamily="IBM Plex Mono" letterSpacing="1.2">
        120KM CATCHMENT
      </text>
    </svg>
  );
}
