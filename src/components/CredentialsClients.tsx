import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { CLIENTS } from '@/data/content';

export function CredentialsClients() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[1140px]">
        <FadeIn>
          <div className="mb-12 text-center">
            <div className="text-xs font-bold tracking-[3px] uppercase text-brand">Our Clients</div>
            <div className="mx-auto mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
            <h2 className="mb-4 font-heading text-[clamp(24px,3.5vw,36px)] font-bold text-black">
              Trusted by Government & Council
            </h2>
            <p className="mx-auto max-w-[480px] text-base leading-[1.75] text-[#4a4a4a]">
              Trusted by government and council organisations across South-East Queensland.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-16">
            {CLIENTS.map((client) => (
              <div key={client.name} className="flex h-24 w-44 items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={100}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
