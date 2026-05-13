/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
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
};

export default nextConfig;
