import React, { useState, useMemo } from "react";
import SectionHeader from "./SectionHeader";
import { ECONOMIC_PROJECTION } from "@/lib/nexusData";
import {
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const METRICS = [
  { key: "construction", label: "Construction Jobs", color: "#2d2d2d", unit: "" },
  { key: "permanent", label: "Permanent Jobs", color: "#0b3b24", unit: "" },
  { key: "visitors", label: "Visitor Spend (AUD $M)", color: "#d4af37", unit: "M" },
  { key: "gdp", label: "Regional GDP Uplift (AUD $M)", color: "#4a6b58", unit: "M" },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#0b3b24] px-3 py-2 text-xs">
      <div className="font-mono text-[#0b3b24] mb-1">{label}</div>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center justify-between gap-4">
          <span style={{ color: p.color }}>{p.name}</span>
          <span className="font-semibold text-[#0a0a0a]">{p.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function EconomicImpact() {
  const [selected, setSelected] = useState(["permanent", "gdp"]);

  const totals = useMemo(() => {
    const last = ECONOMIC_PROJECTION[ECONOMIC_PROJECTION.length - 1];
    const sumVisitors = ECONOMIC_PROJECTION.reduce((s, r) => s + r.visitors, 0);
    const sumGdp = ECONOMIC_PROJECTION.reduce((s, r) => s + r.gdp, 0);
    return {
      permanentY10: last.permanent,
      constructionPeak: Math.max(...ECONOMIC_PROJECTION.map((r) => r.construction)),
      visitor10yr: sumVisitors,
      gdp10yr: sumGdp,
    };
  }, []);

  const toggle = (k) =>
    setSelected((arr) => (arr.includes(k) ? arr.filter((x) => x !== k) : [...arr, k]));

  return (
    <section
      id="economic"
      data-testid="section-economic"
      className="bg-[#f7f9f8] py-24 md:py-32 border-t border-[#2d2d2d]/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="14"
          eyebrow="Economic Impact · 10 Year Projection"
          title="A measurable, compounding return to Council and community."
          kicker="Jobs, visitor spend, GDP uplift, business growth — every metric reinforces the case that the Nexus Hub is one of the highest-leverage infrastructure investments available to a regional Council."
          testId="economic-header"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2d2d2d]/10 border border-[#2d2d2d]/10 mt-12">
          {[
            ["$612M", "Regional GDP uplift · 10yr"],
            ["230+", "Permanent jobs · Y10"],
            ["420", "Construction jobs · peak"],
            ["$330M", "Cumulative visitor spend"],
          ].map(([n, l], i) => (
            <div key={l} data-testid={`economic-headline-${i}`} className="bg-white p-6 md:p-8">
              <div className="font-display text-3xl md:text-4xl font-bold text-[#0b3b24]">{n}</div>
              <div className="eyebrow text-[10px] text-[#2d2d2d]/70 mt-2">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-[#2d2d2d]/10 p-4 md:p-8 bg-white" data-testid="economic-chart-card">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <div className="eyebrow text-[#0b3b24]">Projection Controls</div>
              <div className="font-display text-xl text-[#0a0a0a] mt-1">Toggle metrics to compare trajectories.</div>
            </div>
            <div className="flex flex-wrap gap-2" data-testid="economic-metric-toggle">
              {METRICS.map((m) => {
                const on = selected.includes(m.key);
                return (
                  <button
                    key={m.key}
                    data-testid={`economic-metric-${m.key}`}
                    onClick={() => toggle(m.key)}
                    className="text-xs tracking-wide px-3 py-2 border transition-colors"
                    style={{
                      borderColor: on ? m.color : "rgba(45,45,45,0.2)",
                      background: on ? m.color : "#fff",
                      color: on ? "#fff" : "#2d2d2d",
                    }}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={ECONOMIC_PROJECTION} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2d2d2d22" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#2d2d2d" }} />
                <YAxis tick={{ fontSize: 11, fill: "#2d2d2d" }} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "#0b3b2410" }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                {selected.includes("construction") && (
                  <Bar dataKey="construction" name="Construction Jobs" fill="#2d2d2d" radius={0} />
                )}
                {selected.includes("permanent") && (
                  <Area
                    type="linear"
                    dataKey="permanent"
                    name="Permanent Jobs"
                    fill="#0b3b24"
                    stroke="#0b3b24"
                    fillOpacity={0.18}
                    strokeWidth={2}
                  />
                )}
                {selected.includes("visitors") && (
                  <Line
                    type="linear"
                    dataKey="visitors"
                    name="Visitor Spend ($M)"
                    stroke="#d4af37"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: "#d4af37" }}
                  />
                )}
                {selected.includes("gdp") && (
                  <Line
                    type="linear"
                    dataKey="gdp"
                    name="Regional GDP ($M)"
                    stroke="#4a6b58"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: "#4a6b58" }}
                  />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#2d2d2d]/10 text-sm">
            <div>
              <span className="eyebrow text-[#0b3b24]">Ratepayer benefit</span>
              <p className="mt-1 text-[#2d2d2d]/80">Recurring lease, percentage rent and member royalty flows.</p>
            </div>
            <div>
              <span className="eyebrow text-[#0b3b24]">Tourism growth</span>
              <p className="mt-1 text-[#2d2d2d]/80">Hub anchored events and member program drive overnight stays.</p>
            </div>
            <div>
              <span className="eyebrow text-[#0b3b24]">Local business</span>
              <p className="mt-1 text-[#2d2d2d]/80">Spillover spend captured by surrounding food, retail, services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
