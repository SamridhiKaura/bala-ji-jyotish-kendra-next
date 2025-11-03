import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Bala Ji Jyotish Kendra | Astrologer GN Swami',
  description:
    'Bala Ji Jyotish Kendra - Astrologer GN Swami. Vedic astrology, love problem solution, marriage, career, family, health, numerology, vastu and spiritual counselling in Mohali, Punjab.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
