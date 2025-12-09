/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // Required for GitHub Pages root deployment
  output: 'export',   // enables next export (static HTML)

  // Remove basePath and assetPrefix for root deployment
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
