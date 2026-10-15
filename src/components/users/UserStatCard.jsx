// src/components/users/UserStatCard.jsx
export default function UserStatCard({ icon: Icon, iconBg, label, value }) {
  return (
    <div className="bg-bg-card border border-border-subtle rounded-card p-4 flex items-center gap-3 flex-1 min-w-[200px]">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}>
        <Icon size={18} className="text-white" />
      </div>
      <div className="flex-1">
        <p className="text-text-muted text-sm">{label}</p>
        <p className="text-text-primary text-xl font-semibold">{value}</p>
      </div>
      <span className="text-text-muted">⋯</span>
    </div>
  );
}