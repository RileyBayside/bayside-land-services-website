import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const supabase = createSupabaseServerClient();

  const allowedFields = ['status', 'quote_amount', 'quote_notes'];
  const updates: Record<string, unknown> = {};
  for (const field of allowedFields) {
    if (field in body) updates[field] = body[field];
  }

  if (body.assign_quote_number) {
    const { data: num } = await supabase.rpc('next_quote_number');
    if (num !== null) updates.quote_number = num;
  }

  const { data, error } = await supabase
    .from('submissions')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error || !data) return NextResponse.json({ error: error?.message ?? 'Update failed' }, { status: 500 });
  return NextResponse.json(data);
}
