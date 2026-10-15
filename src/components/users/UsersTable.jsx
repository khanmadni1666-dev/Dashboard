// src/components/users/UsersTable.jsx
import { Pencil, Trash2 } from 'lucide-react';

const users = [
  { name: 'John Carter', email: 'john@corpmail.com', phone: '(984) 897 - 0274', location: 'United States', company: 'Google', status: 'Online', checked: true },
  { name: 'Sophie Moore', email: 'sm@webflow.com', phone: '(292) 486 - 4271', location: 'United Kingdom', company: 'Webflow', status: 'Offline', checked: false },
  { name: 'Matt Cannon', email: 'mc@facebook.com', phone: '(318) 890 - 8890', location: 'Australia', company: 'Facebook', status: 'Online', checked: false },
  { name: 'Graham Hills', email: 'gh@twitter.com', phone: '(340) 621 - 3890', location: 'India', company: 'Twitter', status: 'Offline', checked: true },
  { name: 'Sandy Houston', email: 'sh@youtube.com', phone: '(445) 415 - 3840', location: 'Canada', company: 'YouTube', status: 'Online', checked: false },
  { name: 'Andy Smith', email: 'as@reddit.com', phone: '(504) 450 - 3330', location: 'United States', company: 'Reddit', status: 'Online', checked: true },
  { name: 'Lilly Woods', email: 'lw@spotify.com', phone: '(381) 802 - 1810', location: 'Australia', company: 'Spotify', status: 'Offline', checked: false },
  { name: 'Patrick Mayer', email: 'pm@pinterest.com', phone: '(700) 502 - 5073', location: 'United Kingdom', company: 'Pinterest', status: 'Online', checked: false },
  { name: 'Frances Miller', email: 'fm@twitch.com', phone: '(290) 458 - 5804', location: 'Canada', company: 'Twitch', status: 'Offline', checked: false },
  { name: 'Ernest Houston', email: 'eh@linkedin.com', phone: '(754) 208 - 8815', location: 'India', company: 'LinkedIn', status: 'Offline', checked: false },
];

export default function UsersTable() {
  return (
    <div className="bg-bg-card border border-border-subtle rounded-card p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="text-text-primary font-medium">All Users</p>
        <span className="text-text-muted text-xs">1-10 of 256</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="text-text-muted text-xs border-b border-border-subtle">
              <th className="text-left font-normal pb-2 pr-3"><input type="checkbox" /></th>
              <th className="text-left font-normal pb-2 pr-3">Name</th>
              <th className="text-left font-normal pb-2 pr-3">Phone</th>
              <th className="text-left font-normal pb-2 pr-3">Location</th>
              <th className="text-left font-normal pb-2 pr-3">Company</th>
              <th className="text-left font-normal pb-2 pr-3">Status</th>
              <th className="text-right font-normal pb-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.email} className="border-b border-border-subtle/50 last:border-0">
                <td className="py-2.5 pr-3">
                  <input type="checkbox" defaultChecked={u.checked} className="accent-accent-purple rounded" />
                </td>
                <td className="py-2.5 pr-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex-shrink-0" />
                    <div>
                      <p className="text-text-primary">{u.name}</p>
                      <p className="text-text-muted text-xs">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-2.5 pr-3 text-text-muted whitespace-nowrap">{u.phone}</td>
                <td className="py-2.5 pr-3 text-text-muted whitespace-nowrap">{u.location}</td>
                <td className="py-2.5 pr-3 text-text-muted whitespace-nowrap">{u.company}</td>
                <td className="py-2.5 pr-3">
                  <span className={`text-xs px-2 py-0.5 rounded-md whitespace-nowrap
                    ${u.status === 'Online' ? 'bg-success/10 text-success' : 'bg-text-muted/10 text-text-muted'}`}>
                    ● {u.status}
                  </span>
                </td>
                <td className="py-2.5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Pencil size={14} className="text-text-muted cursor-pointer hover:text-text-primary" />
                    <Trash2 size={14} className="text-text-muted cursor-pointer hover:text-danger" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}