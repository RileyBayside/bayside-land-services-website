import { FadeIn } from './FadeIn';
import { ACCREDITATIONS } from '@/data/content';

export function CredentialsAccreditations() {
  return (
    <section className="bg-[#f2f2f0] px-6 py-20">
      <div className="mx-auto max-w-[1140px]">
        <FadeIn>
          <div className="mb-12 text-center">
            <div className="text-xs font-bold tracking-[3px] uppercase text-brand">
              Accreditations
            </div>
            <div className="mx-auto mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
            <h2 className="font-heading text-[clamp(24px,3.5vw,36px)] font-bold text-black">
              Company Accreditations
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ACCREDITATIONS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="rounded-[10px] border border-[#e5e5e3] bg-white p-8">
                <h3 className="mb-2 font-heading text-[17px] font-bold text-black">{item.title}</h3>
                <p className="text-sm leading-[1.65] text-[#4a4a4a]">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
