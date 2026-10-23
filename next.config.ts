import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old rebelinternet.eu pages to new clone
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rebelinternet.eu',
          },
        ],
        destination: 'https://rebel-internet-clone.vercel.app/:path*',
        permanent: true, // 301 redirect
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.rebelinternet.eu',
          },
        ],
        destination: 'https://rebel-internet-clone.vercel.app/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
