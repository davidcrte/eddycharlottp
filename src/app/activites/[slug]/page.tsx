import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getActivities, getActivityBySlug } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getImagePath } from '@/lib/utils';

export async function generateStaticParams() {
    const activities = getActivities();
    return activities.map((activity) => ({
        slug: activity.slug,
    }));
}

export default async function ActivityPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const activity = getActivityBySlug(resolvedParams.slug);

    if (!activity) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <Link href="/#activites" className="inline-flex items-center text-navy hover:text-gold font-medium mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux activités
                    </Link>

                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="aspect-[21/9] w-full relative bg-navy flex items-center justify-center overflow-hidden">
                            {activity.image && (
                                <Image src={getImagePath(activity.image)} alt={activity.title} fill priority className="object-cover opacity-90" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                            <h1 className="absolute bottom-8 left-8 right-8 text-3xl md:text-5xl font-black text-white drop-shadow-md">
                                {activity.title}
                            </h1>
                        </div>

                        <div className="p-8 md:p-12 prose prose-lg prose-p:text-gray-700 text-gray-700 max-w-none prose-headings:text-navy prose-a:text-gold hover:prose-a:text-navy mt-4">
                            <MDXRemote source={activity.content} />
                        </div>

                        {activity.gallery && activity.gallery.length > 0 && (
                            <div className="p-8 md:p-12 pt-0 border-t border-gray-100">
                                <h2 className="text-2xl font-bold text-navy mb-6">Galerie Photos</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                                    {activity.gallery.map((imgSrc, index) => (
                                        <div key={index} className="aspect-square relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={getImagePath(imgSrc)}
                                                alt={`${activity.title} - Image ${index + 1}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
}
