import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { JsonLd } from '@/components/seo/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Eddy Charlot TP | Terrassement, Broyage Forestier & Aménagement Finistère',
    description: 'Artisan spécialisé en terrassement, assainissement (Charte ANC), empierrement, enrochement, dessouchage et broyage forestier à Plonéis et dans le Finistère.',
    keywords: ['terrassement', 'travaux publics', 'broyage forestier', 'assainissement', 'Plonéis', 'Finistère', 'Eddy Charlot', 'empierrement'],
    authors: [{ name: 'Eddy Charlot' }],
    openGraph: {
        title: 'Eddy Charlot TP | Aménagement & Travaux Publics',
        description: 'Votre partenaire de confiance en Bretagne pour le terrassement, le broyage forestier et la mise aux normes de votre assainissement.',
        url: 'https://eddycharlottp.fr', // Placeholder URL
        siteName: 'Eddy Charlot TP',
        locale: 'fr_FR',
        type: 'website',
    },
    icons: {
        icon: '/logo.png',
        apple: '/logo.png',
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className="scroll-smooth">
            <body className={`${inter.className} text-navy antialiased min-h-screen flex flex-col`}>
                <JsonLd />
                {children}
            </body>
        </html>
    );
}
