'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { BUSINESS, STATS } from '@/data/content';

const FORMSPREE_ID = 'xyzgobrl';

const inputClass =
  'w-full rounded-[4px] border-[1.5px] border-white/20 bg-white/10 px-3.5 py-[11px] text-[14px] text-white outline-none placeholder:text-white/50 focus:border-brand-light focus:bg-white/15 transition-all duration-200';

export function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
        setForm({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
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
    <section id="top" className="relative min-h-screen bg-[#111]">
      <div className="relative flex min-h-screen flex-col md:flex-row">

        {/* Left — photo + headline (60%) */}
        <div className="relative flex-1 md:w-[60%]">
          <Image
            src="/images/hero.jpg"
            alt="Forestry mulching in action"
            fill
            priority
            className="object-cover brightness-[0.35] saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.5)_0%,rgba(17,17,17,0.1)_50%,rgba(17,17,17,0.6)_100%)] md:bg-[linear-gradient(to_right,rgba(17,17,17,0)_60%,rgba(17,17,17,0.9)_100%),linear-gradient(180deg,rgba(17,17,17,0.5)_0%,rgba(17,17,17,0.1)_50%,rgba(17,17,17,0.65)_100%)]" />

          <div className="relative z-10 flex h-full flex-col justify-center px-8 pt-[120px] pb-10 md:px-12 md:pt-[100px]">
            <div className="animate-fade-up mb-6 inline-block self-start rounded-[3px] border border-brand/30 bg-brand/15 px-3.5 py-[5px] text-[11px] font-bold tracking-[2.5px] uppercase text-white/80">
              Forestry Mulching Specialists &middot; {BUSINESS.region}
            </div>

            <h1
              className="animate-fade-up font-heading text-[clamp(34px,5.5vw,60px)] font-bold leading-[1.1] text-white"
              style={{ animationDelay: '0.1s' }}
            >
              Mulch It.<br />Don&apos;t Burn It.<br />
              <span className="text-brand-light">One Pass. Done.</span>
            </h1>

            <p
              className="animate-fade-up mt-5 max-w-[460px] text-[clamp(15px,2vw,18px)] leading-[1.75] text-white/70"
              style={{ animationDelay: '0.2s' }}
            >
              ISO-certified forestry mulching for councils, developers, and landowners across South-East Queensland. Dense scrub to fine mulch in a single pass — no burning, no green waste removal.
            </p>

            <div
              className="animate-fade-up mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: '0.3s' }}
            >
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex cursor-pointer items-center gap-2 rounded-[5px] border-[1.5px] border-white/30 bg-transparent px-7 py-[13px] text-[14px] font-semibold text-white transition-all duration-250 hover:border-white/60 hover:bg-white/[0.08]"
              >
                Our Services
              </button>
            </div>

            {/* Stats — bottom of photo column, desktop only */}
            <div className="mt-auto pt-12 hidden md:block">
              <div className="grid grid-cols-4 gap-4 border-t border-white/[0.08] pt-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-heading text-[32px] font-bold leading-none text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 text-[10px] font-semibold tracking-[1.5px] uppercase text-white/55">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right — quote form card (40%) */}
        <div className="relative z-10 flex items-center bg-[#111111]/95 px-8 py-12 md:w-[40%] md:px-10 md:py-0">
          <div className="w-full max-w-[400px] mx-auto">
            <div className="mb-1 text-[11px] font-bold tracking-[3px] uppercase text-brand-light">
              Free Quote
            </div>
            <h2 className="mb-1.5 font-heading text-[clamp(22px,3vw,30px)] font-bold text-white">
              Get in Touch
            </h2>
            <p className="mb-6 text-[13px] leading-[1.6] text-white/55">
              Tell us about your project and we&apos;ll get back to you promptly.
            </p>

            {status === 'sent' ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand/20">
                  <Check size={24} className="text-brand-light" />
                </div>
                <h3 className="mb-1 font-heading text-[20px] font-bold text-white">Message Sent</h3>
                <p className="text-[13px] text-white/55">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-3">
                <input
                  className={inputClass}
                  placeholder="Your name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
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
                    placeholder="Email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <textarea
                  className={`${inputClass} resize-y`}
                  placeholder="Tell us about your project..."
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {status === 'error' && (
                  <p className="text-[13px] text-red-400">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-1 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[5px] border-none bg-brand px-8 py-[14px] text-[14px] font-semibold text-white transition-all duration-250 hover:bg-brand-dark hover:shadow-[0_8px_20px_rgba(74,124,47,0.35)] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message →'}
                </button>
                <p className="text-center text-[12px] text-white/35">
                  Or call us: {BUSINESS.phone}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Mobile stats strip */}
      <div className="bg-[#1a1a1a] px-6 py-6 md:hidden">
        <div className="grid grid-cols-4 gap-2">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-[26px] font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-[9px] font-semibold tracking-[1px] uppercase text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
