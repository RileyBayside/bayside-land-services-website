'use client';

import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { BUSINESS } from '@/data/content';
import { MapPin, Phone, Mail, Check } from 'lucide-react';

const FORMSPREE_ID = 'xyzgobrl';

const CONTACT_DETAILS = [
  { icon: MapPin, text: BUSINESS.address },
  { icon: Phone, text: BUSINESS.phone },
  { icon: Mail, text: BUSINESS.email },
];

const SERVICES_LIST = [
  'Open Space Management',
  'Slashing',
  'Forestry Mulching',
  'Land Clearing',
  'Firebreak Maintenance',
  'Weed Control & Spraying',
  'Contract Management',
  'Mulch, Gravel & Stone',
  'Other / General Enquiry',
];

const inputClass =
  'w-full rounded-[5px] border-[1.5px] border-[#e5e5e3] bg-white px-4 py-[13px] text-[15px] text-black outline-none transition-[border,box-shadow] duration-200 placeholder:text-[#aaa] focus:border-brand focus:shadow-[0_0_0_3px_rgba(74,124,47,0.12)]';

export function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '', service: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', company: '', phone: '', email: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="bg-[#fafafa] px-6 py-24">
      <div className="mx-auto grid max-w-[1140px] gap-14 max-md:grid-cols-1 md:grid-cols-2">
        {/* Left — info */}
        <FadeIn>
          <div className="text-xs font-bold tracking-[3px] uppercase text-brand">Get In Touch</div>
          <div className="mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
          <h2 className="mb-[18px] font-heading text-[clamp(28px,4vw,42px)] font-bold leading-[1.12] text-black">
            Request a Quote
          </h2>
          <p className="mb-9 text-base leading-[1.75] text-[#4a4a4a]">
            Whether you&apos;re a council, government agency, or commercial client — we&apos;d love to discuss how Bayside Land Services can support your land management needs.
          </p>
          <div className="flex flex-col gap-[18px]">
            {CONTACT_DETAILS.map((item) => (
              <div key={item.text} className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-brand-pale">
                  <item.icon size={17} className="text-brand" />
                </div>
                <span className="text-[15px] text-black">{item.text}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.12}>
          <div className="rounded-[10px] border border-[#e5e5e3] bg-white px-7 py-8">
            {status === 'sent' ? (
              <div className="py-14 text-center">
                <div className="mx-auto mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-pale">
                  <Check size={28} className="text-brand" />
                </div>
                <h3 className="mb-1.5 font-heading text-[22px] font-bold text-black">Message Sent</h3>
                <p className="text-[#777]">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 className="mb-[22px] font-heading text-xl font-bold text-black">
                  Send us a message
                </h3>
                <div className="flex flex-col gap-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      className={inputClass}
                      placeholder="Your name *"
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      className={inputClass}
                      placeholder="Company (optional)"
                      name="company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      className={inputClass}
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    <input
                      className={inputClass}
                      type="email"
                      placeholder="Email *"
                      name="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <select
                    className={`${inputClass} cursor-pointer`}
                    name="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <textarea
                    className={`${inputClass} resize-y`}
                    placeholder="Tell us about your project or requirements..."
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  {status === 'error' && (
                    <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[5px] border-none bg-brand px-8 py-[15px] text-[15px] font-semibold tracking-[0.2px] text-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_8px_20px_rgba(74,124,47,0.25)] disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message →'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
