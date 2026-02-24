# 🚜 Guide d'Administration du Site Eddy Charlot TP

Ce document explique comment mettre à jour vous-même le contenu de votre site internet (textes, photos, articles de presse), **sans avoir besoin de connaissances en programmation**. 

Le site a été conçu de manière à séparer la "mécanique" du site et le "texte/images", afin de rendre les futures mises à jour très simples.

---

## 📂 1. Où se trouvent les fichiers à modifier ?

Tous les textes et informations du site sont rangés dans le dossier **`src/content/`**.  
Les photos sont rangées dans le dossier **`public/images/`**.

Pour modifier votre site, vous n'aurez besoin de toucher qu'à ces deux dossiers. Ne modifiez jamais les fichiers finissant par `.tsx` ou `.ts` (ce sont les fichiers techniques du site).

---

## 📝 2. Comment modifier les textes ?

Les textes sont écrits dans des fichiers se terminant par **`.md`** (fichiers Markdown). Vous pouvez les ouvrir avec n'importe quel éditeur de texte.

### 🏠 Modifier la page d'accueil
Ouvrez le fichier `src/content/home.md`.
Vous y trouverez le texte de présentation situé sous l'image principale. Modifiez simplement le texte et sauvegardez.
*Astuce : Pour mettre un mot en gras, entourez-le de doubles étoiles comme ceci : `**mon texte important**`.*

### 🚜 Modifier une page d'activité (Terrassement, Assainissement, etc.)
Allez dans le dossier `src/content/activities/`.
Ouvrez l'activité voulue, par exemple `terrassement.md`.
Vous verrez que le fichier est divisé en deux parties :
1. **L'en-tête (entre les tirets `---`) :** C'est ici que sont définis le titre officiel de l'activité, sa petite description et l'image principale (voire une galerie d'images).
2. **Le corps du texte (en dessous des tirets) :** C'est le grand texte explicatif de la page. Vous pouvez le modifier, ajouter des listes à puces (avec des tirets `-`), etc.

### 📰 Ajouter ou modifier un article de presse
Allez dans le dossier `src/content/press/`.
Le site affichera **automatiquement** chaque fichier `.md` présent dans ce dossier sur la page d'accueil !
Pour ajouter un nouvel article (par ex. pour Le Télégramme), copiez un fichier existant (comme `ouest-france.md`), nommez le `le-telegramme.md`, et modifiez son en-tête :
```md
---
title: "Mon super titre dans le journal"
source: "Le Télégramme"
date: "25 Octobre 2026"
link: "https://www.letelegramme.fr/mon-article"
linkText: "Lire l'article"
---
Le petit résumé obligatoire qui s'affichera sur la carte d'accueil...
```
Dès que vous sauvegardez ce fichier, il apparaîtra sur votre site web !

---

## 📸 3. Comment changer ou ajouter des photos ?

### Où mettre les nouvelles photos ?
Toutes les images doivent être placées dans le dossier **`public/images/`**. 
Il y a deux sous-dossiers principaux :
- `public/images/home/` : Pour l'image de fond de l'accueil (`hero.jpg`).
- `public/images/activities/` : Pour toutes les photos des machines et chantiers.

### Comment relier une photo à une page ?
Une fois votre photo déposée dans le dossier (par exemple `nouvelle-pelle.jpg` dans `public/images/activities/`), allez dans le fichier `.md` de l'activité correspondante.

Dans l'en-tête, modifiez la ligne `image:` pour indiquer le nouveau chemin complet :
```md
image: "/images/activities/nouvelle-pelle.jpg"
```
*(Attention à bien laisser les guillemets et à respecter très précisément le nom du fichier, y compris les majuscules et le .jpg/.png !)*

### Comment créer une galerie (mosaïque de photos) ?
Sur certaines pages (comme le *Broyage Forestier*), vous pouvez afficher plusieurs photos en bas de page. 
Pour cela, il suffit d'ajouter/modifier le bloc `gallery:` dans l'en-tête du fichier `.md`.

Exemple dans `broyage-forestier.md` :
```md
gallery:
  - "/images/activities/broyage/photo-chantier-1.jpg"
  - "/images/activities/broyage/photo-chantier-2.jpg"
  - "/images/activities/broyage/super-machine.jpg"
```
Le site va se charger tout seul d'aligner vos photos joliment !

---

## 🛠️ 4. Résumé en un clin d'œil

- **Modifier l'accueil :** `src/content/home.md`
- **Modifier le terrassement :** `src/content/activities/terrassement.md`
- **Ajouter une revue de presse :** Créer un fichier dans `src/content/press/`
- **Changer la grande photo d'accueil :** Remplacer le fichier `public/images/home/hero.jpg`
- **Changer l'adresse mail de réception du formulaire :** C'est la seule exception, il faut aller dans `src/components/layout/Footer.tsx` et chercher la ligne `mailto:charlot.eddytp@gmail.com`.

**Important :** Soyez vigileant à ne pas effacer les séparations à trois tirets `---` situés en haut des fichiers `.md`, ils sont indispensables à la bonne lecture de vos pages.
