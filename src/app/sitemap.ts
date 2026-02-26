import { MetadataRoute } from 'next';
import { getActivities } from '@/lib/markdown';
import { siteConfig } from '@/config/site';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.domain;
    const activities = getActivities();

    // Map all dynamic activity pages
    const activityPages = activities.map((activity) => ({
        url: `${baseUrl}/activites/${activity.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
    ];

    return [...staticPages, ...activityPages];
}
