/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.tacdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "portio-content.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: '/**',
      },
    ]
  }
}

module.exports = nextConfig
