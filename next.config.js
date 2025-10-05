/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  // output: 'export', // Static export - uitgeschakeld voor development
  // trailingSlash: true, // Voor betere hosting compatibiliteit - uitgeschakeld voor development
  images: {
    // unoptimized: true, // Voor static export - uitgeschakeld voor development
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-*',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig

