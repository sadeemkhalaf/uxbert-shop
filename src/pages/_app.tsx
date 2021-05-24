import React from 'react';
import { AppProps } from 'next/app';
import '../styles/styles.css';
import '@/styles/global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
