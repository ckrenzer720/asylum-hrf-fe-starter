import Image from 'next/image';
import Link from 'next/link';
import { LoggingButtons } from '../../auth/LoggingButtons';
import { useAuth0 } from '@auth0/auth0-react';
import { humanRightFirstURL } from '../../constants';

export default function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <header className='flex w-[100%] primary-c justify-between px-14'>
      <div className='flex justify-between'>
        <Link href={humanRightFirstURL} target="_blank" style={{ cursor: 'pointer' }}>
          <Image 
            src="/logo.png" 
            alt='HRF logo white' 
            width={100} 
            height={100}
            className='w-[100px]'
          />
        </Link>
      </div>
      <div className='flex items-center py-4 gap-16'>
        <Link href='/' className='nav-btn'>
          Home
        </Link>
        <Link href='/graphs' className='nav-btn'>
          Graphs
        </Link>
        {isAuthenticated && (
          <Link href='/profile' className='nav-btn'>
            Profile
          </Link>
        )}
        <LoggingButtons />
      </div>
    </header>
  );
} 