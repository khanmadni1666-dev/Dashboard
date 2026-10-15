// src/components/dashboard/ProfitChart.jsx
import { BarChart, Bar, LineChart, Line, Cell, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const profitData = [
  { time: '12 AM', value: 8000 }, { time: '', value: 12000 },
  { time: '', value: 7000 },      { time: '8 AM', value: 15000 },
  { time: '', value: 9000 },      { time: '', value: 18000 },
  { time: '4 PM', value: 11000 }, { time: '', value: 16000 },
  { time: '', value: 13000 },     { time: '11 PM', value: 19000 },
];

const sessionsData = [
  { time: '12 AM', value: 100 }, { time: '', value: 250 },
  { time: '8 AM', value: 180 },  { time: '', value: 400 },
  { time: '4 PM', value: 150 },  { time: '', value: 300 },
  { time: '11 PM', value: 200 },
];

export default function ProfitChart() {
  return (
    <div className="bg-bg-card border border-border-subtle rounded-card p-5 w-full md:w-80 flex flex-col gap-5">

      {/* Total profit */}
      <div>
        <p className="text-text-muted text-sm mb-2">Total profit</p>
        <div className="flex items-baseline gap-2 mb-3">
          <h2 className="text-text-primary text-2xl font-semibold">$144.6K</h2>
          <span className="text-success text-xs bg-success/10 px-1.5 py-0.5 rounded-md">
            28.5%
          </span>
        </div>
        <ResponsiveContainer width="100%" height={90}>
          <BarChart data={profitData}>
            <Tooltip
              contentStyle={{ background: '#12162A', border: '1px solid #1E2438', borderRadius: 8 }}
              labelStyle={{ color: '#F1F2F6' }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {profitData.map((_, i) => (
                <Cell key={i} fill={i % 2 === 0 ? '#A855F7' : '#06B6D4'} />
              ))}
            </Bar>
            <XAxis dataKey="time" stroke="#6B7280" fontSize={11}
                   tickLine={false} axisLine={false} interval={0} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-between text-xs mt-2">
          <span className="text-text-muted">Last 12 months</span>
          <a href="#" className="text-accent-purple">View report</a>
        </div>
      </div>

      {/* Total sessions */}
      <div>
        <p className="text-text-muted text-sm mb-1">Total sessions</p>
        <div className="flex items-baseline gap-2 mb-3">
          <h2 className="text-text-primary text-2xl font-semibold">400</h2>
          <span className="text-success text-xs bg-success/10 px-1.5 py-0.5 rounded-md">
            16.8%
          </span>
        </div>
        <ResponsiveContainer width="100%" height={90}>
          <LineChart data={sessionsData}>
            <Line type="monotone" dataKey="value" stroke="#EC4899" strokeWidth={2} dot={false} />
            <XAxis dataKey="time" stroke="#6B7280" fontSize={11}
                   tickLine={false} axisLine={false} interval={0} />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-between text-xs mt-2">
          <span className="flex items-center gap-1 text-success">
            <span className="w-1.5 h-1.5 rounded-full bg-success" /> Live
          </span>
          <span className="text-text-muted">10k visitors</span>
          <a href="#" className="text-accent-purple">View report</a>
        </div>
      </div>

    </div>
  );
}