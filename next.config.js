/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = '';

if (isGithubActions) {
    // Trim off the @user/ part and keep only the repository name
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
    basePath = `/${repo}`;
}

const nextConfig = {
    output: "export",
    basePath: basePath,
    assetPrefix: basePath,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
