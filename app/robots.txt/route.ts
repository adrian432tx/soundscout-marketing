export function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: https://www.soundscout.app/sitemap.xml`,
    { headers: { "Content-Type": "text/plain" } }
  );
}