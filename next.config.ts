import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" produces a self-contained server build (great for Docker/VPS).
  // For GitHub Pages static export, change to: output: "export"
  // (this app is fully client-side, so a static export works out of the box).
  output: "standalone",
  images: {
    // `unoptimized` keeps `next/image` working in static exports & any host
    unoptimized: true,
  },
};

export default nextConfig;
