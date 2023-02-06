/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites(){
  	return [
  	  {
        "source": "/privacy-policy",
        "destination": "https://www.privacypolicygenerator.info/live.php?token=HfAe2UeBPskqLjcn5EaOgT3Ki0s1fIG5"
  	  }
  	]
  },
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
        protocol: 'http',
        hostname: 'www.tgsin.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "personalprojectts.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: '/**',
      },
    ]
  }
}

module.exports = nextConfig
