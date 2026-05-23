/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.licdn.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': process.cwd(),
      '@/components': `${process.cwd()}/components`,
    }
    return config
  }
}

module.exports = nextConfig