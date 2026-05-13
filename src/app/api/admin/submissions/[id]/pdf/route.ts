import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { generateQuotePdf, formatQuoteRef } from '@/lib/pdf/generate';
import type { Submission } from '@/types/quote';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { searchParams } = new URL(request.url);
  const amount = parseFloat(searchParams.get('amount') ?? '0');
  const notes = searchParams.get('notes') ?? '';

  const supabase = createSupabaseServerClient();
  const { data: submission } = await supabase
    .from('submissions')
    .select('*')
    .eq('id', id)
    .single();

  if (!submission) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  let sub = submission as Submission;

  if (!sub.quote_number) {
    const { data: num } = await supabase.rpc('next_quote_number');
    if (num !== null) {
      await supabase.from('submissions').update({ quote_number: num }).eq('id', id);
      sub = { ...sub, quote_number: num };
    }
  }

  const pdfBuffer = await generateQuotePdf(sub, amount, notes);
  const quoteRef = formatQuoteRef(sub.quote_number!, sub.created_at);

  return new NextResponse(new Uint8Array(pdfBuffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${quoteRef}.pdf"`,
    },
  });
}
