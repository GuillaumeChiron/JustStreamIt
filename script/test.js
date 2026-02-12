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
    
    // document.querySelector(".element_mf_1").setAttribute("src", meilleurFilm.image_url)
    document.querySelector(".element_mf_2").textContent = meilleurFilm.original_title
    document.querySelector(".element_mf_3").textContent = meilleurFilm.long_description
}

async function dataFilmsMystery(requete){
    const dataFilmsMystery = await recupererDonnees(requete)
    let tableauFilmsMystery = []
    for (let i=0; i<dataFilmsMystery.results.length; i++){
        tableauFilmsMystery.push(dataFilmsMystery.results[i].url)
    }
    console.log(tableauFilmsMystery)
}


const urlMeilleursFilm = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
const urlFilmsMystery = "http://localhost:8000/api/v1/titles/?genre=Mystery&limit=6"

dataMeilleurFilm(urlMeilleursFilm)
dataFilmsMystery(urlFilmsMystery)
