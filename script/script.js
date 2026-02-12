//Ce fichier contient le script modifiant les données de la page web

async function recupererDonnees(requete) {
  try {
    const response = await fetch(requete);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur :", error);
  }
}

async function dataMeilleurFilm(requete) {
    const data = await recupererDonnees(requete)
    const dataMeilleurFilm = data.results[0]
    const meilleurFilm = await recupererDonnees(dataMeilleurFilm.url)

    const imageUrl = await imageError(
        meilleurFilm.image_url,
        "https://fastly.picsum.photos/id/334/200/200.jpg?hmac=Q9rDA3ngheQsAB7HoLSjpzYS0kqelfZIJBGDkW-4wgk"
    );
    
    document.querySelector(".element_mf_1").setAttribute("src", imageUrl)
    document.querySelector(".element_mf_2").textContent = meilleurFilm.original_title
    document.querySelector(".element_mf_3").textContent = meilleurFilm.long_description
}


async function dataFilmsMystery(requete){
    const dataFilmsMystery = await recupererDonnees(requete)
    let divsFilm = document.querySelectorAll("section.film.Mystery .contenair_film")

    for (let i=0; i<dataFilmsMystery.results.length; i++){
      let data = await recupererDonnees(dataFilmsMystery.results[i].url)
      console.log(data)

      const divFilm = divsFilm[i]
      divFilm.querySelector("img[src]").src = data.image_url
      divFilm.querySelector("h3").textContent = data.original_title
         
    }
          
}

dataMeilleurFilm(urlMeilleursFilm)
dataFilmsMystery(urlFilmsMystery)
