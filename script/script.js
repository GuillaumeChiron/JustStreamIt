//Ce fichier contient le script modifiant les données de la page web

//Met à jour les données du meilleur film da la page web
async function dataMeilleurFilm(requete) {
    const data = await recupererDonnees(requete)
    const dataMeilleurFilm = data.results[0]
    const meilleurFilm = await recupererDonnees(dataMeilleurFilm.url)

    const imageUrl = await imageError(meilleurFilm.image_url, imageDefault);

    document.querySelector(".element_mf_1").setAttribute("src", imageUrl)
    document.querySelector(".element_mf_2").textContent = meilleurFilm.title
    document.querySelector(".element_mf_3").textContent = meilleurFilm.description
}

//Lance les différentes fonctions pour mettre à jour la page web
dataMeilleurFilm(urlMeilleursFilm)
dataFilms(urlFilmsMieuxNote, "section.film.Mieux_note .contenair_film")
dataFilms(urlFilmsMystery, "section.film.Mystery .contenair_film")
dataFilms(urlFilmsCategorie2, "section.film.Categorie_2 .contenair_film")