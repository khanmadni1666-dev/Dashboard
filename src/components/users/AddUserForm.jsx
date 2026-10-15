// src/components/users/AddUserForm.jsx
import { useState } from 'react';
import PersonalInfoSection from './add-users-sections/PersonalInfoSection';
import TeamSection from './add-users-sections/TeamSection';
import BillingSection from './add-users-sections/BillingSection';
import NotificationsSection from './add-users-sections/NotificationsSection';

const navLinks = ['Personal Information', 'Team', 'Billing', 'Notifications'];

export default function AddUserForm() {
  const [activeSection, setActiveSection] = useState('Personal Information');

  return (
    <div>
      <h1 className="text-text-primary text-xl font-semibold mb-6">Add User</h1>

      <div className="flex flex-col lg:flex-row gap-6">

        <div className="lg:w-56 flex-shrink-0">
          <p className="text-text-muted text-xs uppercase mb-3">Credentials</p>
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left
                  ${activeSection === item
                    ? 'bg-accent-purple/10 text-accent-purple'
                    : 'text-text-muted hover:bg-bg-card'}`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          {activeSection === 'Personal Information' && <PersonalInfoSection />}
          {activeSection === 'Team' && <TeamSection />}
          {activeSection === 'Billing' && <BillingSection />}
          {activeSection === 'Notifications' && <NotificationsSection />}
        </div>

      </div>
    </div>
  );
}