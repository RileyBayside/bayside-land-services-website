import type { QuoteFormData, ServiceType } from '@/types/quote';
import { SERVICE_LABELS, SERVICE_DESCRIPTIONS, SERVICE_IMAGES } from '@/data/quote-fields';
import { VisualCard } from '../VisualCard';

const SERVICES = Object.keys(SERVICE_LABELS) as ServiceType[];

interface ServiceStepProps {
  data: QuoteFormData;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

export function ServiceStep({ data, onChange }: ServiceStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-xl font-bold text-black">What service do you need?</h2>
      <div className="grid grid-cols-2 gap-3">
        {SERVICES.map((service) => (
          <VisualCard
            key={service}
            label={SERVICE_LABELS[service]}
            description={SERVICE_DESCRIPTIONS[service]}
            image={SERVICE_IMAGES[service]}
            selected={data.service === service}
            onClick={() => onChange({ service, job_details: {} })}
          />
        ))}
      </div>
    </div>
  );
}
