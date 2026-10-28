import { PrivacyPolicyPage } from '../../src/views/PrivacyPolicyPage';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Privacy Policy | Kusha.io',
  description: 'Privacy Policy and GDPR compliance details for Kusha.io (Netherlands KVK 98986708).',
  alternates: {
    canonical: 'https://www.kusha.io/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Kusha.io',
    description: 'Privacy Policy and GDPR compliance details for Kusha.io (Netherlands KVK 98986708).',
    url: 'https://www.kusha.io/privacy-policy',
    siteName: 'Kusha.io',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
