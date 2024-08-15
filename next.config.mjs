/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  sassOptions: {
    includePaths: ['@/styles'],
  },
  reactStrictMode: false,
};

export default nextConfig;
