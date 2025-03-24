/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// ES modüllerinde __dirname eşdeğeri oluşturma
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
  // Webpack konfigürasyonu
  webpack: (config) => {
    // Modül çözümlemesi için alias ekle
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, 'src')
    };
    
    return config;
  },
};

export default nextConfig;
