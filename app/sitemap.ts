import type { MetadataRoute } from 'next';
import { siteUrl } from './site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/privacy` },
    { url: `${siteUrl}/terms` },
    { url: `${siteUrl}/safety` },
    { url: `${siteUrl}/delete-account` },
  ];
}
