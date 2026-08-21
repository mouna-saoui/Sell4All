# 🛍️ Sell4All — Exploration de données avec JavaScript

## 📋 Présentation du projet

**Sell4All** est une entreprise de vente au détail spécialisée dans la vente de vêtements d'occasion en ligne. Après six mois d'activité, l'entreprise souhaite analyser les données de ses clients afin d'améliorer l'expérience utilisateur et d'optimiser les futures fonctionnalités de son site.

Ce projet constitue une **première exploration et qualification des données clients**, réalisée en JavaScript dans le cadre du processus de sélection pour le parcours Full Stack JavaScript à **YouCode**.

L'objectif principal est de :
- Lire et analyser un fichier CSV de données clients
- Afficher un résumé technique des données disponibles
- Calculer des statistiques descriptives (moyenne, médiane)
- Visualiser les dépenses des clients par pays via un graphique
- Nettoyer les données et exporter un fichier CSV propre

---

## 🗂️ Structure du projet

```
Sell4All/
├── index.html                # Interface web principale du tableau de bord
├── package.json              # Configuration du projet et dépendances
├── dataset-sell4all.csv      # Fichier CSV source des données clients
├── cleanData.csv             # Fichier CSV exporté après nettoyage
├── .gitignore
├── src/
│   ├── server.js             # Serveur Express (API REST backend)
│   ├── readData.js           # Lecture et parsing du fichier CSV
│   └── cleanData.js          # Nettoyage et export des données
└── public/
    ├── app.js                # Point d'entrée frontend (appels API + orchestration)
    ├── display.js            # Affichage des données et graphique Chart.js
    ├── statistic.js          # Calculs statistiques (moyenne, médiane, regroupement)
    └── images/               # Assets visuels
```

---

## ✅ Fonctionnalités développées

### 1. Lecture du fichier CSV
- Le fichier `dataset-sell4all.csv` est lu côté serveur via le module `fs` de Node.js.
- La bibliothèque **csv-parse** est utilisée pour parser le CSV en tableau d'objets JavaScript avec un typage correct (les colonnes `Age` et `Customer spendings` sont converties en `Number`).

### 2. Affichage des 5 premières lignes
- Le tableau de bord affiche les informations des **5 premiers clients** (Nom, Téléphone, Email, Pays, Âge, Genre, Dépenses) dans un tableau HTML interactif.

### 3. Résumé technique du fichier CSV
Le résumé technique affiché dans le tableau de bord contient :
- **Le nombre de lignes** : nombre total de clients dans le jeu de données
- **Les colonnes** : liste de toutes les colonnes du fichier CSV
- **Les types de données** : type JavaScript de chaque colonne (`string` ou `number`)

> **Explication** : Les colonnes `Country`, `Name`, `Email`, `Gender`, `Address`, etc. sont de type `string`, tandis que `Age` et `Customer spendings` sont de type `number`. Cette distinction est essentielle pour garantir la cohérence des calculs statistiques.

### 4. Statistiques descriptives
| Statistique | Colonne |
|---|---|
| Moyenne (`ageAVG`) | Age |
| Moyenne (`cstAVG`) | Customer spendings |
| Médiane (`medianAge`) | Age |
| Médiane (`medianCst`) | Customer spendings |

- La **moyenne** est calculée en divisant la somme totale par le nombre d'entrées.
- La **médiane** est calculée en triant les valeurs et en prenant la valeur centrale (ou la moyenne des deux valeurs centrales si le nombre d'entrées est pair).

### 5. Médiane d'âge par pays
- Les données sont regroupées par pays grâce à la fonction `dataByPays`.
- Pour chaque pays, la médiane d'âge est calculée et affichée dans un tableau dédié.

### 6. Visualisation graphique (Chart.js)
- Un **graphique à barres** représente les **dépenses totales des clients par pays**.
- Réalisé avec la bibliothèque **Chart.js** en mode `bar chart`.
- Les données sont agrégées par pays via la fonction `totalDepenceByPays`.

### 7. Nettoyage des données
Le nettoyage effectué supprime :
- Les lignes dont le champ `Customer spendings` est **inférieur ou égal à 10 €**
- Les **lignes dupliquées** (détectées via `JSON.stringify` et `Set`)

### 8. Export du fichier CSV nettoyé
- Les données nettoyées sont exportées dans `cleanData.csv` avec les colonnes :
  - `Country`, `Age`, `Gender`, `CustomerSpendings`
- L'export est effectué côté serveur via la bibliothèque **csv-stringify**.

---

## 📦 Technologies et bibliothèques utilisées

| Outil / Bibliothèque | Rôle |
|---|---|
| **Node.js** | Environnement d'exécution JavaScript côté serveur |
| **Vite** | Bundler et serveur de développement frontend |
| **Express.js** `^5.2.1` | Serveur HTTP / API REST pour exposer les données |
| **cors** `^2.8.6` | Gestion des requêtes cross-origin entre frontend et backend |
| **csv-parse** `^7.0.2` | Lecture et parsing du fichier CSV source |
| **csv-stringify** `^6.8.3` | Export des données nettoyées vers un nouveau fichier CSV |
| **Chart.js** `^4.5.1` | Création du graphique à barres des dépenses par pays |
| **Tailwind CSS** (CDN) | Styles de l'interface web |
| **Font Awesome** (CDN) | Icônes de l'interface |
| **Google Fonts** (Caveat) | Typographie du tableau de bord |

---

## 🗓️ Étapes suivies

### Jour 1 — Mise en place de l'environnement et lecture des données
- Installation de Node.js et initialisation du projet (`npm init`)
- Installation des dépendances : `csv-parse`, `csv-stringify`, `express`, `cors`, `chart.js`, `vite`
- Création de la structure des dossiers (`src/`, `public/`)
- Développement de `readData.js` : lecture du CSV, parsing, et typage des colonnes
- Mise en place du serveur Express (`server.js`) avec l'endpoint `/api/getData`
- Test de la lecture des données via le serveur

### Jour 2 — Calculs statistiques et visualisation
- Développement de `statistic.js` :
  - Résumé technique (nombre de lignes, colonnes, types)
  - Calcul de la moyenne et de la médiane pour `Age` et `Customer spendings`
  - Regroupement des données par pays (`dataByPays`)
  - Calcul de la médiane d'âge par pays (`medianAgeByPays`)
  - Calcul des dépenses totales par pays (`totalDepenceByPays`)
- Développement de `display.js` :
  - Affichage des 5 premières lignes dans un tableau HTML
  - Affichage du résumé technique
  - Intégration du graphique à barres via Chart.js
  - Tableau de la médiane d'âge par pays
- Développement de `app.js` (frontend) : orchestration des appels API et appels aux fonctions d'affichage

### Jour 3 — Nettoyage des données, export CSV et finalisation de l'interface
- Développement de `cleanData.js` :
  - Filtrage des entrées avec `Customer spendings <= 10`
  - Suppression des doublons via `Set` et `JSON.stringify`
  - Export du fichier `cleanData.csv` via `csv-stringify`
- Endpoint `/api/cleanData` ajouté au serveur Express
- Finalisation de l'interface web (`index.html`) : mise en page, navigation, design
- Rédaction du `README.md`

---

## ⚠️ Difficultés rencontrées

1. **Gestion des espaces dans les noms de colonnes CSV** : les colonnes telles que `Phone Number`, `Postal code`, `Customer spendings` contiennent des espaces, ce qui nécessitait d'y accéder avec la notation `r['Phone Number']` et de les renommer lors du mapping.

2. **Typage des données** : par défaut, `csv-parse` retourne toutes les valeurs sous forme de chaînes de caractères. Il a fallu convertir explicitement `Age` et `Customer spendings` en `Number` pour que les calculs statistiques fonctionnent correctement.

3. **Communication frontend / backend (CORS)** : le frontend (servi par Vite) et le backend (Express sur le port 3000) étant sur des origines différentes, il a fallu ajouter le middleware `cors` au serveur Express pour autoriser les requêtes cross-origin.

4. **Détection des doublons** : JavaScript ne dispose pas de méthode native pour comparer l'égalité des objets. La solution adoptée consiste à sérialiser chaque objet en JSON (`JSON.stringify`), utiliser un `Set` pour éliminer les doublons, puis désérialiser (`JSON.parse`).

5. **Calcul de la médiane avec un nombre pair d'entrées** : il a fallu implémenter correctement le cas pair (moyenne des deux valeurs centrales) en plus du cas impair.

---

## 💡 Solutions mises en place

| Difficulté | Solution |
|---|---|
| Noms de colonnes avec espaces | Accès via notation bracket `r['Phone Number']` + renommage lors du mapping |
| Typage des données CSV | Conversion explicite avec `Number()` et `String()` lors du parsing |
| Problème CORS | Ajout du middleware `cors` dans Express |
| Détection des doublons | `JSON.stringify` + `Set` + `JSON.parse` |
| Médiane pair/impair | Condition `if (length % 2 === 0)` avec calcul de la moyenne des deux valeurs centrales |

---

## 🚀 Étapes pour exécuter le projet

### Prérequis
- [Node.js](https://nodejs.org/) installé (version 18 ou supérieure recommandée)

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/mouna-saoui/Sell4All.git
cd Sell4All

# 2. Installer les dépendances
npm install
```

### Lancement

Le projet nécessite **deux terminaux** simultanément :

**Terminal 1 — Démarrer le serveur backend (Express)**
```bash
node src/server.js
```
> Le serveur démarre sur `http://localhost:3000`

**Terminal 2 — Démarrer le serveur frontend (Vite)**
```bash
npm run dev
```
> L'interface s'ouvre sur `http://localhost:5173` (ou le port indiqué par Vite)

### Endpoints API disponibles

| Endpoint | Description |
|---|---|
| `GET /api/getData` | Retourne toutes les données clients en JSON |
| `GET /api/cleanData` | Nettoie les données et génère `cleanData.csv` |

---

## 📊 Aperçu du tableau de bord

Le tableau de bord comprend :
- **Section Accueil** : présentation du projet et résumé technique
- **Section Client** : statistiques (moyenne, médiane), détail des colonnes, tableau des 5 premiers clients, médiane d'âge par pays
- **Section Graphique** : graphique à barres des dépenses totales par pays

---

*Projet réalisé dans le cadre du processus de sélection YouCode — Parcours Full Stack JavaScript*