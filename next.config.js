/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Old /service/:id → /services/:id (from previous React router)
      {
        source: '/service/:id',
        destination: '/services/:id',
        permanent: true,
      },
      // Old /index.html or common legacy paths
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // /services/app-development → /app-development (dedicated page exists)
      {
        source: '/services/app-development',
        destination: '/app-development',
        permanent: true,
      },
    ]
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    })
    return config
  },
}

export default nextConfig
