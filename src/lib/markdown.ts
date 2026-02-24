import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface PressArticleData {
    title: string;
    source: string;
    date?: string; // Optional depending on the article
    link: string;
    linkText: string;
}

export interface ActivityData {
    slug: string;
    title: string;
    description: string;
    image: string;
    highlight?: boolean;
    gallery?: string[];
}

export interface ActivityDetail extends ActivityData {
    content: string;
}

export function getActivities(): ActivityData[] {
    const activitiesDir = path.join(contentDirectory, 'activities');
    if (!fs.existsSync(activitiesDir)) return [];

    const fileNames = fs.readdirSync(activitiesDir).filter(f => f.endsWith('.md'));
    const allActivitiesData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(activitiesDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            slug,
            ...(matterResult.data as Omit<ActivityData, 'slug'>),
        };
    });

    return allActivitiesData;
}

export function getActivityBySlug(slug: string): ActivityDetail | null {
    const fullPath = path.join(contentDirectory, 'activities', `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
        slug,
        content: matterResult.content,
        ...(matterResult.data as Omit<ActivityData, 'slug'>),
    };
}

export function getPressArticles(): { data: PressArticleData; content: string }[] {
    const pressDir = path.join(contentDirectory, 'press');
    if (!fs.existsSync(pressDir)) return [];

    const fileNames = fs.readdirSync(pressDir).filter(f => f.endsWith('.md'));
    const allPressData = fileNames.map((fileName) => {
        const fullPath = path.join(pressDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            content: matterResult.content,
            data: matterResult.data as PressArticleData,
        };
    });

    return allPressData;
}
