// src/components/users/add-user-sections/PersonalInfoSection.jsx
import { User, Mail, Image, Briefcase, Phone, MapPin, Globe } from 'lucide-react';
import FormRow from '../FormRow';

export default function PersonalInfoSection() {
  return (
    <div className="flex flex-col gap-6">

      <div className="bg-bg-card border border-border-subtle rounded-card p-5">
        <p className="text-text-primary font-medium mb-1">Personal information</p>
        <p className="text-text-muted text-sm mb-5">Lorem ipsum dolor sit amet consectetur.</p>

        <div className="flex flex-col gap-4">
          <FormRow icon={User} label="Full name">
            <input defaultValue="John Carter" className="form-input" />
          </FormRow>

          <FormRow icon={Mail} label="Email address">
            <input defaultValue="john@dashdark.com" className="form-input" />
          </FormRow>

          <FormRow icon={Image} label="Photo">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink" />
              <button className="text-danger text-xs">Delete</button>
              <div className="text-text-muted text-xs">
                Click to upload or drag and drop<br/>SVG, PNG, JPG or GIF (max. 800x400px)
              </div>
            </div>
          </FormRow>

          <FormRow icon={Briefcase} label="Short description">
            <textarea placeholder="Write a short bio about you.." className="form-input h-20 resize-none" />
          </FormRow>
        </div>
      </div>

      <div className="bg-bg-card border border-border-subtle rounded-card p-5">
        <p className="text-text-primary font-medium mb-1">Basic information</p>
        <p className="text-text-muted text-sm mb-5">Lorem ipsum dolor sit amet consectetur.</p>

        <div className="flex flex-col gap-4">
          <FormRow icon={Phone} label="Phone">
            <input defaultValue="(123) 456 - 7890" className="form-input" />
          </FormRow>
          <FormRow icon={Briefcase} label="Position">
            <input defaultValue="CEO & Founder" className="form-input" />
          </FormRow>
          <FormRow icon={MapPin} label="Location">
            <input defaultValue="New York, NY" className="form-input" />
          </FormRow>
          <FormRow icon={Globe} label="Website">
            <input defaultValue="dashdark.com" className="form-input" />
          </FormRow>
        </div>
      </div>

    </div>
  );
}