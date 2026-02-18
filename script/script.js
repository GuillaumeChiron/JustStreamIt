//Ce fichier contient le script modifiant les données de la page web

//Lance les différentes fonctions pour mettre à jour la page web
dataMeilleurFilm(urlMeilleursFilm)
dataFilmsMn(urlFilmsMieuxNote, "section.film.Mieux_note .contenair_film")
dataFilms(urlFilmsMystery, "section.film.Mystery .contenair_film")
dataFilms(urlFilmsCategorie2, "section.film.Categorie_2 .contenair_film")


dataGenres(urlGenres, "categorie_autres_1", ".film.Autres_1 .contenair_film")
dataGenres(urlGenres, "categorie_autres_2", ".film.Autres_2 .contenair_film")

initPopup(".box_meilleur_film")
initPopup(".contenair_film")