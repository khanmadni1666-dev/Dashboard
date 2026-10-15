// src/components/dashboard/RevenueChart.jsx
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 450000, expenses: 200000 },
  { month: 'Feb', revenue: 520000, expenses: 25000 },
  { month: 'Mar', revenue: 480000, expenses: 22000 },
  { month: 'Apr', revenue: 610000, expenses: 30000 },
  { month: 'May', revenue: 1252000, expenses: 45000 },
  { month: 'Jun', revenue: 980000, expenses: 400000 },
  { month: 'Jul', revenue: 1170000, expenses: 38000 },
  { month: 'Aug', revenue: 1300000, expenses: 4200000 },
  { month: 'Sep', revenue: 6666666, expenses: 500000 },
  { month: 'Oct', revenue: 3399999, expenses: 550000 },
  { month: 'Nov', revenue: 4444444, expenses: 600000 },
  { month: 'Dec', revenue: 5111112, expenses: 950000 },
];

export default function RevenueChart() {
  return (
    <div className="bg-bg-card border border-border-subtle rounded-card p-5 flex-1 min-w-[280px]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-text-muted text-sm mb-1">Total revenue</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-text-primary text-2xl font-semibold">$240.8K</h2>
            <span className="text-success text-xs bg-success/10 px-1.5 py-0.5 rounded-md">
              18.2%
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-purple" /> Revenue
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" /> Expenses
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A855F7" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#A855F7" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="expGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#1E2438" vertical={false} />
          <XAxis dataKey="month" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false}
                 tickFormatter={(v) => `${v / 1000}K`} />
          <Tooltip
            contentStyle={{ background: '#12162A', border: '1px solid #1E2438', borderRadius: 8 }}
            labelStyle={{ color: '#F1F2F6' }}
          />

          <Area type="monotone" dataKey="revenue" stroke="#A855F7" strokeWidth={2}
                fill="url(#revGradient)" />
          <Area type="monotone" dataKey="expenses" stroke="#06B6D4" strokeWidth={2}
                fill="url(#expGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}