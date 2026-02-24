export function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Eddy Charlot TP",
        "image": "https://www.eddycharlottp.fr/images/home/hero.jpg",
        "telephone": "+33699690655",
        "email": "charlot.eddytp@gmail.com",
        "url": "https://www.eddycharlottp.fr/",
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
        "description": "Entreprise de travaux publics spécialisée en terrassement, assainissement (Charte ANC), empierrement, enrochement, dessouchage et broyage forestier dans le Finistère, Bretagne.",
        "sameAs": [
            "https://www.facebook.com/people/Eddy-charlot-TP/100086716912365/",
            "https://www.instagram.com/eddycharlottp/"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
