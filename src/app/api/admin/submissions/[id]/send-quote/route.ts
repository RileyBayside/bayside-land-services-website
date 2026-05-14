import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { generateQuotePdf, formatQuoteRef } from '@/lib/pdf/generate';
import { sendQuoteEmail } from '@/lib/email';
import type { Submission } from '@/types/quote';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { quote_amount, quote_notes } = await request.json() as {
    quote_amount: number;
    quote_notes: string;
  };

  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from('submissions')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
  }

  let sub = data as Submission;

  if (sub.quote_number === null) {
    const { data: nextNumber, error: rpcError } = await supabase.rpc('next_quote_number');
    if (rpcError || nextNumber === null) {
      return NextResponse.json({ error: 'Failed to assign quote number' }, { status: 500 });
    }
    const { error: updateError } = await supabase
      .from('submissions')
      .update({ quote_number: nextNumber })
      .eq('id', id);
    if (updateError) {
      return NextResponse.json({ error: 'Failed to update quote number' }, { status: 500 });
    }
    sub = { ...sub, quote_number: nextNumber };
  }

  let pdfBuffer: Buffer;
  try {
    pdfBuffer = await generateQuotePdf(sub, quote_amount, quote_notes);
  } catch {
    return NextResponse.json({ error: 'PDF generation failed' }, { status: 500 });
  }

  const quoteRef = formatQuoteRef(sub.quote_number!, sub.created_at);

  try {
    await sendQuoteEmail(sub, quoteRef, pdfBuffer);
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  const { error: updateError } = await supabase
    .from('submissions')
    .update({
      quote_amount: quote_amount,
      quote_notes: quote_notes,
      quote_sent_at: new Date().toISOString(),
      status: 'quoted',
    })
    .eq('id', id);

  if (updateError) {
    console.error('Failed to update submission after sending quote:', updateError);
  }

  return NextResponse.json({ success: true, quoteRef });
}
