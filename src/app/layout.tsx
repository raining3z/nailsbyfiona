import { ReactNode } from 'react';
import { styled } from '@pigment-css/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/global.css';

// Fonts
import { Inter, Playfair_Display, Roboto_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-playfair',
});
const mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' });

// Metadata
export const metadata = {
  title: 'Nails By Fiona',
  description: 'Creative nail designs and pampering by Fiona',
};

// Props
interface RootLayoutProps {
  children: ReactNode;
}

// Styled Layout Container
const AppContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.backgroundSecondary,
  maxWidth: theme.widths.maxWidth,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
          <main>{children}</main>
          <Footer />
        </AppContainer>
      </body>
    </html>
  );
}
