'use client';

import type { SubmissionStatus, ServiceType } from '@/types/quote';
import { SERVICE_LABELS } from '@/data/quote-fields';

const STATUSES: SubmissionStatus[] = ['new', 'quoted', 'won', 'lost'];
const SERVICES = Object.keys(SERVICE_LABELS) as ServiceType[];

interface FilterBarProps {
  statusFilter: SubmissionStatus | 'all';
  serviceFilter: ServiceType | 'all';
  onStatusChange: (v: SubmissionStatus | 'all') => void;
  onServiceChange: (v: ServiceType | 'all') => void;
}

const selectClass =
  'rounded-[5px] border border-[#e5e5e3] bg-white px-3 py-2 text-sm font-medium text-black outline-none transition-[border] duration-200 focus:border-brand cursor-pointer';

export function FilterBar({ statusFilter, serviceFilter, onStatusChange, onServiceChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <select
        aria-label="Filter by status"
        className={selectClass}
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value as SubmissionStatus | 'all')}
      >
        <option value="all">All statuses</option>
        {STATUSES.map((s) => (
          <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
        ))}
      </select>
      <select
        aria-label="Filter by service"
        className={selectClass}
        value={serviceFilter}
        onChange={(e) => onServiceChange(e.target.value as ServiceType | 'all')}
      >
        <option value="all">All services</option>
        {SERVICES.map((s) => (
          <option key={s} value={s}>{SERVICE_LABELS[s]}</option>
        ))}
      </select>
    </div>
  );
}
