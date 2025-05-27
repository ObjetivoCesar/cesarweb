/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['cesarreyesjaramillo.com', 'topdentcuenca.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cesarreyesjaramillo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'topdentcuenca.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drguidodiazortega.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'automatizotunegocio.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
