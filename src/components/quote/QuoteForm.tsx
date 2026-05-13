'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import type { QuoteFormData } from '@/types/quote';
import { ProgressBar } from './ProgressBar';
import { ContactStep } from './steps/ContactStep';
import { PropertyStep } from './steps/PropertyStep';
import { ServiceStep } from './steps/ServiceStep';
import { JobDetailsStep } from './steps/JobDetailsStep';

const STEPS = ['Contact', 'Property', 'Service', 'Details'];

const EMPTY_FORM: QuoteFormData = {
  contact_name: '',
  contact_email: '',
  contact_phone: '',
  property_address: '',
  property_size: '',
  service: '',
  job_details: {},
  notes: '',
};

function isStepValid(step: number, data: QuoteFormData): boolean {
  if (step === 1) return !!(data.contact_name && data.contact_email && data.contact_phone);
  if (step === 2) return !!(data.property_address && data.property_size);
  if (step === 3) return !!data.service;
  return true;
}

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<QuoteFormData>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const update = (updates: Partial<QuoteFormData>) => setForm((f) => ({ ...f, ...updates }));

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

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
      <ProgressBar currentStep={step} totalSteps={4} labels={STEPS} />

      {step === 1 && <ContactStep data={form} onChange={update} />}
      {step === 2 && <PropertyStep data={form} onChange={update} />}
      {step === 3 && <ServiceStep data={form} onChange={update} />}
      {step === 4 && <JobDetailsStep data={form} onChange={update} />}

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
        {step < 4 ? (
          <button
            type="button"
            onClick={next}
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
            {status === 'submitting' ? 'Sending...' : 'Submit Quote Request →'}
          </button>
        )}
      </div>
    </div>
  );
}
