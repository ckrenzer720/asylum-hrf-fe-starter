'use client';

import Header from './Header';
import Footer from './Footer';

export default function PageWrapper({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
} 