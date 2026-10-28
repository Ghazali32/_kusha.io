import './globals.css';
import Script from 'next/script';
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { UIProvider } from '../src/context/UIContext';
import { ClientLayout } from '../src/components/ClientLayout';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.kusha.io'),
  title: {
    default: 'Kusha.io — Global Technology Partner for Ambitious Businesses',
    template: '%s | Kusha.io',
  },
  description: 'Netherlands-registered technology company delivering custom software, web & mobile, cloud, data, and AI solutions with global engineering capability.',
  keywords: [
    'Kusha.io',
    'custom software development',
    'web development',
    'cloud solutions',
    'AI engineering',
    'dedicated developers',
    'Netherlands IT partner',
  ],
  authors: [{ name: 'Kusha.io', url: 'https://www.kusha.io' }],
  creator: 'Kusha.io',
  publisher: 'Kusha.io',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kusha.io',
    siteName: 'Kusha.io',
    title: 'Kusha.io — Global Technology Partner for Ambitious Businesses',
    description: 'Netherlands-registered technology company delivering custom software, web & mobile, cloud, data, and AI solutions with global engineering capability.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kusha.io — Global Technology Partner for Ambitious Businesses',
    description: 'Netherlands-registered technology company delivering custom software, web & mobile, cloud, data, and AI solutions with global engineering capability.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kusha.io',
  url: 'https://www.kusha.io',
  logo: 'https://www.kusha.io/favicon.svg',
  description: 'Netherlands-registered technology company delivering custom software, web & mobile, cloud, data, and AI solutions with global engineering capability.',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'KVK',
    value: '98986708',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NL',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@kusha.io',
    contactType: 'customer service',
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${plusJakartaSans.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M77HWJ4W');`}
        </Script>

        {/* Google tag (gtag.js) for Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18499353482"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18499353482');`}
        </Script>

        {/* Structured Data: Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-M77HWJ4W"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <UIProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </UIProvider>
      </body>
    </html>
  );
}
