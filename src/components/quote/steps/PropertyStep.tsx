import type { QuoteFormData } from '@/types/quote';

const inputClass =
  'w-full rounded-[5px] border-[1.5px] border-[#e5e5e3] bg-white px-4 py-[13px] text-[15px] text-black outline-none transition-[border,box-shadow] duration-200 placeholder:text-[#aaa] focus:border-brand focus:shadow-[0_0_0_3px_rgba(74,124,47,0.12)]';

interface PropertyStepProps {
  data: QuoteFormData;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

export function PropertyStep({ data, onChange }: PropertyStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-xl font-bold text-black">The property</h2>
      <input
        className={inputClass}
        placeholder="Street address or suburb *"
        required
        value={data.property_address}
        onChange={(e) => onChange({ property_address: e.target.value })}
      />
      <div>
        <input
          className={inputClass}
          placeholder="Approximate size (e.g. 2 ha, 500 sqm, not sure) *"
          required
          value={data.property_size}
          onChange={(e) => onChange({ property_size: e.target.value })}
        />
        <p className="mt-1.5 text-xs text-[#999]">
          An estimate is fine — we use this to give you a ballpark, not a fixed price.
        </p>
      </div>
    </div>
  );
}
