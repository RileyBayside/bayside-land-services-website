import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { JobDetailsPanel } from '@/components/admin/JobDetailsPanel';
import { QuoteBuilder } from '@/components/admin/QuoteBuilder';
import type { Submission } from '@/types/quote';

export const dynamic = 'force-dynamic';

export default async function SubmissionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createSupabaseServerClient();

  const { data: submission } = await supabase
    .from('submissions')
    .select('*')
    .eq('id', id)
    .single();

  if (!submission) notFound();

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="border-b border-[#e5e5e3] bg-white px-8 py-4">
        <Link href="/admin" className="text-sm text-brand hover:underline">
          ← Back to submissions
        </Link>
      </div>
      <div className="mx-auto max-w-[1100px] px-8 py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <JobDetailsPanel submission={submission as Submission} />
          <QuoteBuilder submission={submission as Submission} />
        </div>
      </div>
    </div>
  );
}
