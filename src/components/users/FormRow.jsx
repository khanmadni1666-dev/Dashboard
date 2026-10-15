// src/components/users/FormRow.jsx
export default function FormRow({ icon: Icon, label, children }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
      <div className="flex items-center gap-2 text-text-muted text-sm w-full sm:w-40 flex-shrink-0">
        <Icon size={15} /> {label}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}