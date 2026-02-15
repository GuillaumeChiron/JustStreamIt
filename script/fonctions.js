// Ce fichier contient les fonctions utiles au script


//Retourne les données provenant d'une requette API
async function recupererDonnees(requete) {
  try {
    const response = await fetch(requete);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur :", error);
  }
}


//Retourne l'image si elle est bonne sinon retourne une image par default
async function imageError(urlImage, imageParDefaut) {
  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => resolve(urlImage);
    img.onerror = () => resolve(imageParDefaut);

    img.src = urlImage;
  });
}


//Met à jour les données de films d'une catégorie dans la page web
async function dataFilms(requete, balise) {
  const dataFilms = await recupererDonnees(requete)
  let divsFilm = document.querySelectorAll(balise)

  for (let i = 0; i < dataFilms.results.length; i++) {
    let data = await recupererDonnees(dataFilms.results[i].url)

    const divFilm = divsFilm[i]
    const imageUrl = await imageError(data.image_url, imageDefault)
    const title = data.title.slice(0, 13) + "..."

    divFilm.querySelector("img[src]").src = imageUrl
    divFilm.querySelector("h3").textContent = title

  }
}

//Met à jour les données des films de la catégorie Films mieux notés
async function dataFilmsMn(requete, balise) {
  const dataFilms = await recupererDonnees(requete)
  let divsFilm = document.querySelectorAll(balise)

  for (let i = 1; i < dataFilms.results.length; i++) {
    let data = await recupererDonnees(dataFilms.results[i].url)

    const divFilm = divsFilm[i-1]
    const imageUrl = await imageError(data.image_url, imageDefault)
    const title = data.title.slice(0, 13) + "..."

    divFilm.querySelector("img[src]").src = imageUrl
    divFilm.querySelector("h3").textContent = title

  }
}