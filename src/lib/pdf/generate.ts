import { pdf } from '@react-pdf/renderer';
import { QuoteDocument } from './QuoteDocument';
import type { Submission } from '@/types/quote';
import React from 'react';

export function formatQuoteRef(quoteNumber: number, createdAt: string): string {
  const year = new Date(createdAt).getFullYear();
  return `BLS-${year}-${String(quoteNumber).padStart(4, '0')}`;
}

export async function generateQuotePdf(
  submission: Submission,
  quoteAmount: number,
  quoteNotes: string
): Promise<Buffer> {
  if (!submission.quote_number) throw new Error('Submission has no quote number');

  const quoteRef = formatQuoteRef(submission.quote_number, submission.created_at);
  const dateIssued = new Date().toLocaleDateString('en-AU', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  const element = React.createElement(QuoteDocument, {
    submission,
    quoteRef,
    quoteAmount,
    quoteNotes,
    dateIssued,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stream = await pdf(element as any).toBuffer();
  const chunks: Buffer[] = [];
  await new Promise<void>((resolve, reject) => {
    stream.on('data', (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
    stream.on('end', resolve);
    stream.on('error', reject);
  });
  return Buffer.concat(chunks);
}
