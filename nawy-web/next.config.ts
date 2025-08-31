import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/prod.images.cooingestate.com/**",
      },
      {
        protocol: "https",
        hostname: "prod-images.cooingestate.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
