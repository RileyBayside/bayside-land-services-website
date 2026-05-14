'use client';

import { useState, useRef } from 'react';
import { Check } from 'lucide-react';
import type { QuoteFormData } from '@/types/quote';
import { SERVICE_FIELDS } from '@/data/quote-fields';
import { ProgressBar } from './ProgressBar';
import { ContactStep } from './steps/ContactStep';
import { PropertyStep } from './steps/PropertyStep';
import { ServiceStep } from './steps/ServiceStep';
import { ServiceDetailsStep } from './steps/ServiceDetailsStep';
import { AreaStep } from './steps/AreaStep';
import { TerrainStep } from './steps/TerrainStep';
import { ConfirmStep } from './steps/ConfirmStep';

const STEPS = ['Contact', 'Property', 'Service', 'Details', 'Area', 'Terrain', 'Confirm'];
const TOTAL = STEPS.length;

const EMPTY_FORM: QuoteFormData = {
  contact_name: '',
  contact_email: '',
  contact_phone: '',
  property_address: '',
  property_area: '',
  terrain: '',
  service: '',
  job_details: {},
  notes: '',
};

function isStepValid(step: number, data: QuoteFormData): boolean {
  if (step === 1) {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact_email);
    const phoneOk = data.contact_phone.replace(/\D/g, '').length >= 8;
    return !!(data.contact_name && emailOk && phoneOk);
  }
  if (step === 2) return !!data.property_address;
  if (step === 3) return !!data.service;
  if (step === 4 && data.service) {
    const fields = SERVICE_FIELDS[data.service];
    const details = data.job_details as Record<string, string | number>;
    return fields.every(
      (f) =>
        !f.required ||
        (details[f.key] !== undefined && details[f.key] !== '' && details[f.key] !== 0),
    );
  }
  if (step === 5) return !!data.property_area;
  if (step === 6) return !!data.terrain;
  if (step === 7) return true;
  return true;
}

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<QuoteFormData>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const rafRef = useRef<number | null>(null);

  // Called synchronously inside click handlers — before React re-renders.
  // startTime is captured at click time (not first-frame time) so the animation
  // accounts for the ~16ms before the first RAF fires, making it feel instant.
  function scrollUp() {
    const TARGET = 110;
    const DURATION = 340;

    if (window.scrollY <= TARGET) return;

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    const startY = window.scrollY;
    const distance = TARGET - startY;
    const startTime = performance.now(); // lock in at click time, not first frame

    function tick(now: number) {
      const t = Math.min((now - startTime) / DURATION, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // easeOutExpo
      window.scrollTo(0, startY + distance * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    }

    rafRef.current = requestAnimationFrame(tick);
  }

  // On hover: begin a slow drift toward the target so most of the
  // distance is covered before the user clicks.
  function preScroll() {
    const TARGET = 110;
    if (window.scrollY <= TARGET + 40) return; // close enough — don't bother

    if (rafRef.current !== null) return; // don't interrupt a click-scroll

    const startY = window.scrollY;
    const distance = TARGET - startY;
    const startTime = performance.now();
    const HOVER_DURATION = 600; // slow drift — feels like passive, gentle movement

    function tick(now: number) {
      // Stop if a click-scroll has taken over
      if (rafRef.current === null && now > startTime + 16) return;
      const t = Math.min((now - startTime) / HOVER_DURATION, 1);
      const eased = t * t; // easeInQuad — starts very gently
      window.scrollTo(0, startY + distance * eased * 0.6); // only drift 60% of the way
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const update = (updates: Partial<QuoteFormData>) => setForm((f) => ({ ...f, ...updates }));
  const next = () => { scrollUp(); setStep((s) => Math.min(s + 1, TOTAL)); };
  const back = () => { scrollUp(); setStep((s) => Math.max(s - 1, 1)); };
  const goTo = (s: number) => { scrollUp(); setStep(s); };

  const submit = async () => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-[10px] border border-[#e5e5e3] bg-white px-8 py-14 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-pale">
          <Check size={28} className="text-brand" />
        </div>
        <h2 className="mb-2 font-heading text-[22px] font-bold text-black">Quote Request Sent</h2>
        <p className="text-[#777]">
          Thanks — we&apos;ll review your details and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[10px] border border-[#e5e5e3] bg-white px-7 py-8">
      <ProgressBar currentStep={step} totalSteps={TOTAL} labels={STEPS} />

      <div key={step} className="animate-step-in">
        {step === 1 && <ContactStep data={form} onChange={update} />}
        {step === 2 && <PropertyStep data={form} onChange={update} />}
        {step === 3 && <ServiceStep data={form} onChange={update} />}
        {step === 4 && <ServiceDetailsStep data={form} onChange={update} />}
        {step === 5 && <AreaStep data={form} onChange={update} />}
        {step === 6 && <TerrainStep data={form} onChange={update} />}
        {step === 7 && <ConfirmStep data={form} onEdit={goTo} />}
      </div>

      {status === 'error' && (
        <p className="mt-4 text-sm text-red-500">Something went wrong. Please try again.</p>
      )}

      <div className="mt-8 flex gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={back}
            className="rounded-[5px] border border-[#e5e5e3] bg-white px-6 py-[13px] text-[15px] font-semibold text-black transition-all duration-200 hover:border-brand"
          >
            Back
          </button>
        )}
        {step < TOTAL ? (
          <button
            type="button"
            onClick={next}
            onMouseEnter={preScroll}
            disabled={!isStepValid(step, form)}
            className="ml-auto inline-flex cursor-pointer items-center gap-2 rounded-[5px] border-none bg-brand px-8 py-[13px] text-[15px] font-semibold text-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_8px_20px_rgba(74,124,47,0.25)] disabled:pointer-events-none disabled:opacity-50"
          >
            Next →
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={status === 'submitting'}
            className="ml-auto inline-flex cursor-pointer items-center gap-2 rounded-[5px] border-none bg-brand px-8 py-[13px] text-[15px] font-semibold text-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_8px_20px_rgba(74,124,47,0.25)] disabled:pointer-events-none disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Quote Request →'}
          </button>
        )}
      </div>
    </div>
  );
}
