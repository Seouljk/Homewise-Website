import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Vercel restores Turbopack's build cache between deploys, and a restored cache once shipped a stale stylesheet
    // without the site's animations. The site compiles in about a second, so always build fresh.
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
