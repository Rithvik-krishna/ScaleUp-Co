import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import { blogPosts } from '../src/data/blogData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const HOST = 'https://www.scaleupco.online';

// Define the routes configuration
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.9, changefreq: 'monthly' },
  { path: '/contact', priority: 0.9, changefreq: 'monthly' },
  { path: '/portfolio', priority: 0.9, changefreq: 'weekly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { path: '/industries', priority: 0.8, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.4, changefreq: 'yearly' },
  { path: '/terms-and-conditions', priority: 0.4, changefreq: 'yearly' },
  { path: '/locations/bangalore', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/web-development', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/lead-generation', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/social-media-management', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/crm-sales-automation', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/business-process-automation', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/ai-chatbots', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/ai-voice-receptionist', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/business-automation', priority: 0.8, changefreq: 'monthly' },
];

// Add dynamic blog posts
blogPosts.forEach(post => {
  routes.push({
    path: `/blog/${post.slug}`,
    priority: 0.7,
    changefreq: 'monthly'
  });
});

async function generateSitemap() {
  console.log('Starting temporary Vite dev server to verify routes...');
  
  let server;
  try {
    server = await createServer({
      server: { port: 5176 }
    });
    await server.listen();
    console.log('Vite server listening on port 5176');
  } catch (err) {
    console.error('❌ Failed to start Vite server:', err.message);
    process.exit(1);
  }

  const validUrls = [];
  const currentDate = new Date().toISOString().split('T')[0];

  for (const route of routes) {
    const url = `http://localhost:5176${route.path}`;
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        validUrls.push({
          loc: `${HOST}${route.path}`,
          lastmod: currentDate,
          changefreq: route.changefreq,
          priority: route.priority.toFixed(1)
        });
      } else {
        console.warn(`⚠️ Warning: Route ${route.path} returned status ${response.status}`);
      }
    } catch (err) {
      console.error(`❌ Error fetching ${route.path}:`, err.message);
    }
  }

  try {
    await server.close();
    console.log('Vite server closed successfully.');
  } catch (err) {
    console.error('⚠️ Warning: Failed to close Vite server cleanly:', err.message);
  }

  // Ensure public directory exists
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  // 1. Generate sitemap.xml
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${validUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

  fs.writeFileSync(path.resolve(PUBLIC_DIR, 'sitemap.xml'), xmlContent);
  console.log(`✅ Generated sitemap.xml with ${validUrls.length} links.`);

  // 2. Generate robots.txt
  const robotsTxtContent = `User-agent: *
Allow: /

Sitemap: ${HOST}/sitemap.xml
`;

  fs.writeFileSync(path.resolve(PUBLIC_DIR, 'robots.txt'), robotsTxtContent);
  console.log('✅ Generated robots.txt successfully.');
}

generateSitemap().catch(err => {
  console.error('❌ Sitemap generation failed:', err);
  process.exit(1);
});
