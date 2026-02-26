import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: 'Mentions Légales | Eddy Charlot TP',
    description: 'Mentions légales du site internet Eddy Charlot TP, artisan en terrassement et aménagement dans le Finistère.',
};

export default function MentionsLegales() {
    return (
        <>
            <Header />
            <main className="flex-grow bg-gray-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-black text-navy mb-8 border-b-2 border-gold pb-4">
                        Mentions Légales
                    </h1>

                    <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-navy prose-a:text-gold hover:prose-a:text-navy">
                        <h2>1. Éditeur du site</h2>
                        <p>
                            Le présent site internet est édité par :<br />
                            <strong>{siteConfig.name}</strong><br />
                            Dirigeant : Eddy CHARLOT<br />
                            Siège social : {siteConfig.contact.address.split(', ').join('\n')}<br />
                            RCS / SIRET : 851 646 208 00013<br />
                            Numéro de téléphone : {siteConfig.contact.phone}<br />
                            Adresse email : <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                        </p>
                        <p>
                            <strong>Directeur de la publication :</strong> Eddy CHARLOT
                        </p>

                        <h2>2. Hébergement</h2>
                        <p>
                            Ce site est hébergé par :<br />
                            <strong>GitHub, Inc.</strong><br />
                            88 Colin P Kelly Jr St<br />
                            San Francisco, CA 94107<br />
                            États-Unis<br />
                            Site Web : <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">https://pages.github.com/</a>
                        </p>

                        <h2>3. Propriété intellectuelle</h2>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p>
                            La reproduction de tout ou partie de ce site sur un support électronique ou papier quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>

                        <h2>4. Données personnelles</h2>
                        <p>
                            D'une façon générale, vous pouvez visiter notre site sur Internet sans avoir à décliner votre identité et à fournir des informations personnelles vous concernant. Cependant, nous pouvons parfois vous demander des informations. Par exemple, pour traiter une demande via notre formulaire de contact ou un email direct.
                        </p>
                        <p>
                            <strong>{siteConfig.name}</strong> s'engage à ce que la collecte et le traitement de vos données soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés. Vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant, que vous pouvez exercer en nous contactant directement.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
