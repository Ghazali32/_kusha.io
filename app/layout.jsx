import './globals.css';
import Script from 'next/script';
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { UIProvider } from '../src/context/UIContext';
import { ClientLayout } from '../src/components/ClientLayout';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
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
        {/* Optimized Analytics Loader: Stubs dataLayer/gtag immediately, defers heavy GTM/Google Ads network scripts to user interaction or idle timer */}
        <Script id="analytics-loader" strategy="afterInteractive">
          {`(function() {
            var loaded = false;
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            gtag('js', new Date());

            function initAnalytics() {
              if (loaded) return;
              loaded = true;

              // GTM Script
              var gtmScript = document.createElement('script');
              gtmScript.async = true;
              gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-M77HWJ4W';
              document.head.appendChild(gtmScript);

              // Google Ads Script
              var adsScript = document.createElement('script');
              adsScript.async = true;
              adsScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18499353482';
              document.head.appendChild(adsScript);
              gtag('config', 'AW-18499353482');
            }

            // Trigger on early user interaction (scroll, touch, click, key) or idle after 3.5s
            ['scroll', 'touchstart', 'mousemove', 'click', 'keydown'].forEach(function(evt) {
              window.addEventListener(evt, initAnalytics, { once: true, passive: true });
            });
            if ('requestIdleCallback' in window) {
              requestIdleCallback(function() { setTimeout(initAnalytics, 3500); });
            } else {
              setTimeout(initAnalytics, 3500);
            }
          })();`}
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
