import { Facebook, Instagram, Phone, Mail, MapPin, Send } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
    return (
        <footer className="bg-navy text-white pt-16 pb-8 border-t-[6px] border-gold" id="contact">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-12 lg:col-span-3">
                        <div className="font-bold text-2xl tracking-tight flex flex-col items-start mb-6">
                            <span className="text-white leading-none">EDDY CHARLOT</span>
                            <span className="text-gold text-lg font-black leading-none bg-white px-2 mt-1 -ml-1">TP</span>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-sm">
                            Votre partenaire de confiance en Bretagne pour le terrassement, l'empierrement, l'assainissement et le broyage forestier.
                        </p>
                        <div className="flex space-x-4">
                            <Link href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <div className="bg-white/10 p-3 rounded-full hover:bg-gold transition-colors hover:text-navy cursor-pointer">
                                    <Facebook className="h-5 w-5" />
                                </div>
                            </Link>
                            <Link href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <div className="bg-white/10 p-3 rounded-full hover:bg-gold transition-colors hover:text-navy cursor-pointer">
                                    <Instagram className="h-5 w-5" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-6 lg:col-span-2">
                        <h3 className="text-xl font-bold mb-6 text-gold">Mes Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/activites/terrassement" className="text-gray-300 hover:text-white transition-colors">Terrassement</Link></li>
                            <li><Link href="/activites/empierrement" className="text-gray-300 hover:text-white transition-colors">Empierrement</Link></li>
                            <li><Link href="/activites/enrochement" className="text-gray-300 hover:text-white transition-colors">Enrochement</Link></li>
                            <li><Link href="/activites/assainissement" className="text-gray-300 hover:text-white transition-colors">Assainissement</Link></li>
                            <li><Link href="/activites/broyage-forestier" className="text-gold font-bold hover:text-white transition-colors">Broyage Forestier</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-6 lg:col-span-3">
                        <h3 className="text-xl font-bold mb-6 text-gold">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-6 w-6 min-w-6 text-gold mr-3 mt-1" />
                                <span className="text-gray-300 whitespace-pre-line">
                                    {siteConfig.contact.address.split(', ').join('\n')}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 min-w-5 text-gold mr-3" />
                                <a href={`tel:${siteConfig.contact.phoneLink}`} className="text-gray-300 hover:text-white transition-colors">{siteConfig.contact.phone}</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 min-w-5 text-gold mr-3" />
                                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-300 hover:text-white break-all transition-colors">{siteConfig.contact.email}</a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-12 lg:col-span-4 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl">
                        <h3 className="text-xl font-bold mb-2 text-white">Prêt à démarrer votre projet ?</h3>
                        <p className="text-gray-300 text-sm mb-6">Demandez un devis ou posez-moi vos questions, j'y répondrai rapidement.</p>
                        <form className="space-y-4" action={`mailto:${siteConfig.contact.email}?subject=Nouveau contact depuis le site internet`} method="post" encType="text/plain">
                            <div className="relative">
                                <label htmlFor="name" className="sr-only">Nom</label>
                                <input type="text" id="name" name="name" placeholder="Votre nom complet" className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" required />
                            </div>
                            <div className="relative">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" id="email" name="email" placeholder="Adresse email" className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" required />
                            </div>
                            <div className="relative">
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea id="message" name="message" rows={3} placeholder="Comment puis-je vous aider ?" className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gold hover:bg-white text-navy font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-[1.02]">
                                Envoyer le message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} Eddy Charlot TP. Tous droits réservés.</p>
                    <div className="mt-4 md:mt-0 flex space-x-4">
                        <Link href="/" className="hover:text-white transition-colors">Mentions légales</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
