import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Kusha.io',
};

export default function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 20px' }}>
      <div>
        <h1 style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--lime-primary)', marginBottom: '16px' }}>404</h1>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', maxWidth: '420px', margin: '0 auto 28px auto' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn-lime">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
