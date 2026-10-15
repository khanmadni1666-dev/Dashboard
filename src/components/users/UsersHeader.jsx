// src/components/users/UsersHeader.jsx
import { Search, Plus, Users as UsersIcon, UserPlus, Trophy, UserCircle } from 'lucide-react';
import UserStatCard from './UserStatCard';

export default function UsersHeader({ onNavigate }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-text-primary text-xl font-semibold">Users</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              placeholder="Search for.."
              className="bg-bg-card border border-border-subtle rounded-lg
                         pl-9 pr-3 py-2 text-sm text-text-primary placeholder:text-text-muted
                         focus:outline-none focus:ring-1 focus:ring-accent-purple"
            />
          </div>
          <button onClick={() => onNavigate('AddUser')}
                   className="flex items-center gap-2 bg-gradient-to-r from-accent-purple to-accent-pink 
                   text-white text-sm font-medium px-4 py-2 rounded-lg">
                   <Plus size={16} /> Add user
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <UserStatCard icon={UsersIcon} iconBg="bg-accent-purple" label="Total Users" value="350" />
        <UserStatCard icon={UserPlus} iconBg="bg-accent-blue" label="New Users" value="15" />
        <UserStatCard icon={Trophy} iconBg="bg-success" label="Top Users" value="200" />
        <UserStatCard icon={UserCircle} iconBg="bg-accent-cyan" label="Other Users" value="35" />
      </div>
    </div>
  );
}