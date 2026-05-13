/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/verbatim",
        images: {
          unoptimized: true,
        },
      }
    : {
        async rewrites() {
          return [
            {
              source: "/Verbatim",
              destination: "/",
            },
            {
              source: "/Verbatim/:path*",
              destination: "/:path*",
            },
          ];
        },
      }),
};

export default nextConfig;
