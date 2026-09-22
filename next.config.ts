import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  experimental: {
    // Vercel restores Turbopack's build cache between deploys, and a restored cache once shipped a stale stylesheet
    // without the site's animations. The site compiles in about a second, so always build fresh.
    turbopackFileSystemCacheForBuild: false,
  },
  async redirects() {
    return [
      {
        // The Vercel project domain serves the same site, so send visitors and search engines to the main domain
        // instead of leaving a duplicate copy to be indexed.
        source: '/:path*',
        has: [{ type: 'host', value: 'homewise-website.vercel.app' }],
        destination: 'https://homewise.khayll-labs.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
