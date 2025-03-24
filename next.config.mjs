/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable ESLint during production builds 
  // (since we're running it separately)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable type checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
