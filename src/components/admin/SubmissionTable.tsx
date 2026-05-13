'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Submission, SubmissionStatus, ServiceType } from '@/types/quote';
import { SERVICE_LABELS } from '@/data/quote-fields';
import { StatusBadge } from './StatusBadge';
import { FilterBar } from './FilterBar';

interface SubmissionTableProps {
  submissions: Submission[];
}

export function SubmissionTable({ submissions }: SubmissionTableProps) {
  const [statusFilter, setStatusFilter] = useState<SubmissionStatus | 'all'>('all');
  const [serviceFilter, setServiceFilter] = useState<ServiceType | 'all'>('all');

  const filtered = submissions.filter((s) => {
    if (statusFilter !== 'all' && s.status !== statusFilter) return false;
    if (serviceFilter !== 'all' && s.service !== serviceFilter) return false;
    return true;
  });

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-[#777]">{filtered.length} submission{filtered.length !== 1 ? 's' : ''}</p>
        <FilterBar
          statusFilter={statusFilter}
          serviceFilter={serviceFilter}
          onStatusChange={setStatusFilter}
          onServiceChange={setServiceFilter}
        />
      </div>
      <div className="overflow-hidden rounded-[10px] border border-[#e5e5e3]">
        <table className="w-full border-collapse bg-white text-sm">
          <thead>
            <tr className="border-b border-[#e5e5e3] bg-[#fafafa]">
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.5px] text-[#777]">Date</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.5px] text-[#777]">Customer</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.5px] text-[#777]">Service</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.5px] text-[#777]">Property</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.5px] text-[#777]">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-[#aaa]">
                  No submissions match the current filters.
                </td>
              </tr>
            ) : (
              filtered.map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-[#f2f2f0] transition-colors duration-150 last:border-0 hover:bg-brand-pale"
                >
                  <td className="px-4 py-3.5 text-[#777]">
                    <Link href={`/admin/submissions/${s.id}`} className="block">
                      {new Date(s.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </Link>
                  </td>
                  <td className="px-4 py-3.5 font-medium text-black">
                    <Link href={`/admin/submissions/${s.id}`} className="block hover:text-brand">
                      {s.contact_name}
                    </Link>
                  </td>
                  <td className="px-4 py-3.5 text-[#4a4a4a]">
                    <Link href={`/admin/submissions/${s.id}`} className="block">
                      {SERVICE_LABELS[s.service]}
                    </Link>
                  </td>
                  <td className="px-4 py-3.5 text-[#4a4a4a]">
                    <Link href={`/admin/submissions/${s.id}`} className="block">
                      {s.property_address}
                    </Link>
                  </td>
                  <td className="px-4 py-3.5">
                    <Link href={`/admin/submissions/${s.id}`} className="block">
                      <StatusBadge status={s.status} />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
