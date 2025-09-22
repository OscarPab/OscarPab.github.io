/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // IMPORTANTE: Para dominio raíz (oscarpab.github.io)
  basePath: '',
  assetPrefix: '',
  trailingSlash: false,
};

export default nextConfig;