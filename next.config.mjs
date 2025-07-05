/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// ES modüllerinde __dirname eşdeğeri oluşturma
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
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
  reactStrictMode: false,
  experimental: {
    // Remove invalid options that cause warnings
    esmExternals: true,
  },
  webpack: (config, { isServer }) => {
    // Modül çözümlemesi için alias ekle
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, 'src')
    };
    
    // İyzico paket sorunları için externals ekle
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('iyzipay');
    }
    
    return config;
  },
  // Production optimizations
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
};

export default nextConfig;
