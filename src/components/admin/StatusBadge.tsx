import type { SubmissionStatus } from '@/types/quote';

const BADGE_STYLES: Record<SubmissionStatus, string> = {
  new: 'bg-blue-50 text-blue-700 border-blue-200',
  quoted: 'bg-amber-50 text-amber-700 border-amber-200',
  won: 'bg-green-50 text-green-700 border-green-200',
  lost: 'bg-red-50 text-red-700 border-red-200',
};

const BADGE_LABELS: Record<SubmissionStatus, string> = {
  new: 'New',
  quoted: 'Quoted',
  won: 'Won',
  lost: 'Lost',
};

export function StatusBadge({ status }: { status: SubmissionStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${BADGE_STYLES[status]}`}
    >
      {BADGE_LABELS[status]}
    </span>
  );
}
