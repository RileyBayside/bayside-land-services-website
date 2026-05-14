import type { QuoteFormData } from '@/types/quote';
import { AREA_OPTIONS } from '@/data/quote-fields';
import { VisualCard } from '../VisualCard';

const AREA_ICONS: Record<string, React.ReactNode> = {
  '500_2000': (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="14" y="14" width="16" height="16" rx="2" stroke="#4a7c2f" strokeWidth="2" />
    </svg>
  ),
  '2000_1ha': (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="28" height="28" rx="2" stroke="#4a7c2f" strokeWidth="2" />
    </svg>
  ),
  '1ha_5ha': (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="38" height="38" rx="2" stroke="#4a7c2f" strokeWidth="2" />
      <line x1="22" y1="3" x2="22" y2="41" stroke="#4a7c2f" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="3" y1="22" x2="41" y2="22" stroke="#4a7c2f" strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  ),
  '5ha_plus': (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="38" height="38" rx="2" stroke="#4a7c2f" strokeWidth="2" />
      <line x1="15" y1="3" x2="15" y2="41" stroke="#4a7c2f" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="29" y1="3" x2="29" y2="41" stroke="#4a7c2f" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="3" y1="15" x2="41" y2="15" stroke="#4a7c2f" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="3" y1="29" x2="41" y2="29" stroke="#4a7c2f" strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  ),
};

interface AreaStepProps {
  data: QuoteFormData;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

export function AreaStep({ data, onChange }: AreaStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-xl font-bold text-black">Size of area to be serviced</h2>
      <p className="text-sm text-[#666]">Select the closest range — an estimate is fine.</p>
      <div className="grid grid-cols-2 gap-3">
        {AREA_OPTIONS.map((opt) => (
          <VisualCard
            key={opt.key}
            label={opt.label}
            description={opt.description}
            icon={AREA_ICONS[opt.key]}
            selected={data.property_area === opt.key}
            onClick={() => onChange({ property_area: opt.key })}
          />
        ))}
      </div>
    </div>
  );
}
