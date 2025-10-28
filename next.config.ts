import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow any HTTPS hostname
        pathname: "/**", // allow all paths
      },
    ],
  },
  /* other config options */
};

export default nextConfig;
