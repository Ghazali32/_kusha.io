export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thankyou', '/api/'],
      },
    ],
    sitemap: 'https://www.kusha.io/sitemap.xml',
  };
}
