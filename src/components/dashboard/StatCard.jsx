// src/components/dashboard/StatCard.jsx
export default function StatCard({ icon: Icon, label, value, change, isPositive = true }) {
  return (
    <div className="bg-bg-card border border-border-subtle rounded-card p-4 
                w-[220px] flex-shrink-0 md:w-auto md:flex-1 md:flex-shrink">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <Icon size={15} />
          {label}
        </div>
        <span className="text-text-muted text-lg">⋯</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-text-primary text-2xl font-semibold">{value}</span>
        <span className={`text-xs px-1.5 py-0.5 rounded-md
          ${isPositive ? 'text-success bg-success/10' : 'text-danger bg-danger/10'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}