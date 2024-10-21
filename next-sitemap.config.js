module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'https://neon.tech',
  exclude: [
    '/blog/wp-draft-post-preview-page',
    '/blog/rss.xml',
    '/docs/changelog/rss.xml',
    '/last-week-in-aws',
    '/ping-thing',
    '/all-things-open-2023',
    '/stackoverflow',
    '/cfe',
    '/devs',
    '/github',
    '/youtube',
    '/education',
    '/pgt',
    '/fireship',
    '/radio',
    '/thank-you',
    '/docs/postgres*',
    '/blog-sitemap.xml',
    '/blog/*',
    '/guides/rss.xml',
    '/postgresql/rss.xml',
    '/enterprise',
    '/stage',
  ],
  generateRobotsTxt: true,
  additionalPaths: async (config) => [await config.transform(config, '/')],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: [
          '/blog/wp-draft-post-preview-page$',
          '/last-week-in-aws$',
          '/ping-thing$',
          '/all-things-open-2023$',
          '/stackoverflow$',
          '/github$',
          '/youtube$',
          '/education$',
          '/pgt$',
          '/fireship$',
          '/radio$',
          '/docs/postgres*',
          '/thank-you$',
          '/cfe$',
          '/devs$',
          '/home$',
          '/enterprise$',
          '/stage$',
        ],
      },
    ],
    additionalSitemaps: [`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/blog-sitemap.xml`],
  },
};
