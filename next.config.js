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
}

module.exports = nextConfig
