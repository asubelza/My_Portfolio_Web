import { MetadataRoute } from 'next';

const locales = ['es', 'pt', 'en'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://subelzacg.com.ar';

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: locale === 'es' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}`]),
        ),
      },
    });
  }

  // Root URL redirects to /es, include for crawlers
  entries.unshift({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  });

  return entries;
}
