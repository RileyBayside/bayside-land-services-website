import type { QuoteFormData } from '@/types/quote';
import { AddressAutocomplete } from '../AddressAutocomplete';

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
      <div>
        <AddressAutocomplete
          onChange={(value) => onChange({ property_address: value })}
          placeholder="Start typing an address *"
        />
        <p className="mt-1.5 text-xs text-[#999]">
          Select from the suggestions or type a suburb if you don&apos;t have the full address.
        </p>
      </div>
    </div>
  );
}
