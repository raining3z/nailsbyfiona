// app/layout.tsx

import { ReactNode } from 'react';
import { styled } from '@pigment-css/react';
import Header from '@/components/Header';
import '@/styles/global.css';
import Footer from '@/components/Footer';

// ✅ next/font
import { Inter, Playfair_Display, Roboto_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-playfair',
});
const mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'Hillsdale Farm West',
  description: 'A place to call home',
};

interface RootLayoutProps {
  children: ReactNode;
}

const AppContainer = styled.div(({ theme }) => ({
  backgroundColor: '#F8F3EA',
  borderRadius: theme.borderRadius.md,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  maxWidth: '1024px',
  width: '100%',
  overflow: 'hidden',
  margin: '0 auto',
}));

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${mono.variable}`}
    >
      <body>
        <AppContainer>
          <Header />
          {children}
          <Footer />
        </AppContainer>
      </body>
    </html>
  );
}
