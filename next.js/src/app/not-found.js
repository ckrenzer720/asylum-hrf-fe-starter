import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className="nav-btn">
        Return to Home
      </Link>
    </div>
  );
} 