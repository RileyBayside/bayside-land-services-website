import Image from 'next/image';
import { Pencil } from 'lucide-react';
import type { QuoteFormData } from '@/types/quote';
import {
  SERVICE_LABELS,
  SERVICE_IMAGES,
  AREA_OPTIONS,
  TERRAIN_OPTIONS,
} from '@/data/quote-fields';

const AREA_LABEL: Record<string, string> = Object.fromEntries(
  AREA_OPTIONS.map((o) => [o.key, o.label]),
);
const TERRAIN_LABEL: Record<string, string> = Object.fromEntries(
  TERRAIN_OPTIONS.map((o) => [o.key, o.label]),
);

function formatKey(key: string): string {
  return key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function Section({
  title,
  step,
  onEdit,
  children,
}: {
  title: string;
  step: number;
  onEdit: (step: number) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[#f0f0ee] pb-5 last:border-0 last:pb-0">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#999]">{title}</span>
        <button
          type="button"
          onClick={() => onEdit(step)}
          className="flex items-center gap-1 text-[12px] font-semibold text-brand hover:underline"
        >
          <Pencil size={11} />
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 py-1">
      <span className="w-36 shrink-0 text-sm text-[#888]">{label}</span>
      <span className="text-sm text-black">{value}</span>
    </div>
  );
}

interface ConfirmStepProps {
  data: QuoteFormData;
  onEdit: (step: number) => void;
}

export function ConfirmStep({ data, onEdit }: ConfirmStepProps) {
  const details = data.job_details as Record<string, string | number>;

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-heading text-xl font-bold text-black">Review your quote request</h2>

      <Section title="Your Details" step={1} onEdit={onEdit}>
        <Row label="Name" value={data.contact_name} />
        <Row label="Phone" value={data.contact_phone} />
        <Row label="Email" value={data.contact_email} />
      </Section>

      <Section title="Property" step={2} onEdit={onEdit}>
        <Row label="Address" value={data.property_address} />
      </Section>

      <Section title="Service" step={3} onEdit={onEdit}>
        <div className="flex items-center gap-3">
          {data.service && (
            <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-[6px]">
              <Image
                src={SERVICE_IMAGES[data.service]}
                alt={SERVICE_LABELS[data.service]}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
          )}
          <span className="text-sm font-semibold text-black">
            {data.service ? SERVICE_LABELS[data.service] : '—'}
          </span>
        </div>
      </Section>

      <Section title="Job Details" step={4} onEdit={onEdit}>
        {Object.entries(details).map(([key, value]) => (
          <Row key={key} label={formatKey(key)} value={String(value)} />
        ))}
        {data.notes && <Row label="Notes" value={data.notes} />}
      </Section>

      <Section title="Area" step={5} onEdit={onEdit}>
        <span className="text-sm text-black">
          {data.property_area ? AREA_LABEL[data.property_area] : '—'}
        </span>
      </Section>

      <Section title="Terrain" step={6} onEdit={onEdit}>
        <div className="flex items-center gap-3">
          {data.terrain && (
            <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-[6px]">
              <Image
                src={TERRAIN_OPTIONS.find((o) => o.key === data.terrain)?.image ?? ''}
                alt={TERRAIN_LABEL[data.terrain] ?? ''}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
          )}
          <span className="text-sm font-semibold text-black">
            {data.terrain ? TERRAIN_LABEL[data.terrain] : '—'}
          </span>
        </div>
      </Section>
    </div>
  );
}
