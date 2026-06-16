import React, { useMemo, useState } from "react";
import SectionHeader from "./SectionHeader";
import { REVENUE_SCENARIOS } from "@/lib/nexusData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const SCENARIO_KEYS = ["conservative", "moderate", "optimistic"];
const COLOURS = ["#0b3b24", "#d4af37", "#2d2d2d", "#4a6b58", "#e2c874", "#0f4e30", "#a89030", "#5b5b5b", "#6b8475"];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#0b3b24] px-3 py-2 text-xs">
      <div className="font-mono text-[#0b3b24] mb-1">{label}</div>
      <div className="text-[#0a0a0a] font-semibold">${payload[0].value.toFixed(1)}M / yr</div>
    </div>
  );
}

export default function Revenue() {
  const [scenario, setScenario] = useState("moderate");
  const current = REVENUE_SCENARIOS[scenario];
  const total = useMemo(
    () => current.streams.reduce((s, x) => s + x.value, 0),
    [current]
  );

  return (
    <section
      id="revenue"
      data-testid="section-revenue"
      className="bg-white py-24 md:py-32 border-t border-[#2d2d2d]/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionHeader
          num="09"
          eyebrow="Revenue Model"
          title="Diversified, recurring, regionally-anchored."
          kicker="Nine independent revenue streams — modelled across conservative, moderate and optimistic scenarios — designed to make the hub self-sustaining without recurring grant dependence."
          testId="revenue-header"
        />

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <div
            className="inline-flex border border-[#0b3b24] divide-x divide-[#0b3b24]"
            data-testid="revenue-scenario-toggle"
          >
            {SCENARIO_KEYS.map((k) => (
              <button
                key={k}
                data-testid={`revenue-scenario-${k}`}
                onClick={() => setScenario(k)}
                className={`px-6 py-3 text-sm tracking-wide transition-colors ${
                  scenario === k
                    ? "bg-[#0b3b24] text-white"
                    : "bg-white text-[#0b3b24] hover:bg-[#0b3b24]/5"
                }`}
              >
                {REVENUE_SCENARIOS[k].label}
              </button>
            ))}
          </div>
          <div className="font-mono text-xs text-[#2d2d2d]/60 tracking-widest">
            ANNUAL · STABILISED YEAR · AUD $M
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mt-10">
          <div className="lg:col-span-8 border border-[#2d2d2d]/10 p-4 md:p-8 bg-[#f7f9f8]" data-testid="revenue-chart-card">
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <div className="eyebrow text-[#0b3b24]">{current.label} scenario</div>
                <div className="font-display text-3xl md:text-4xl font-bold text-[#0a0a0a] mt-1">
                  ${total.toFixed(1)}M
                  <span className="text-base font-normal text-[#2d2d2d]/60 ml-2">per annum</span>
                </div>
              </div>
              <p className="text-xs text-[#2d2d2d]/70 max-w-xs text-right">{current.note}</p>
            </div>

            <div className="h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={current.streams} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2d2d2d22" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11, fill: "#2d2d2d" }}
                    angle={-25}
                    textAnchor="end"
                    interval={0}
                  />
                  <YAxis tick={{ fontSize: 11, fill: "#2d2d2d" }} />
                  <Tooltip cursor={{ fill: "#0b3b2410" }} content={<CustomTooltip />} />
                  <Bar dataKey="value" radius={0}>
                    {current.streams.map((_, i) => (
                      <Cell key={i} fill={COLOURS[i % COLOURS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4">
            <ul className="divide-y divide-[#2d2d2d]/10 border-y border-[#2d2d2d]/10">
              {current.streams.map((s, i) => {
                const pct = ((s.value / total) * 100).toFixed(1);
                return (
                  <li
                    key={s.name}
                    data-testid={`revenue-stream-${s.name.toLowerCase().replace(/\s/g, "-")}`}
                    className="py-3 flex items-center justify-between gap-4"
                  >
                    <span className="flex items-center gap-3 text-sm text-[#0a0a0a]">
                      <span
                        className="block w-3 h-3"
                        style={{ background: COLOURS[i % COLOURS.length] }}
                      />
                      {s.name}
                    </span>
                    <span className="font-mono text-xs text-[#2d2d2d]/70">
                      ${s.value.toFixed(1)}M · {pct}%
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 border border-[#2d2d2d]/10 p-5 bg-[#0b3b24] text-white">
              <div className="eyebrow text-[#d4af37] mb-2">Recurring revenue</div>
              <p className="text-sm leading-relaxed text-white/85">
                Every dollar generated by the hub is reinvested locally — funding
                operations, member benefits, community grants, and future
                regional expansion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
