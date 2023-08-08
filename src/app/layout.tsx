import Footer from 'components/layouts/Footer';
import Header from '../components/layouts/Header';
import './globals.css';
import { Noto_Sans_JP } from 'next/font/google';

const noto_sans_jp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
});

export const metadata = {
  title: "maybe-dog's portfolio",
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={noto_sans_jp.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
