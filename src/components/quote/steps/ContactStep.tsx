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
      <input
        className={inputClass}
        placeholder="Full name *"
        required
        value={data.contact_name}
        onChange={(e) => onChange({ contact_name: e.target.value })}
      />
      <input
        className={inputClass}
        type="tel"
        placeholder="Phone number *"
        required
        value={data.contact_phone}
        onChange={(e) => onChange({ contact_phone: e.target.value })}
      />
      <input
        className={inputClass}
        type="email"
        placeholder="Email address *"
        required
        value={data.contact_email}
        onChange={(e) => onChange({ contact_email: e.target.value })}
      />
    </div>
  );
}
