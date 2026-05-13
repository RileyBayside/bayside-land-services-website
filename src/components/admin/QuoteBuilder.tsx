'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Submission, SubmissionStatus } from '@/types/quote';

const inputClass =
  'w-full rounded-[5px] border-[1.5px] border-[#e5e5e3] bg-white px-4 py-[13px] text-[15px] text-black outline-none transition-[border,box-shadow] duration-200 placeholder:text-[#aaa] focus:border-brand focus:shadow-[0_0_0_3px_rgba(74,124,47,0.12)]';

const STATUSES: SubmissionStatus[] = ['new', 'quoted', 'won', 'lost'];

interface QuoteBuilderProps {
  submission: Submission;
}

export function QuoteBuilder({ submission }: QuoteBuilderProps) {
  const router = useRouter();
  const [status, setStatus] = useState<SubmissionStatus>(submission.status);
  const [amount, setAmount] = useState(submission.quote_amount?.toString() ?? '');
  const [notes, setNotes] = useState(submission.quote_notes ?? '');
  const [saving, setSaving] = useState(false);
  const [sending, setSending] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  const save = async () => {
    setSaving(true);
    const body: Record<string, unknown> = { status, quote_notes: notes };
    if (amount) body.quote_amount = parseFloat(amount);
    if (!submission.quote_number && amount) body.assign_quote_number = true;

    const res = await fetch(`/api/admin/submissions/${submission.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    setSaving(false);
    if (res.ok) {
      setSaveMsg('Saved');
      setTimeout(() => setSaveMsg(''), 2000);
      router.refresh();
    } else {
      setSaveMsg('Save failed');
      setTimeout(() => setSaveMsg(''), 3000);
    }
  };

  const sendQuote = async () => {
    if (!amount) return alert('Enter a quote amount before sending.');
    setSending(true);
    const res = await fetch(`/api/admin/submissions/${submission.id}/send-quote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quote_amount: parseFloat(amount), quote_notes: notes }),
    });
    setSending(false);
    if (res.ok) {
      setSaveMsg('Quote sent!');
      setTimeout(() => setSaveMsg(''), 3000);
      router.refresh();
    } else {
      alert('Failed to send quote. Check logs.');
    }
  };

  const previewPdf = () => {
    if (!amount) return alert('Enter a quote amount to preview.');
    const url = `/api/admin/submissions/${submission.id}/pdf?amount=${amount}&notes=${encodeURIComponent(notes)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="rounded-[10px] border border-[#e5e5e3] bg-white p-6">
      <h2 className="mb-5 font-heading text-lg font-bold text-black">Quote Builder</h2>

      <div className="flex flex-col gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-black">Status</label>
          <select
            className={`${inputClass} cursor-pointer`}
            value={status}
            onChange={(e) => setStatus(e.target.value as SubmissionStatus)}
            aria-label="Submission status"
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-black">Quote Amount (AUD)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[15px] text-[#777]">$</span>
            <input
              type="number"
              className={`${inputClass} pl-8`}
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min={0}
              step={0.01}
              aria-label="Quote amount in Australian dollars"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-black">Scope of Works / Notes</label>
          <textarea
            className={`${inputClass} resize-y`}
            rows={4}
            placeholder="Describe what's included in this quote..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            aria-label="Scope of works and quote notes"
          />
        </div>

        <button
          onClick={save}
          disabled={saving}
          className="w-full cursor-pointer rounded-[5px] border border-[#e5e5e3] bg-white py-[13px] text-[15px] font-semibold text-black transition-all duration-200 hover:border-brand disabled:opacity-50"
        >
          {saving ? 'Saving...' : saveMsg || 'Save'}
        </button>

        <div className="flex gap-3">
          <button
            onClick={previewPdf}
            className="flex-1 cursor-pointer rounded-[5px] border border-[#e5e5e3] bg-white py-[13px] text-[15px] font-semibold text-black transition-all duration-200 hover:border-brand"
          >
            Preview PDF
          </button>
          <button
            onClick={sendQuote}
            disabled={sending}
            className="flex-1 cursor-pointer rounded-[5px] border-none bg-brand py-[13px] text-[15px] font-semibold text-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_8px_20px_rgba(74,124,47,0.25)] disabled:opacity-50"
          >
            {sending ? 'Sending...' : submission.quote_sent_at ? 'Resend Quote' : 'Send Quote'}
          </button>
        </div>

        {submission.quote_sent_at && (
          <p className="text-center text-xs text-[#aaa]">
            Last sent {new Date(submission.quote_sent_at).toLocaleDateString('en-AU')}
          </p>
        )}
      </div>
    </div>
  );
}
