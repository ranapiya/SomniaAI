import type { NextConfig } from "next";
import path from "path";
import os from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  webpack: (config) => {
    // Ignore system/user folders on Windows
    if (process.platform === "win32") {
      config.watchOptions = {
        ignored: [
          "**/node_modules",
          "**/.git",
          path.resolve(os.homedir()), // your entire C:\Users\2410r
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
