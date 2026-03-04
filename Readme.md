# JustStreamIt

Application web front-end permettant d’afficher et d’explorer les films les mieux notés grâce à l’API **OCMovies**.  
L’interface récupère dynamiquement les données des films et les présente dans différentes catégories avec une interface responsive.

---

## Description

**JustStreamIt** est une plateforme web qui permet de découvrir les films les mieux notés en utilisant une API locale.  
Les informations sont récupérées dynamiquement via des requêtes HTTP.

L’utilisateur peut :

- afficher le **meilleur film toutes catégories confondues**
- afficher les **films les mieux notés**
- afficher **plusieurs catégories de films**
- afficher les **détails complets d’un film dans une fenêtre modale**

---

## Fonctionnalités

### Responsive Design

Le site s’adapte automatiquement à la taille de l’écran.

| Type d’écran | Films visibles |
|---------------|---------------|
| Mobile | 2 |
| Tablette | 4 |
| Ordinateur | 6 |

Les films supplémentaires peuvent être affichés en scrollant.

---

### Fenêtre modale

Lorsqu’un utilisateur clique sur un film ou sur le bouton **Détails**, une modale s’ouvre contenant :

- image du film  
- titre  
- genres  
- date de sortie  
- classification (10+, 18+, etc.)  
- score IMDB  
- réalisateur  
- acteurs  
- durée  
- pays d’origine  
- recettes au box-office  
- résumé  

Un bouton permet de fermer la modale.

---

**OCMovies API**

Cette API permet de récupérer :

- les films les mieux notés
- les films par catégorie
- les détails d’un film

---

### Installation et exécution de l'application

1. Clonez ce dépôt de code à l'aide de la commande `$ git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git`
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande `$ cd ocmovies-api-fr`
3. Créez un environnement virtuel pour le projet avec `$ python -m venv env` sous windows ou `$ python3 -m venv env` sous macos ou linux.
4. Activez l'environnement virtuel avec `$ env\Scripts\activate` sous windows ou `$ source env/bin/activate` sous macos ou linux.
5. Installez les dépendances du projet avec la commande `$ pip install -r requirements.txt`
6. Créez et alimentez la base de données avec la commande `$ python manage.py create_db`
7. Démarrez le serveur avec `$ python manage.py runserver`

---

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (Vanilla)
- Fetch API
- OCMovies API

---


