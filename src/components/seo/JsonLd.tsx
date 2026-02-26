import { siteConfig } from '@/config/site';

export function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": siteConfig.name,
        "image": `${siteConfig.domain}/images/home/hero.jpg`,
        "telephone": siteConfig.contact.phoneLink,
        "email": siteConfig.contact.email,
        "url": siteConfig.domain,
        "priceRange": "€€",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Brezehen",
            "addressLocality": "Plonéis",
            "postalCode": "29710",
            "addressCountry": "FR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.0167,
            "longitude": -4.1833
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Finistère"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            }
        ],
        "description": siteConfig.description,
        "sameAs": [
            siteConfig.socials.facebook,
            siteConfig.socials.instagram
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
