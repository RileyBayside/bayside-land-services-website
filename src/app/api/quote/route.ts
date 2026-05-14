import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { sendNotificationEmail } from '@/lib/email';
import type { QuoteFormData } from '@/types/quote';

export async function POST(request: Request) {
  const body: QuoteFormData = await request.json();

  if (
    !body.contact_name ||
    !body.contact_email ||
    !body.contact_phone ||
    !body.property_address ||
    !body.property_area ||
    !body.terrain ||
    !body.service
  ) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const supabase = createSupabaseServerClient();

  const { data: submission, error } = await supabase
    .from('submissions')
    .insert({
      status: 'new',
      service: body.service,
      contact_name: body.contact_name,
      contact_email: body.contact_email,
      contact_phone: body.contact_phone,
      property_address: body.property_address,
      property_size: '',
      property_area: body.property_area,
      terrain: body.terrain,
      job_details: body.job_details,
      notes: body.notes ?? '',
    })
    .select()
    .single();

  if (error || !submission) {
    console.error('Supabase insert error:', error);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }

  try {
    await sendNotificationEmail(submission);
  } catch (emailError) {
    console.error('Notification email failed:', emailError);
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
