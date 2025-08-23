import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reqres.in',
        port: '',
        pathname: '/img/faces/**',
        search: '',
      },
    ],
    formats: ['image/webp'],
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
