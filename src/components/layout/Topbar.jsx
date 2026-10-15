// src/components/layout/Topbar.jsx
import { Download } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-text-primary text-xl font-semibold">
          Welcome back, John
        </h1>
        <p className="text-text-muted text-sm mt-1">
          Measure your advertising ROI and report website traffic.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 text-text-muted text-sm 
                           px-4 py-2 rounded-lg border border-border-subtle 
                           hover:bg-bg-card transition-colors">
          Export data <Download size={15} />
        </button>
        <button className="bg-gradient-to-r from-accent-purple to-accent-pink 
                           text-white text-sm font-medium px-4 py-2 rounded-lg
                           hover:opacity-90 transition-opacity">
          Create report
        </button>
      </div>
    </div>
  );
}