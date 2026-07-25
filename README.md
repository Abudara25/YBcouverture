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

- Remplacer le domaine placeholder `ybcouverture.fr` dans `astro.config.mjs` et `public/robots.txt` par le vrai nom de domaine.
- Activer le formulaire de contact : au premier envoi réel, `ybcouverture95@gmail.com` reçoit un email "Activate Form" de formsubmit.co à confirmer.
