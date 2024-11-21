// next-sitemap.js
module.exports = {
  siteUrl: 'https://sentientfx.online', // Replace with your actual site URL
  generateRobotsTxt: true, // Optional: Generates a robots.txt file
  sitemapSize: 50000, // Default: 50000 URLs per sitemap file (you can keep it for one file)
  outDir: './public', // Output directory (default is public/)
  changefreq: 'weekly', // Optional: Frequency of changes
  priority: 0.7, // Optional: Set the priority for pages
  transform: async (config, url) => {
    return {
      loc: url, // Link to the page
      lastmod: new Date().toISOString(), // Last modified date
    };
  },
  // You can add additional settings to fine-tune your sitemap
}
