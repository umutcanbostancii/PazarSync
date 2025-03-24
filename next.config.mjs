/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// ES modüllerinde __dirname eşdeğeri oluşturma
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['ext.same-assets.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
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
