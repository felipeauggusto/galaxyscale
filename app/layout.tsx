import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'GalaxyScale - Contas Google Ads para Escaladores',
  description: 'A estrutura de contingência definitiva para anunciantes que não aceitam limites. Performance, segurança e suporte de outro mundo.',
  keywords: 'contas google ads, escaladores, publicidade digital, performance, marketing digital',
  authors: [{ name: 'GalaxyScale' }],
  openGraph: {
    title: 'GalaxyScale - Contas Google Ads para Escaladores',
    description: 'A estrutura de contingência definitiva para anunciantes que não aceitam limites.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GalaxyScale - Contas Google Ads para Escaladores',
    description: 'A estrutura de contingência definitiva para anunciantes que não aceitam limites.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${orbitron.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-galaxy-dark text-galaxy-light antialiased`}>
        {children}
      </body>
    </html>
  );
}