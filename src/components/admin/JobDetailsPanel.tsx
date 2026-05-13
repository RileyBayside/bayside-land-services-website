import type { Submission } from '@/types/quote';
import { SERVICE_LABELS } from '@/data/quote-fields';
import { StatusBadge } from './StatusBadge';

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 border-b border-[#f2f2f0] py-3 last:border-0">
      <span className="w-40 shrink-0 text-sm text-[#777]">{label}</span>
      <span className="text-sm text-black">{value}</span>
    </div>
  );
}

function formatJobDetails(details: Record<string, string | number>): { label: string; value: string }[] {
  return Object.entries(details).map(([key, value]) => ({
    label: key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    value: String(value),
  }));
}

export function JobDetailsPanel({ submission }: { submission: Submission }) {
  const details = formatJobDetails(submission.job_details as unknown as Record<string, string | number>);
  const date = new Date(submission.created_at).toLocaleString('en-AU', {
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });

  return (
    <div className="rounded-[10px] border border-[#e5e5e3] bg-white p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-heading text-lg font-bold text-black">Job Details</h2>
        <StatusBadge status={submission.status} />
      </div>

      <div className="mb-5">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#999]">Contact</div>
        <Row label="Name" value={submission.contact_name} />
        <Row label="Phone" value={submission.contact_phone} />
        <Row label="Email" value={submission.contact_email} />
      </div>

      <div className="mb-5">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#999]">Property</div>
        <Row label="Address" value={submission.property_address} />
        <Row label="Size" value={submission.property_size} />
      </div>

      <div className="mb-5">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#999]">
          {SERVICE_LABELS[submission.service] ?? submission.service}
        </div>
        {details.map((d) => (
          <Row key={d.label} label={d.label} value={d.value} />
        ))}
      </div>

      {submission.notes && (
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#999]">Notes</div>
          <p className="text-sm text-[#4a4a4a]">{submission.notes}</p>
        </div>
      )}

      <div className="mt-5 border-t border-[#f2f2f0] pt-4 text-xs text-[#aaa]">
        Submitted {date}
        {submission.quote_number && (
          <> · Quote #{String(submission.quote_number).padStart(4, '0')}</>
        )}
      </div>
    </div>
  );
}
