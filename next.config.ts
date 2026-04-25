import type { NextConfig } from "next";

const repo = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: repo,
  assetPrefix: repo || undefined,
};

export default nextConfig;
