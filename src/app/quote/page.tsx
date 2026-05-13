import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { QuoteForm } from '@/components/quote/QuoteForm';

export const metadata = {
  title: 'Get a Quote | Bayside Land Services',
  description: 'Request a quote for forestry mulching, land clearing, or vegetation management across South-East Queensland.',
};

export default function QuotePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#fafafa] px-6 pb-24 pt-40">
        <div className="mx-auto max-w-[640px]">
          <div className="mb-10 text-center">
            <div className="text-xs font-bold tracking-[3px] uppercase text-brand">Request a Quote</div>
            <div className="mx-auto mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
            <h1 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.12] text-black">
              Tell us about your job
            </h1>
            <p className="mt-4 text-base leading-[1.75] text-[#4a4a4a]">
              Fill in the details below and we&apos;ll get back to you with a quote promptly.
            </p>
          </div>
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
