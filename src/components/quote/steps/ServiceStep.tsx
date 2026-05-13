import type { QuoteFormData, ServiceType } from '@/types/quote';
import { SERVICE_LABELS, SERVICE_DESCRIPTIONS } from '@/data/quote-fields';

const SERVICES = Object.keys(SERVICE_LABELS) as ServiceType[];

interface ServiceStepProps {
  data: QuoteFormData;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

export function ServiceStep({ data, onChange }: ServiceStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-xl font-bold text-black">Select a service</h2>
      <div className="flex flex-col gap-3">
        {SERVICES.map((service) => {
          const selected = data.service === service;
          return (
            <button
              key={service}
              type="button"
              onClick={() => onChange({ service, job_details: {} })}
              className={`w-full rounded-[8px] border-[1.5px] px-5 py-4 text-left transition-all duration-200 ${
                selected
                  ? 'border-brand bg-brand-pale shadow-[0_0_0_3px_rgba(74,124,47,0.12)]'
                  : 'border-[#e5e5e3] bg-white hover:border-brand hover:bg-brand-pale'
              }`}
            >
              <div className="font-semibold text-black">{SERVICE_LABELS[service]}</div>
              <div className="mt-0.5 text-sm text-[#4a4a4a]">{SERVICE_DESCRIPTIONS[service]}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
