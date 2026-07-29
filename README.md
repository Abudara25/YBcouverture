# YB Couverture

Site vitrine pour YB Couverture (Alonzo Brion), couvreur à Éragny-sur-Oise (95610). Construit avec [Astro](https://astro.build).

## Structure

- `src/pages/` — une page par métier (rénovation, charpente, urgence), zone d'intervention, actualités, contact.
- `src/data/site.ts` — toutes les données de l'entreprise (coordonnées, avis, villes, services). Source unique de vérité, à modifier ici plutôt que dans les pages.
- `src/data/faq.ts` — questions/réponses de la FAQ.
- `src/content/actualites/` — articles de blog en Markdown.
- `public/images/` — photos de chantiers (récupérées du profil AlloVoisins), classées par corps de métier.

## Commandes

| Commande           | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm install`        | Installe les dépendances                    |
| `npm run dev`         | Lance le serveur local sur `localhost:4321`  |
| `npm run build`       | Build de production dans `./dist/`           |
| `npm run astro check` | Vérifie les types TypeScript/Astro           |

## À faire avant mise en ligne

- **Nom de domaine.** Le site tourne pour l'instant sur `y-bcouverture.vercel.app`. Une fois
  le vrai domaine acheté et rattaché au projet Vercel, changer `site` dans `astro.config.mjs` —
  c'est le seul endroit à modifier. Les balises canoniques, l'Open Graph, le sitemap et
  `robots.txt` en découlent tous (`src/pages/robots.txt.ts` génère l'URL du sitemap à partir
  de cette valeur).
- **Activer le formulaire de contact.** Au premier envoi réel, `ybcouverture95@gmail.com`
  reçoit un e-mail « Activate Form » de formsubmit.co à confirmer. Tant que ce n'est pas fait,
  les demandes de devis n'arrivent pas.

## Détails d'implémentation à connaître

- **Images.** Chaque photo a un jumeau `.webp` à côté de son `.jpg`, servi via `<picture>`.
  Le helper `src/lib/images.ts` vérifie au build que le fichier existe : une `<source>` en 404
  ne retombe pas sur le `<img>`, l'image resterait cassée. Les visuels ajoutés via le CMS n'ont
  pas de version WebP, ce test les couvre.
- **Polices.** Inter et Fraunces sont auto-hébergées dans `public/fonts/` (sous-ensemble latin,
  fichiers variables). Ne pas revenir à un `@import` Google Fonts : il bloque le rendu et
  transmet l'IP du visiteur sans consentement.
- **Carte Google.** Sur `/contact/`, elle n'est chargée qu'après un clic explicite. C'est ce qui
  permet au site de n'avoir aucun bandeau cookies — ne pas la remettre en chargement automatique.
- **Header.** La prop `heroFlush` du Layout sort le header du flux pour que la section
  d'ouverture démarre en haut de page. Réservée aux pages dont la première section a un fond à
  elle (l'accueil) : ailleurs, le contenu passerait sous le header.
