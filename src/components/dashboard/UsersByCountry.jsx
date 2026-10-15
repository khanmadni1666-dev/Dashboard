import { useState } from "react";

/* ------------------------------------------------------------------
   Dotted world map data.
   Each entry = one row of the dot grid; each pair = [startCol, endCol]
   of land. Grid is 64 cols (lon -180..180) x 30 rows (lat 84..-60).
------------------------------------------------------------------- */
const COLS = 64;
const ROWS = 30;
const GAP = 8;          // px between dot centers
const DOT = 1.6;        // dot radius
const LAT_TOP = 84;
const LAT_BOTTOM = -60;

const LAND = [
  [[24, 28]],
  [[11, 18], [22, 28], [35, 35], [49, 49]],
  [[11, 19], [22, 28], [41, 42], [48, 52], [56, 60]],
  [[3, 20], [23, 29], [34, 63]],
  [[2, 20], [22, 25], [28, 28], [33, 63]],
  [[2, 15], [19, 20], [24, 24], [33, 63]],
  [[3, 4], [8, 21], [31, 31], [33, 63]],
  [[9, 22], [31, 39], [41, 63]],
  [[10, 21], [32, 40], [42, 57]],
  [[10, 19], [30, 40], [41, 57]],
  [[10, 18], [30, 40], [41, 57]],
  [[11, 18], [30, 42], [43, 56]],
  [[12, 17], [29, 42], [44, 54]],
  [[13, 18], [29, 42], [44, 53]],
  [[14, 20], [29, 42], [44, 54]],
  [[15, 17], [20, 22], [29, 40], [45, 47], [50, 54]],
  [[17, 24], [30, 40], [46, 46], [51, 55]],
  [[18, 26], [33, 39], [51, 56]],
  [[18, 27], [33, 39], [50, 60]],
  [[18, 28], [34, 39], [51, 60]],
  [[18, 29], [34, 39], [52, 59]],
  [[18, 26], [34, 40], [52, 58]],
  [[19, 26], [34, 38], [40, 41], [52, 58]],
  [[19, 26], [34, 38], [40, 40], [52, 58]],
  [[19, 24], [35, 37], [52, 58]],
  [[20, 23], [35, 36], [53, 58], [62, 63]],
  [[20, 23], [58, 58], [62, 63]],
  [[20, 22], [62, 63]],
  [[20, 22]],
  [[21, 21]],
];

const MAP_W = COLS * GAP;
const MAP_H = ROWS * GAP;

/** Longitude/latitude -> pixel position inside the map viewBox. */
function project(lon, lat) {
  return {
    x: ((lon + 180) / 360) * MAP_W,
    y: ((LAT_TOP - lat) / (LAT_TOP - LAT_BOTTOM)) * MAP_H,
  };
}

const MARKERS = [
  { id: "us", lon: -101, lat: 43, tone: "violet" },
  { id: "uk", lon: 2, lat: 52, tone: "violet" },
  { id: "ru", lon: 124, lat: 60, tone: "violet" },
  { id: "in", lon: 79, lat: 23, tone: "violet" },
  { id: "au", lon: 134, lat: -25, tone: "cyan", value: "1.86 K", label: "Australia" },
];

const COUNTRIES = [
  { name: "United states", share: 30, bar: "from-[#8B5CF6] via-[#C026D3] to-[#F0ABFC]" },
  { name: "United Kingdom", share: 20, bar: "from-[#6B7280] via-[#9CA3AF] to-[#D1D5DB]" },
  { name: "Canada", share: 20, bar: "from-[#94A3B8] via-[#CBD5E1] to-[#F8FAFC]" },
  { name: "Australia", share: 15, bar: "from-[#0EA5E9] via-[#22D3EE] to-[#67E8F9]" },
  { name: "Spain", share: 15, bar: "from-[#64748B] via-[#E2E8F0] to-[#FFFFFF]" },
];

function WorldMap() {
  const dots = [];
  LAND.forEach((ranges, row) => {
    ranges.forEach(([start, end]) => {
      for (let col = start; col <= end; col++) {
        dots.push(
          <circle
            key={`${row}-${col}`}
            cx={col * GAP + GAP / 2}
            cy={row * GAP + GAP / 2}
            r={DOT}
          />
        );
      }
    });
  });

  return (
    <svg
      viewBox={`0 0 ${MAP_W} ${MAP_H}`}
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="glow-violet">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#A855F7" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow-cyan">
          <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#22D3EE" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g fill="#33406B">{dots}</g>

      {MARKERS.map((m) => {
        const { x, y } = project(m.lon, m.lat);
        const cyan = m.tone === "cyan";
        return (
          <g key={m.id}>
            <circle
              cx={x}
              cy={y}
              r={22}
              fill={cyan ? "url(#glow-cyan)" : "url(#glow-violet)"}
            />
            <circle
              cx={x}
              cy={y}
              r={7}
              fill="none"
              stroke={cyan ? "#22D3EE" : "#A855F7"}
              strokeOpacity="0.55"
            />
            <circle cx={x} cy={y} r={3.2} fill={cyan ? "#A5F3FC" : "#E9D5FF"} />
          </g>
        );
      })}
    </svg>
  );
}

export default function UsersByCountry({ className = "" }) {
  const [active, setActive] = useState("Australia");
  const au = project(134, -25);

  return (
    <div
      className={`flex w-full flex-col gap-6 rounded-2xl bg-[#0D1330] p-6 ring-1 ring-white/5 lg:flex-row ${className}`}
    >
      {/* Left: stats */}
      <div className="w-full shrink-0 lg:w-64">
        <h2 className="text-sm font-medium text-slate-200">Users by country</h2>

        <div className="mt-2 flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold tracking-tight text-white">
              12.4 K
            </span>
            <span className="text-xs font-medium text-emerald-400">
              28.5% ↗
            </span>
          </div>
          <button
            type="button"
            className="rounded-md px-2 py-1 text-xs text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
          >
            Export ↓
          </button>
        </div>

        <ul className="mt-6">
          {COUNTRIES.map((c) => (
            <li
              key={c.name}
              onMouseEnter={() => setActive(c.name)}
              className="border-t border-white/5 py-3 first:border-t-0"
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`text-xs ${
                    active === c.name ? "text-white" : "text-slate-400"
                  }`}
                >
                  {c.name}
                </span>
                <span className="text-xs text-slate-400">{c.share}%</span>
              </div>
              <div className="mt-2 h-[3px] w-28 overflow-hidden rounded-full bg-white/5">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
                  style={{ width: `${c.share * 3}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: map */}
      <div className="min-w-0 flex-1 pr-24">
        <div className="relative">
          <WorldMap />

          <div
            className="pointer-events-none absolute flex -translate-y-full items-center gap-2"
            style={{
              left: `${(au.x / MAP_W) * 100}%`,
              top: `${(au.y / MAP_H) * 100}%`,
            }}
          >
            <span className="h-7 w-[3px] rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500" />
            <span className="leading-tight">
              <span className="block text-sm font-medium text-white">1.86 K</span>
              <span className="block text-[10px] text-slate-400">Australia</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
