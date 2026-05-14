import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { PageHero } from '@/components/PageHero';
import { ServicesDetail } from '@/components/ServicesDetail';
import { ServicesFAQ } from '@/components/ServicesFAQ';
import { PageCTA } from '@/components/PageCTA';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Services | Bayside Land Services',
  description:
    'Forestry mulching, land clearing, firebreak construction, vegetation management, and weed control across South-East Queensland.',
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="What We Do"
          heading="Our Services"
          subheading="Forestry mulching, land clearing, firebreak construction, and vegetation management across South-East Queensland."
          ctaLabel="Get a Quote"
          ctaHref="/#contact"
        />
        <ServicesDetail />
        <ServicesFAQ />
        <PageCTA heading="Ready to get started?" />
      </main>
      <Footer />
    </>
  );
}
