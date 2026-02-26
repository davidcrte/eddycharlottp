export function getImagePath(src: string | null | undefined): string {
    if (!src) return '';
    if (src.startsWith('http') || src.startsWith('data:')) return src;
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    // Prevent double slashes
    if (basePath.endsWith('/') && src.startsWith('/')) {
        return `${basePath}${src.substring(1)}`;
    }
    return `${basePath}${src}`;
}
