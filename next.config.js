/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Ensures Next.js generates static files
  distDir: 'out',    // Specifies the output directory for the export
};

module.exports = nextConfig;
