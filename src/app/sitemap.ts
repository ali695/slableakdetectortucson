import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tucsonslableakpros.com';

  const routes = [
    '',
    '/services',
    '/service-areas',
    '/how-slab-leak-detection-works',
    '/contact',
    '/request-slab-leak-inspection',
    '/slab-leak-detection-tucson',
    '/slab-leak-repair-tucson',
    '/emergency-slab-leak-service-tucson',
    '/electronic-leak-detection-tucson',
    '/under-slab-pipe-repair-tucson',
    '/water-line-rerouting-tucson',
    '/hot-water-slab-leak-tucson',
    '/cold-water-slab-leak-tucson',
    '/water-line-pressure-testing-tucson',
    '/partial-repiping-tucson',
    '/signs-of-a-slab-leak',
    '/slab-leak-repair-cost-tucson',
    '/slab-leak-vs-foundation-problem',
    '/slab-leak-faq',
    '/service-areas/central-tucson',
    '/service-areas/north-tucson',
    '/service-areas/oro-valley',
    '/service-areas/catalina-foothills',
    '/service-areas/east-tucson',
    '/service-areas/rita-ranch',
    '/service-areas/south-tucson',
    '/service-areas/southwest-tucson',
    '/service-areas/west-tucson',
    '/service-areas/catalina-saddlebrooke',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
