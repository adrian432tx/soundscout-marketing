export async function GET() {
  const urls = ["/"];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
    .map(
      (u) => `\n  <url>\n    <loc>https://www.soundscout.app${u}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    )
    .join("")}\n</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}