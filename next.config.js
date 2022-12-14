/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== 'production';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  basePath: dev ? '' : '/1tpop-project',
};

module.exports = nextConfig;
