const fs = require('fs');

// Read the routing file
const fileContent = fs.readFileSync('app/[locale]/test/[slug]/page.tsx', 'utf8');

// Extract all slugs
const slugMatches = fileContent.matchAll(/slug === ['"`]([^'"`]+)['"`]/g);

const slugs = [];
for (const match of slugMatches) {
  slugs.push(match[1]);
}

// Remove duplicates and sort
const uniqueSlugs = [...new Set(slugs)].sort();

console.log('All unique test slugs:');
console.log(uniqueSlugs);
console.log(`\nTotal: ${uniqueSlugs.length} tests`);

// Write to file for reference
fs.writeFileSync('scripts/all-slugs.txt', uniqueSlugs.join('\n'));

// Generate sitemap URLs
const locales = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id'];
const baseUrl = 'https://myquizoasis.com';

console.log('\n--- Generating sitemap URLs ---\n');

const sitemapUrls = [];

// Add home page for each locale
locales.forEach(locale => {
  sitemapUrls.push(`${baseUrl}/${locale}`);
});

// Add test pages for each locale
locales.forEach(locale => {
  uniqueSlugs.forEach(slug => {
    sitemapUrls.push(`${baseUrl}/${locale}/test/${slug}`);
  });
});

// Write sitemap.txt
fs.writeFileSync('public/sitemap.txt', sitemapUrls.join('\n') + '\n');

// Generate sitemap.xml
const currentDate = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemapXml);

console.log(`Generated ${sitemapUrls.length} URLs in sitemap.txt and sitemap.xml`);
console.log(`- Home pages: ${locales.length}`);
console.log(`- Test pages: ${uniqueSlugs.length * locales.length} (${uniqueSlugs.length} tests × ${locales.length} locales)`);

