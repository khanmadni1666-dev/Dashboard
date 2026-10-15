// src/components/dashboard/DeviceUsers.jsx
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Desktop', value: 15624, color: '#A855F7' },
  { name: 'Phone', value: 5546, color: '#EC4899' },
  { name: 'Laptop', value: 2478, color: '#3B82F6' },
];

export default function DeviceUsers() {
  return (
    <div className="bg-bg-card border border-border-subtle rounded-card p-5 flex-1">
      <div className="flex items-center justify-between mb-4">
        <p className="text-text-primary font-medium">Reports overview</p>
      </div>

      <div className="relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              startAngle={210}
              endAngle={-30}
              innerRadius={70}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute flex flex-col items-center top-[38%]">
          <span className="text-text-primary text-2xl font-semibold">23,648</span>
          <span className="text-text-muted text-xs">Users by device</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        {data.map((d) => (
          <div key={d.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: d.color }} />
              <span className="text-text-muted">{d.name} users</span>
            </div>
            <span className="text-text-primary">{d.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}