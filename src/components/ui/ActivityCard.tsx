'use client';

import { ActivityData } from '@/lib/markdown';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

export function ActivityCard({ activity }: { activity: ActivityData }) {
    return (
        <Link href={`/activites/${activity.slug}`} className="block group h-full">
            <motion.div
                whileHover={{ y: -5 }}
                className={`h-full bg-white rounded-xl overflow-hidden shadow-lg border-2 transition-all duration-300 flex flex-col ${activity.highlight ? 'border-gold shadow-gold/20' : 'border-transparent hover:border-navy/10 hover:shadow-xl'}`}
            >
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-gray-100 flex-shrink-0">
                    <div className="absolute inset-0 bg-navy/5 flex items-center justify-center">
                        {activity.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={getImagePath(activity.image)} alt={activity.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                        ) : null}
                    </div>
                    {activity.highlight && (
                        <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                            Nouveau
                        </div>
                    )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors line-clamp-1">{activity.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{activity.description}</p>
                    <div className="mt-auto flex items-center text-navy font-semibold group-hover:text-gold transition-colors">
                        En savoir plus <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
