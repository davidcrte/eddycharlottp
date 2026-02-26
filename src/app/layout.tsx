import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Eddy Charlot TP | Terrassement, Broyage Forestier & Aménagement Finistère',
    description: siteConfig.description,
    keywords: ['terrassement', 'travaux publics', 'broyage forestier', 'assainissement', 'Plonéis', 'Finistère', 'Eddy Charlot', 'empierrement'],
    authors: [{ name: 'Eddy Charlot' }],
    openGraph: {
        title: 'Eddy Charlot TP | Aménagement & Travaux Publics',
        description: siteConfig.description,
        url: siteConfig.domain,
        siteName: siteConfig.name,
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
