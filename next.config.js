/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.ctfassets.net"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/images/:path*",
  //       destination: "https://images.ctfassets.net/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
