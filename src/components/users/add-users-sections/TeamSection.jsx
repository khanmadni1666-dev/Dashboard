// src/components/users/add-user-sections/TeamSection.jsx
import { Phone, Briefcase, MapPin, Mail } from 'lucide-react';
import FormRow from '../FormRow';

export default function TeamSection() {
  return (
    <div className="bg-bg-card border border-border-subtle rounded-card p-5">
      <p className="text-text-primary font-medium mb-1">Team information</p>
      <p className="text-text-muted text-sm mb-5">Lorem ipsum dolor sit amet consectetur.</p>

      <div className="flex flex-col gap-4">
        <FormRow icon={Phone} label="Team Name">
          <input defaultValue="(123) 456 - 7890" className="form-input" />
        </FormRow>

        <FormRow icon={Briefcase} label="Rank">
          <select className="form-input">
            <option>CEO & Founder</option>
            <option>Manager</option>
            <option>Developer</option>
            <option>Designer</option>
          </select>
        </FormRow>

        <FormRow icon={MapPin} label="Office">
          <input defaultValue="New York, NY" className="form-input" />
        </FormRow>

        <FormRow icon={Mail} label="mail">
          <input defaultValue="dashdark.com" className="form-input" />
        </FormRow>
      </div>
    </div>
  );
}