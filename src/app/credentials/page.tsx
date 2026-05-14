import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { PageHero } from '@/components/PageHero';
import { CredentialsISO } from '@/components/CredentialsISO';
import { CredentialsWhy } from '@/components/CredentialsWhy';
import { CredentialsClients } from '@/components/CredentialsClients';
import { PageCTA } from '@/components/PageCTA';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Credentials | Bayside Land Services',
  description:
    'ISO 14001, 45001, and 9001 certified. Trusted by Redland City Council, SEQ Water, and the Queensland Government.',
};

export default function CredentialsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Certified & Compliant"
          heading="Our Credentials"
          subheading="Operating to the highest standard across safety, environment, and quality — independently audited and certified."
        />
        <CredentialsISO />
        <CredentialsWhy />
        <CredentialsClients />
        <PageCTA heading="Work with a certified contractor." />
      </main>
      <Footer />
    </>
  );
}
