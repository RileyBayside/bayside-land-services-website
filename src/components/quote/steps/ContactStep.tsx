import type { QuoteFormData } from '@/types/quote';

const inputClass =
  'w-full rounded-[5px] border-[1.5px] border-[#e5e5e3] bg-white px-4 py-[13px] text-[15px] text-black outline-none transition-[border,box-shadow] duration-200 placeholder:text-[#aaa] focus:border-brand focus:shadow-[0_0_0_3px_rgba(74,124,47,0.12)]';

interface ContactStepProps {
  data: QuoteFormData;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

export function ContactStep({ data, onChange }: ContactStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-xl font-bold text-black">Your details</h2>
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-[#555]">
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          className={inputClass}
          placeholder="e.g. Riley Briggs"
          required
          value={data.contact_name}
          onChange={(e) => onChange({ contact_name: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-[#555]">
          Phone number <span className="text-red-500">*</span>
        </label>
        <input
          className={inputClass}
          type="tel"
          placeholder="e.g. 0412 345 678"
          required
          value={data.contact_phone}
          onChange={(e) => onChange({ contact_phone: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-[#555]">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          className={inputClass}
          type="email"
          placeholder="e.g. riley@example.com"
          required
          value={data.contact_email}
          onChange={(e) => onChange({ contact_email: e.target.value })}
        />
      </div>
    </div>
  );
}
