import { ShieldCheck, Leaf, ClipboardCheck } from 'lucide-react';
import { FadeIn } from './FadeIn';

const WHY_ITEMS = [
  {
    Icon: ClipboardCheck,
    heading: 'Accountability',
    body: 'ISO certification means documented processes and independent third-party audits — not self-reported claims. Every system we operate under has been externally verified to an international standard.',
  },
  {
    Icon: ShieldCheck,
    heading: 'On-Site Safety',
    body: 'ISO 45001 means every worker on our sites operates under a certified safety management system. No shortcuts, no cowboys — a crew that goes home safely every day.',
  },
  {
    Icon: Leaf,
    heading: 'Environmental Compliance',
    body: 'ISO 14001 demonstrates that our clearing and mulching work is conducted with proper, documented care for the surrounding environment — critical for council and government contracts.',
  },
] as const;

export function CredentialsWhy() {
  return (
    <section className="bg-[#f2f2f0] px-6 py-20">
      <div className="mx-auto max-w-[1140px]">
        <FadeIn>
          <div className="mb-14 text-center">
            <div className="text-xs font-bold tracking-[3px] uppercase text-brand">
              Why It Matters
            </div>
            <div className="mx-auto mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
            <h2 className="font-heading text-[clamp(24px,3.5vw,36px)] font-bold text-black">
              What Certification Actually Means
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {WHY_ITEMS.map(({ Icon, heading, body }, i) => (
            <FadeIn key={heading} delay={i * 0.1}>
              <div className="rounded-[10px] bg-white p-8">
                <Icon size={28} className="mb-5 text-brand" />
                <h3 className="mb-3 font-heading text-[19px] font-bold text-black">{heading}</h3>
                <p className="text-sm leading-[1.7] text-[#4a4a4a]">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
