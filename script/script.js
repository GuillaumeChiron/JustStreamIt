//Ce fichier contient le script modifiant les données de la page web

//Lance les différentes fonctions pour mettre à jour la page web
dataMeilleurFilm(urlMeilleursFilm)
dataFilmsMn(urlFilmsMieuxNote, ".Mieux_note .film")
dataFilms(urlFilmsCrime, ".Crime .film")
dataFilms(urlFilmsCategorie2, ".Categorie_2 .film")


dataGenres(urlGenres, "categorie_autres_1", ".Autres_1")

initPopup(".box_meilleur_film")
initPopup(".contenair_film")