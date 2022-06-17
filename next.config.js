// next.config.js
module.exports = {
  images: {
    domains: ['cdn-icons-png.flaticon.com', 'firebasestorage.googleapis.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
}