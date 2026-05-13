import { createSupabaseServerClient } from '@/lib/supabase/server';
import { SubmissionTable } from '@/components/admin/SubmissionTable';
import type { Submission } from '@/types/quote';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const supabase = createSupabaseServerClient();
  const { data: submissions } = await supabase
    .from('submissions')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="border-b border-[#e5e5e3] bg-white px-8 py-5">
        <h1 className="font-heading text-xl font-bold text-black">Quote Submissions</h1>
      </div>
      <div className="px-8 py-8">
        <SubmissionTable submissions={(submissions ?? []) as Submission[]} />
      </div>
    </div>
  );
}
