import type { Metadata } from 'next';
import { Source_Serif_4, DM_Sans } from 'next/font/google';
import './globals.css';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  weight: ['400', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Bayside Land Services | Forestry Mulching SEQ',
  description:
    'ISO-certified forestry mulching specialists in South-East Queensland. Dense scrub to fine mulch in a single pass — no burning, no removal. Serving councils, developers, and landowners.',
  keywords: [
    'forestry mulching',
    'land clearing',
    'vegetation management',
    'slashing',
    'firebreak maintenance',
    'Redlands',
    'Moreton Bay',
    'SEQ',
    'council contractor',
    'ISO certified',
    'Queensland',
    'Bayside Land Services',
  ],
  openGraph: {
    title: 'Bayside Land Services',
    description:
      'Professional vegetation management across South-East Queensland. ISO-certified, 30+ years experience.',
    siteName: 'Bayside Land Services',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
