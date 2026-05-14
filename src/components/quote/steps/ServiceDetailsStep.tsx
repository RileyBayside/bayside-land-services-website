import type { QuoteFormData } from '@/types/quote';
import { SERVICE_FIELDS, SERVICE_LABELS } from '@/data/quote-fields';

const inputClass =
  'w-full rounded-[5px] border-[1.5px] border-[#e5e5e3] bg-white px-4 py-[13px] text-[15px] text-black outline-none transition-[border,box-shadow] duration-200 placeholder:text-[#aaa] focus:border-brand focus:shadow-[0_0_0_3px_rgba(74,124,47,0.12)]';

interface ServiceDetailsStepProps {
  data: QuoteFormData;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

export function ServiceDetailsStep({ data, onChange }: ServiceDetailsStepProps) {
  if (!data.service) return null;

  const fields = SERVICE_FIELDS[data.service];
  const details = data.job_details as Record<string, string | number>;

  const updateField = (key: string, value: string | number) => {
    onChange({ job_details: { ...data.job_details, [key]: value } });
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-xl font-bold text-black">
        {SERVICE_LABELS[data.service]} — job details
      </h2>

      {fields.map((field) => (
        <div key={field.key}>
          <label className="mb-2 block text-[15px] font-semibold text-black">{field.label}</label>

          {field.type === 'radio' && field.options && (
            <div className="flex flex-col gap-2">
              {field.options.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-[6px] border-[1.5px] px-4 py-3 transition-all duration-150 ${
                    details[field.key] === opt.value
                      ? 'border-brand bg-brand-pale'
                      : 'border-[#e5e5e3] bg-white hover:border-brand'
                  }`}
                >
                  <input
                    type="radio"
                    name={field.key}
                    value={opt.value}
                    checked={details[field.key] === opt.value}
                    onChange={() => updateField(field.key, opt.value)}
                    className="accent-brand"
                  />
                  <span className="text-sm text-black">{opt.label}</span>
                </label>
              ))}
            </div>
          )}

          {field.type === 'number' && (
            <div className="flex items-center gap-3">
              <input
                type="number"
                className={`${inputClass} max-w-[200px]`}
                placeholder={field.placeholder}
                value={details[field.key] ?? ''}
                onChange={(e) => {
                  const val = e.target.value === '' ? 0 : Number(e.target.value);
                  updateField(field.key, isNaN(val) ? 0 : val);
                }}
                min={0}
              />
              {field.unit && <span className="text-sm text-[#777]">{field.unit}</span>}
            </div>
          )}

          {field.type === 'textarea' && (
            <textarea
              className={`${inputClass} resize-y`}
              placeholder={field.placeholder}
              rows={3}
              value={(details[field.key] as string) ?? ''}
              onChange={(e) => updateField(field.key, e.target.value)}
            />
          )}
        </div>
      ))}

      <div>
        <label className="mb-2 block text-[15px] font-semibold text-black">
          Anything else we should know?{' '}
          <span className="font-normal text-[#999]">(optional)</span>
        </label>
        <textarea
          className={`${inputClass} resize-y`}
          placeholder="Access instructions, timing requirements, anything else..."
          rows={3}
          value={data.notes}
          onChange={(e) => onChange({ notes: e.target.value })}
        />
      </div>
    </div>
  );
}
