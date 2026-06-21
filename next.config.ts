import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Serve the TinaCMS admin SPA (public/admin/index.html) at a clean /admin URL.
  async rewrites() {
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },
};

export default nextConfig;
