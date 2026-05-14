import type { QuoteFormData, TerrainType } from '@/types/quote';
import { TERRAIN_OPTIONS } from '@/data/quote-fields';
import { VisualCard } from '../VisualCard';

interface TerrainStepProps {
  data: QuoteFormData;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

export function TerrainStep({ data, onChange }: TerrainStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-xl font-bold text-black">How would you describe the terrain?</h2>
      <p className="text-sm text-[#666]">Choose the option that best matches your site.</p>
      <div className="grid grid-cols-2 gap-3">
        {TERRAIN_OPTIONS.map((opt) => (
          <VisualCard
            key={opt.key}
            label={opt.label}
            description={opt.description}
            image={opt.image}
            selected={data.terrain === opt.key}
            onClick={() => onChange({ terrain: opt.key as TerrainType })}
          />
        ))}
      </div>
    </div>
  );
}
