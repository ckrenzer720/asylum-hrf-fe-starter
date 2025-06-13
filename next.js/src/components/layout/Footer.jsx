'use client';

import Image from 'next/image';
import Link from 'next/link';
import { humanRightFirstURL } from '../../constants';

export default function Footer() {
  return (
    <footer className='flex-c w-[100%] primary-c justify-between px-14 text-amber-50'>
      <section className='footer-details flex pt-4 pb-8 relative'>
        <div 
          className='flex justify-between absolute top-4 left-0' 
          onClick={() => window.open(humanRightFirstURL, '_blank')} 
          style={{ cursor: 'pointer' }}
        >
          <Image 
            src="/logo.png" 
            alt='HRF logo white' 
            width={100} 
            height={100}
            className='w-[100px]'
          />
        </div>
        <div className='footer-address flex-c-1 pt-4'>
          <p>Human Rights First</p>
          <p>75 Broad St, 31st Floor</p>
          <p>New York, New York 10004 US</p>
          <p className='pt-4'>For Media Inquiries call 202-370-333</p>
        </div>
      </section>
      <nav className='footer-links flex gap-10 content-center justify-center pb-4'>
        <Link href="/about" className='nav-btn'>About Us</Link>
        <Link href="/contact" className='nav-btn'>Contact Us</Link>
        <Link href="/press" className='nav-btn'>Press</Link>
        <Link href="/terms" className='nav-btn'>Terms & Privacy</Link>
        <Link href="/signup" className='nav-btn'>Sign Up</Link>
        <Link href="/careers" className='nav-btn'>Careers</Link>
      </nav>
    </footer>
  );
} 