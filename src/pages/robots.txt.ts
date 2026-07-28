import type { APIRoute } from 'astro';

/**
 * robots.txt généré au build plutôt que posé en dur dans public/.
 *
 * L'URL du sitemap doit être absolue — c'est une exigence du format, un chemin
 * relatif est ignoré par les moteurs. Elle était donc écrite en dur, et se
 * retrouvait à diverger de `site` dans astro.config.mjs le jour d'un
 * changement de domaine : les balises canoniques auraient pointé sur le
 * nouveau domaine pendant que robots.txt annonçait encore l'ancien sitemap.
 *
 * En la dérivant de `site`, astro.config.mjs redevient l'unique endroit où
 * l'adresse du site est déclarée.
 */
export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("`site` doit être défini dans astro.config.mjs pour générer robots.txt");

  const lines = [
    'User-agent: *',
    'Allow: /',
    // L'interface du CMS n'a rien à faire dans l'index.
    'Disallow: /admin/',
    '',
    `Sitemap: ${new URL('sitemap-index.xml', site).href}`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
