// src/components/layout/Sidebar.jsx
import { LayoutDashboard, FileText, Package, CheckSquare, 
         Sparkles, Users, DollarSign, Puzzle, Settings, 
         Layers, Search } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: FileText, label: 'All pages', active: false },
  { icon: FileText, label: 'Reports', active: true },
  { icon: Package, label: 'Products', active: false },
  { icon: CheckSquare, label: 'Task', active: false },
  { icon: Sparkles, label: 'Features', active: false },
  { icon: Users, label: 'Users', active: false },
  { icon: DollarSign, label: 'Pricing', active: false },
  { icon: Puzzle, label: 'Integrations', active: false },
];

const bottomItems = [
  { icon: Settings, label: 'Settings' },
  { icon: Layers, label: 'Template pages' },
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="hidden md:flex w-64 h-screen bg-bg-sidebar border-r border-border-subtle 
                   flex-col px-4 py-5 fixed left-0 top-0 z-40">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 mb-6">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-purple 
                        to-accent-blue" />
        <span className="text-text-primary font-semibold text-[15px]">Dashkart X</span>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <input
          placeholder="Search for.."
          className="w-full bg-bg-card border border-border-subtle rounded-lg
                     pl-9 pr-3 py-2 text-sm text-text-primary placeholder:text-text-muted
                     focus:outline-none focus:ring-1 focus:ring-accent-purple"
        />
      </div>

      {/* Nav */}
      <p className="text-[11px] text-text-muted uppercase tracking-wide px-2 mb-2">
        Dashboard
      </p>
      <nav className="flex flex-col gap-1">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => onNavigate(label)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left w-full
              ${activePage === label
                ? 'bg-gradient-to-r from-accent-purple/20 to-transparent text-accent-purple border-l-2 border-accent-purple'
                : 'text-text-muted hover:bg-bg-card hover:text-text-primary'}`}
          >
            <Icon size={17} />
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-1">
        {bottomItems.map(({ icon: Icon, label }) => (
          <a key={label} href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg 
                                               text-sm text-text-muted hover:bg-bg-card">
            <Icon size={17} />
            {label}
          </a>
        ))}
        <div className="flex items-center gap-2 px-3 py-3 mt-2 border-t border-border-subtle">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-pink to-accent-purple" />
          <div>
            <p className="text-xs text-text-primary font-medium">John Carter</p>
            <p className="text-[11px] text-text-muted">Account settings</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
