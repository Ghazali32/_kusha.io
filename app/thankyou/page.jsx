import { ThankYouPage } from '../../src/views/ThankYouPage';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Thank You | Kusha.io',
  description: 'Thank you for reaching out to Kusha.io. Our technical team has received your submission.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <ThankYouPage />;
}
