/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// ES modüllerinde __dirname eşdeğeri oluşturma
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  images: {
    unoptimized: false, // Image optimizasyonunu aktif et
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  experimental: {
    esmExternals: true,
    optimizePackageImports: ['swiper', 'lucide-react'],
  },
  webpack: (config, { isServer, dev }) => {
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

    // Production optimizations
    if (!dev && !isServer) {
      // Chunk splitting optimizasyonu
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          swiper: {
            test: /[\\/]node_modules[\\/]swiper[\\/]/,
            name: 'swiper',
            chunks: 'all',
            priority: 10,
          },
        },
      };
    }
    
    return config;
  },
  // Performance optimizations
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
