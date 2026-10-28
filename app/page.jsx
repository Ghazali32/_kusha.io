import { HomePage } from '../src/views/HomePage';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Kusha.io — Global Technology Partner for Ambitious Businesses',
  description: 'Netherlands-registered technology company delivering custom software, web & mobile, cloud, data, and AI solutions with global engineering capability.',
  alternates: {
    canonical: 'https://www.kusha.io',
  },
  openGraph: {
    title: 'Kusha.io — Global Technology Partner for Ambitious Businesses',
    description: 'Netherlands-registered technology company delivering custom software, web & mobile, cloud, data, and AI solutions with global engineering capability.',
    url: 'https://www.kusha.io',
    siteName: 'Kusha.io',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kusha.io — Global Technology Partner for Ambitious Businesses',
    description: 'Netherlands-registered technology company delivering custom software, web & mobile, cloud, data, and AI solutions with global engineering capability.',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kusha.io',
  url: 'https://www.kusha.io',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.kusha.io/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomePage />
    </>
  );
}
