/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images:{
      domains:["meno-image-storage.s3.ap-northeast-2.amazonaws.com"]
    },
  }
  
module.exports = nextConfig;