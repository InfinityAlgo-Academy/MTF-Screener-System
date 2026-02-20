import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'infinityalgoacademy.net',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
