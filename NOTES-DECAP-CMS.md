# Actualités en self-service — Decap CMS

Le client (Alonzo) peut publier et modifier les articles de la section **Actualités**
depuis une interface web, sans toucher au code. Chaque publication crée un commit
Markdown dans `src/content/actualites/`, qu'Astro régénère au build suivant.

- Interface d'administration : `https://LE-DOMAINE/admin/`
- Articles stockés dans : `src/content/actualites/*.md` (content collection Astro)
- Images des articles : `public/images/actualites/`

## Tester en local (sans OAuth)

1. Ajouter `local_backend: true` dans `public/admin/config.yml`.
2. Terminal 1 : `npx decap-server`
3. Terminal 2 : `npm run dev`
4. Ouvrir `http://localhost:4321/admin/` → « Login » (backend local, aucun compte requis).

Les articles créés en local sont écrits directement dans `src/content/actualites/`.

⚠️ Retirer `local_backend: true` avant de committer : en production, ce réglage fait chercher
au CMS un serveur `decap-server` sur localhost, qui n'existe pas.

## Édition en ligne — déjà en place

GitHub n'autorise pas un site statique à s'authentifier seul : il faut un petit relais OAuth.

**État actuel : le relais est déployé et branché.** Projet Vercel `ybcouverture-cms`
(dépôt `Abudara25/ybcouverture-cms`), et `public/admin/config.yml` pointe dessus via
`base_url: "https://ybcouverture-cms.vercel.app"`. Il n'y a rien à refaire — les étapes
ci-dessous ne servent que si le relais doit être recréé.

**Relais retenu et vérifié (0 vulnérabilité `npm audit`) : [`ublabs/netlify-cms-oauth`](https://github.com/ublabs/netlify-cms-oauth).**

⚠️ Ne PAS utiliser `bericp1/netlify-cms-oauth-provider-node` : sa dépendance `convict`
a une faille de prototype-pollution critique non patchée. (Retour d'expérience AbiWeb.)

1. Déployer `ublabs/netlify-cms-oauth` comme projet Vercel séparé
   (ici : `ybcouverture-cms` → `https://ybcouverture-cms.vercel.app`).
2. Créer une GitHub OAuth App (`https://github.com/settings/developers` → New OAuth App) :
   - Homepage URL : l'URL du site YB Couverture.
   - Authorization callback URL : `<url-du-relais-oauth>/callback`.
3. Renseigner dans les variables d'environnement Vercel du relais :
   `OAUTH_GITHUB_CLIENT_ID`, `OAUTH_GITHUB_CLIENT_SECRET` (issus de l'OAuth App),
   puis redéployer.
4. Dans `public/admin/config.yml`, mettre `base_url` à l'URL du relais (étape 1),
   committer et redéployer le site.

## Transfert au client en fin de mission

1. Repo GitHub du site → Transfer ownership (ou donner l'accès en écriture).
2. Projet de déploiement du site (Vercel/autre) → Transfer.
3. Projet OAuth → peut rester mutualisé entre clients (ne pas transférer), ou être transféré.
4. L'OAuth App GitHub ne se transfère pas : à recréer si le repo change de compte.
