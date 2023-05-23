/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['bcrypt'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.stats = {
        warningsFilter: /webpack\.cache/,
      };
    }
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://nextjs-fullstack-sage.vercel.app/:path*',
      },
    ];
  },
}

module.exports = nextConfig
