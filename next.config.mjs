/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // Required for GitHub Pages
  output: 'export', // enables next export (static HTML)

  // Replace <repo-name> with your actual GitHub repo
  basePath: '/portfolio-web',
  assetPrefix: '/portfolio-web/',

};

export default nextConfig;
