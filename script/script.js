const url = "http://localhost:8000/api/v1/titles/499549"

async function recupererDonnees(requete) {
  try {
    const response = await fetch(requete);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur :", error);
  }
}


async function modifmeilleurFilm(requete){
    const titrefilm = await recupererDonnees(requete)
    
    console.log(titrefilm)
    document.querySelector(".element_mf_2").textContent = titrefilm.original_title
    document.querySelector(".element_mf_3").textContent = titrefilm.long_description
    document.querySelector(".element_mf_1").setAttribute("src", titrefilm.image_url)
}

modifmeilleurFilm(url)