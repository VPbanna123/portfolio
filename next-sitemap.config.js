// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: process.env.SITE_URL ||
//     (process.env.NEXT_PUBLIC_VERCEL_URL
//       ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
//       : 'https://example.com'),
//   generateRobotsTxt: true,
//   generateIndexSitemap: false,
//   robotsTxtOptions: {
//     policies: [{ userAgent: '*', allow: '/' }],
//   },
// };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `'https://vijaypal.me'`,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
