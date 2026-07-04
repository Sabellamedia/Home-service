/**
 * JSON-LD Schema builders for APR Handyman website.
 * All schemas follow Schema.org specifications for maximum SEO benefit.
 */

export const BUSINESS_INFO = {
  name: 'APR Handyman',
  alternateName: 'Almans Property Remodelling LLC',
  description:
    'Premium handyman and remodeling services in Jacksonville, FL. 20+ years experience. Quality workmanship, transparent communication, and guaranteed customer satisfaction.',
  url: 'https://apr-handyman.com',
  logo: 'https://apr-handyman.com/images/logo.png',
  image: 'https://apr-handyman.com/images/hero.jpg',
  telephone: '+19045326383',
  email: 'Service@apr-handyman.com',
  address: {
    streetAddress: 'Jacksonville',
    addressLocality: 'Jacksonville',
    addressRegion: 'FL',
    postalCode: '32210',
    addressCountry: 'US',
  },
  geo: {
    latitude: 30.3322,
    longitude: -81.6557,
  },
  priceRange: '$$',
  areaServed: [
    'Jacksonville',
    'Ponte Vedra',
    'Fleming Island',
    'Orange Park',
    'Mandarin',
    'Riverside',
    'San Marco',
    'Southside',
    'Atlantic Beach',
    'Neptune Beach',
    'Jacksonville Beach',
    'St. Johns County',
    'Clay County',
    'Duval County',
  ],
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 47,
  },
  sameAs: [
    'https://www.instagram.com/apr_handyman',
    'https://www.google.com/maps/place/APR+Handyman',
    'https://share.google/eELdcuHONKoJpBy2v',
  ],
};

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${BUSINESS_INFO.url}/#business`,
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.alternateName,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    logo: {
      '@type': 'ImageObject',
      url: BUSINESS_INFO.logo,
      width: 400,
      height: 100,
    },
    image: BUSINESS_INFO.image,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: BUSINESS_INFO.openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    priceRange: BUSINESS_INFO.priceRange,
    areaServed: BUSINESS_INFO.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Handyman & Remodeling Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Handyman Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Painting Services' } },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Patio & Deck Maintenance' },
        },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Remodeling Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exterior Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carpentry Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Services' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.aggregateRating.ratingValue,
      reviewCount: BUSINESS_INFO.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: BUSINESS_INFO.sameAs,
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS_INFO.url}/#website`,
    url: BUSINESS_INFO.url,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    publisher: {
      '@id': `${BUSINESS_INFO.url}/#business`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BUSINESS_INFO.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image ?? BUSINESS_INFO.image,
    provider: {
      '@id': `${BUSINESS_INFO.url}/#business`,
    },
    areaServed: BUSINESS_INFO.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: service.name,
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildBlogPostSchema(post: {
  title: string;
  excerpt: string;
  publishDate: string;
  author: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: 'Owner',
      worksFor: {
        '@id': `${BUSINESS_INFO.url}/#business`,
      },
    },
    publisher: {
      '@id': `${BUSINESS_INFO.url}/#business`,
    },
    url: post.url,
    image: post.image ?? BUSINESS_INFO.image,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  };
}
