// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Lägg till dina andra vägar här
    };
  },
};

module.exports = nextConfig;
