import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  domains:['utfs.io'],
  remotePatterns: [
    {
      protocol: 'https',
      hostman: 'utfs.io',
      port: ''
    }
  ]
 }
};

export default nextConfig;
