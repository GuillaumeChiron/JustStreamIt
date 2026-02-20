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


//Met à jour les données du meilleur film de la page web
async function dataMeilleurFilm(requete) {
  const data = await recupererDonnees(requete)
  const dataMeilleurFilm = data.results[0]
  const meilleurFilm = await recupererDonnees(dataMeilleurFilm.url)

  const imageUrl = await imageError(meilleurFilm.image_url, imageDefault);

  const divFilm = document.querySelector(".box_meilleur_film")

  divFilm.id = meilleurFilm.id
  document.querySelector(".element_mf_1").setAttribute("src", imageUrl)
  document.querySelector(".element_mf_2").textContent = meilleurFilm.title
  document.querySelector(".element_mf_3").textContent = meilleurFilm.description
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

    divFilm.id = data.id
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

    const divFilm = divsFilm[i - 1]
    const imageUrl = await imageError(data.image_url, imageDefault)
    const title = data.title.slice(0, 13) + "..."

    divFilm.id = data.id
    divFilm.querySelector("img[src]").src = imageUrl
    divFilm.querySelector("h3").textContent = title

  }
}

//Ajout des options dans les balises selects de la page web
async function dataGenres(url, balise, balise2) {

  //Gestion des catégories Autres
  let selectAutres = document.getElementById(balise)

  const data = await recupererDonnees(url)
  for (let i = 0; i < data.results.length; i++) {
    let name = data.results[i].name
    let value = data.results[i].id

    const option = document.createElement("option")
    option.value = value
    option.textContent = name
    selectAutres.appendChild(option)
  }

  let valeur = selectAutres.value
  let texte = selectAutres.options[selectAutres.selectedIndex].text;
  console.log(valeur, texte)
  dataFilms("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=" + texte +"&page_size=6", balise2)
  
  let select = document.getElementById(balise)
  select.addEventListener("change", (event) => {
    const valeur = event.target.value;
    const texte = event.target.selectedOptions[0].text;
    console.log(valeur, texte);

    dataFilms("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=" + texte +"&page_size=6", balise2)
  })
}

// gestion du Popup
const popupBackground = document.querySelector(".popupBackground")
const popup = document.querySelector(".popup_content")
const mainFilm = document.querySelector("main")

function afficherPopup() {
  popupBackground.classList.remove("hidden")
}

function cacherPopup() {
  popupBackground.classList.add("hidden")
}

async function initPopup(balise) {

  //Ouverture du Popup avec les infos du film
  mainFilm.addEventListener("click", async (event) => {
    const btn = event.target.closest(".btnDetails")
    if (!btn) return

    const card = btn.closest(balise)
    if (!card) return

    urlFilm = `http://localhost:8000/api/v1/titles/${card.id}`
    const dataFilm = await recupererDonnees(urlFilm)
    
    //Elements du Film
    let genres = dataFilm.genres
    let newGenres = ""
    for (let iG = 0; iG < genres.length; iG++) {
      newGenres += `${genres[iG]} `
    }

    let pays = dataFilm.countries
    let newPays = ""
    for (let iP = 0; iP < pays.length; iP++) {
      newPays += `${pays[iP]}, `
    }

    let recette = dataFilm.budget
    if (recette === null) {
      recette = "information inexistante"
    }

    let realisateur = dataFilm.directors
    let newRealisateur = ""
    for (let iR = 0; iR < realisateur.length; iR++) {
      newRealisateur += `${realisateur[iR]}, `
    }

    let image_url = await imageError(dataFilm.image_url, imageDefault)

    let acteurs = dataFilm.actors
    let newActeurs = ""
    for (let iA = 0; iA < acteurs.length; iA++) {
      newActeurs += `${acteurs[iA]}, `
    }

    popup.innerHTML = `<div class="box-informations-film">
        <div class="informations_film">
          <button id="btnClose">←</button>
          <h3><span>${dataFilm.title}</span></h3>
          <p><span>${dataFilm.year} - ${newGenres}</span></p>
          <p><span>PG, ${dataFilm.duration} minutes (${newPays})</span></p>
          <p><span>IMDB score: ${dataFilm.imdb_score}/10</span></p>
          <p><span>Recette box-office: </span>&nbsp;${recette}</p>
          <p><span>Réalisé par:</span>&nbsp;${newRealisateur}</p>
        </div>
        <img
            src="${image_url}">
      </div>
      <p class="texte-description">${dataFilm.long_description}</p>
      <p><span>Avec:</span><br>${newActeurs}</p>`;

    afficherPopup()

    //Fermeture du Popup
    const btnClosePopup = document.getElementById("btnClose")
    btnClosePopup.addEventListener("click", () => {
      cacherPopup()
    })
  })
}