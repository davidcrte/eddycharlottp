import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ActivityCard } from '@/components/ui/ActivityCard';
import { getActivities, getPressArticles } from '@/lib/markdown';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, CheckCircle2, Newspaper } from 'lucide-react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Home() {
    const activities = getActivities();
    const pressArticles = getPressArticles();

    // Get home content
    const homePath = path.join(process.cwd(), 'src/content/home.md');
    const homeContent = fs.existsSync(homePath) ? matter(fs.readFileSync(homePath, 'utf8')).content : '';

    return (
        <>
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-navy/70 z-10 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/90 z-10" />
                        <Image
                            src="/images/home/hero.jpg"
                            alt="Eddy Charlot TP en action"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </div>

                    <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                        <Link href="/activites/broyage-forestier" className="inline-block bg-gold hover:bg-white text-navy font-bold py-1 px-4 rounded-full mb-6 transform -rotate-2 shadow-lg scale-110 transition-colors duration-300">
                            NOUVEAU: Broyage Forestier
                        </Link>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-lg">
                            Expertise & <span className="text-gold">Savoir-faire</span><br /> en Bretagne
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium drop-shadow-md">
                            Terrassement, empierrement, assainissement et aménagement de vos extérieurs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="#activites" className="bg-gold hover:bg-white text-navy font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                                Découvrir mes activités <ArrowDown className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="#contact" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300">
                                Demander un devis
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Bienvenue chez Eddy Charlot TP</h2>
                        <div className="text-lg text-gray-700 leading-relaxed mb-12 prose prose-lg mx-auto prose-a:text-gold prose-p:mb-6">
                            {homeContent.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}</p>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex items-start">
                                <CheckCircle2 className="text-gold h-8 w-8 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-navy text-xl mb-2">Savoir-faire</h3>
                                    <p className="text-gray-600">L'expertise d'un professionnel qualifié pour vos chantiers.</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex items-start">
                                <CheckCircle2 className="text-gold h-8 w-8 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-navy text-xl mb-2">Matériel</h3>
                                    <p className="text-gray-600">Un parc d'équipements récent et adapté à chaque besoin.</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex items-start">
                                <CheckCircle2 className="text-gold h-8 w-8 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-navy text-xl mb-2">Proximité</h3>
                                    <p className="text-gray-600">Une intervention rapide à Plonéis et dans tout le Finistère.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Activities Grid */}
                <section id="activites" className="py-24 bg-gray-50 border-t border-gray-200">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-navy mb-4">Mes Activités</h2>
                            <div className="w-24 h-1.5 bg-gold mx-auto rounded-full mb-6"></div>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Découvrez l'ensemble de mes prestations en travaux publics et aménagement extérieur.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {activities.map((activity) => (
                                <div key={activity.slug}>
                                    <ActivityCard activity={activity} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Press Section */}
                <section className="py-20 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center p-3 bg-navy/5 rounded-full mb-4">
                                <Newspaper className="h-8 w-8 text-navy" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Dans la presse</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {pressArticles.map((article, index) => (
                                <a key={index} href={article.data.link} target="_blank" rel="noopener noreferrer" className="block group">
                                    <article className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-gold hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-xs font-bold uppercase tracking-wider text-navy bg-navy/10 px-3 py-1 rounded-full">{article.data.source}</span>
                                            {article.data.date && (
                                                <span className="text-sm font-medium text-gray-500">{article.data.date}</span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                                            {article.data.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 flex-grow">
                                            {article.content.trim()}
                                        </p>
                                        <div className="text-gold font-bold flex items-center group-hover:translate-x-2 transition-transform">
                                            {article.data.linkText} <ArrowDown className="ml-2 h-4 w-4 -rotate-90" />
                                        </div>
                                    </article>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
