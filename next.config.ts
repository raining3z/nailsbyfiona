import type { NextConfig } from 'next';
import { withPigment } from '@pigment-css/nextjs-plugin';
import pigmentTheme from '@/styles/theme';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},
    serverComponentsExternalPackages: ['mongodb', 'mongoose'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.midjourney.com',
        port: '',
        pathname: '/**', // allow all paths
      },
    ],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: false, // Prevent bundling 'crypto' for the client
    };
    return config;
  },
};

export default withPigment(nextConfig, {
  theme: pigmentTheme,
});
