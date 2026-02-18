import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    'preview-chat-f8724e68-ae50-46e4-a84f-24014ad8b9dd.space.z.ai',
    '.space.z.ai',
    'localhost',
  ],
};

export default nextConfig;
