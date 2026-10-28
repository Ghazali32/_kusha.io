import { WebsiteDevelopmentPage } from '../../../src/views/WebsiteDevelopmentPage';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Website Development Company | Kusha.io',
  description: 'Looking for a website development company? Kusha.io helps businesses build new websites, redesign existing sites and develop custom website functionality.',
  keywords: [
    'website development company',
    'custom web development',
    'responsive web design',
    'website redesign services',
    'business website development',
    'Kusha.io',
  ],
  alternates: {
    canonical: 'https://www.kusha.io/services/website-development',
  },
  openGraph: {
    title: 'Website Development Company | Kusha.io',
    description: 'Looking for a website development company? Kusha.io helps businesses build new websites, redesign existing sites and develop custom website functionality.',
    url: 'https://www.kusha.io/services/website-development',
    siteName: 'Kusha.io',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company | Kusha.io',
    description: 'Looking for a website development company? Kusha.io helps businesses build new websites, redesign existing sites and develop custom website functionality.',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Development Services',
  serviceType: 'Website Development & Web Engineering',
  description: 'Kusha.io provides website development services for businesses looking to launch a new website, redesign an existing one, or add custom functionality. Responsive design, clear user journeys, and practical solutions.',
  provider: {
    '@type': 'Organization',
    name: 'Kusha.io',
    url: 'https://www.kusha.io',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'KVK',
      value: '98986708',
    },
  },
  areaServed: ['Europe', 'USA', 'Middle East', 'India'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Development Capabilities',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Website Development',
          description: 'Create a professional online presence that explains your services, communicates your value and helps potential customers contact your business.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Redesign',
          description: 'Refresh an existing website with an updated layout, clearer content structure and a responsive user experience.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Web Development',
          description: 'Build website features and workflows based on your project requirements, including forms, booking flows and supported third-party integrations.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Responsive Website Development',
          description: 'Create website experiences designed to work across mobile phones, tablets and desktop screens.',
        },
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of websites can you develop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can discuss business websites, redesigns and custom website functionality based on your requirements and our available capabilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you redesign my existing website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Share your current website and the improvements you need so we can assess the project scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you integrate forms, bookings or third-party tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Integration options depend on your required workflow, chosen tools and technical feasibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on the website scope, design requirements, functionality and integrations. Share your requirements to discuss an appropriate estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a website project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timelines depend on project scope, content readiness, feedback and technical requirements. We can discuss a realistic timeline after reviewing your project.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.kusha.io',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://www.kusha.io/#services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Website Development',
      item: 'https://www.kusha.io/services/website-development',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WebsiteDevelopmentPage />
    </>
  );
}
