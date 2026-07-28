import fs from 'node:fs';
import path from 'node:path';

/**
 * Renvoie le chemin du jumeau WebP d'une image (~20 % plus léger), ou null
 * s'il n'existe pas.
 *
 * Le test d'existence n'est pas une précaution théorique : dans un <picture>,
 * une <source> qui renvoie un 404 n'entraîne aucun repli sur le <img>, l'image
 * resterait cassée. Les visuels ajoutés plus tard via le CMS n'auront pas de
 * version WebP — ce test les couvre.
 *
 * Cette fonction s'exécute au build (site statique), jamais côté navigateur.
 */
export function webpSrc(src: string): string | null {
  const webp = src.replace(/\.(jpe?g)$/i, '.webp');
  if (webp === src) return null;
  return fs.existsSync(path.join(process.cwd(), 'public', webp)) ? webp : null;
}
