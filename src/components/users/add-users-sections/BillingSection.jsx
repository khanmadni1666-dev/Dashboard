// src/components/users/add-users-sections/BillingSection.jsx
import { CreditCard, X, Plus, User, Home, MapPin, Mail } from 'lucide-react';
import FormRow from '../FormRow';

const cards = [
  { type: 'Visa', last4: '5062', expiry: '12/26', color: 'bg-accent-blue' },
  { type: 'Mastercard', last4: '5062', expiry: '01/26', color: 'bg-orange-500' },
  { type: 'American Express', last4: '5062', expiry: '02/26', color: 'bg-text-muted' },
];

export default function BillingSection() {
  return (
    <div className="flex flex-col gap-6">

      <div className="bg-bg-card border border-border-subtle rounded-card p-5">
        <p className="text-text-primary font-medium mb-1">Payment methods</p>
        <p className="text-text-muted text-sm mb-5">Lorem ipsum dolor sit amet consectetur.</p>

        <div className="flex flex-col gap-3">
          {cards.map((c) => (
            <div key={c.type} className="flex items-center justify-between bg-bg-main border border-border-subtle rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-6 rounded flex items-center justify-center ${c.color}`}>
                  <CreditCard size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-text-primary text-sm">{c.type} •••• {c.last4}</p>
                  <p className="text-text-muted text-xs">Expires on {c.expiry}</p>
                </div>
              </div>
              <button>
                <X size={16} className="text-text-muted hover:text-danger" />
              </button>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-2 text-accent-purple text-sm mt-4">
          <Plus size={15} /> Add a new payment method
        </button>
      </div>

      <div className="bg-bg-card border border-border-subtle rounded-card p-5">
        <p className="text-text-primary font-medium mb-1">Billing address</p>
        <p className="text-text-muted text-sm mb-5">Lorem ipsum dolor sit amet consectetur.</p>

        <div className="flex flex-col gap-4">
          <FormRow icon={User} label="Full name">
            <input defaultValue="John Carter" className="form-input" />
          </FormRow>
          <FormRow icon={Home} label="Address">
            <input defaultValue="601 4th St #103" className="form-input" />
          </FormRow>
          <FormRow icon={MapPin} label="State">
            <input defaultValue="Los Angeles" className="form-input" />
          </FormRow>
          <FormRow icon={Mail} label="Zip code">
            <input defaultValue="90301" className="form-input" />
          </FormRow>
        </div>
      </div>

    </div>
  );
}
