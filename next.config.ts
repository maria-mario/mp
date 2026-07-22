import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Directus file assets (blog featured images, page media)
      {
        protocol: "https",
        hostname: "cms.drmarkpirtle.com",
        pathname: "/assets/**",
      },
      // Legacy Squarespace CDN — source for blog images pending migration to Directus
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        pathname: "/content/**",
      },
    ],
  },
};

export default nextConfig;
