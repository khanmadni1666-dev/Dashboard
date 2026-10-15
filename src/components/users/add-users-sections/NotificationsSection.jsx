// src/components/users/add-users-sections/NotificationsSection.jsx
import { Smartphone, Mail, Info } from 'lucide-react';
import { useState } from 'react';

const generalItems = [
  "I'm mentioned in a message",
  "Someone replies to my message",
  "I'm assigned a task",
  "A task is overdue",
];

const summaryItems = [
  "Daily summary",
  "Weekly summary",
  "Monthly summary",
  "Annually summary",
];

function NotificationRow({ label }) {
  const [inApp, setInApp] = useState(true);
  const [email, setEmail] = useState(true);

  return (
    <div className="flex items-center justify-between py-3 border-b border-border-subtle/50 last:border-0">
      <div className="flex items-center gap-2 text-text-primary text-sm">
        {label} <Info size={13} className="text-text-muted" />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setInApp(!inApp)}
          className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md
            ${inApp ? 'bg-accent-purple text-white' : 'bg-bg-main text-text-muted border border-border-subtle'}`}
        >
          <Smartphone size={12} /> In-app
        </button>
        <button
          onClick={() => setEmail(!email)}
          className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md
            ${email ? 'bg-accent-purple text-white' : 'bg-bg-main text-text-muted border border-border-subtle'}`}
        >
          <Mail size={12} /> Email
        </button>
      </div>
    </div>
  );
}

export default function NotificationsSection() {
  return (
    <div className="flex flex-col gap-6">

      <div className="bg-bg-card border border-border-subtle rounded-card p-5">
        <p className="text-text-primary font-medium mb-1">General notifications</p>
        <p className="text-text-muted text-sm mb-4">Lorem ipsum dolor sit amet consectetur.</p>
        <div>
          {generalItems.map((item) => (
            <NotificationRow key={item} label={item} />
          ))}
        </div>
      </div>

      <div className="bg-bg-card border border-border-subtle rounded-card p-5">
        <p className="text-text-primary font-medium mb-1">Summary notifications</p>
        <p className="text-text-muted text-sm mb-4">Lorem ipsum dolor sit amet consectetur.</p>
        <div>
          {summaryItems.map((item) => (
            <NotificationRow key={item} label={item} />
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-gradient-to-r from-accent-purple to-accent-pink text-white text-sm font-medium px-6 py-2.5 rounded-lg">
          Add User
        </button>
      </div>

    </div>
  );
}