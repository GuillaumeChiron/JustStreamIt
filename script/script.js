async function recupererDonnees(requete) {
  try {
    const response = await fetch(requete);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur :", error);
  }
}


async function modifmeilleurFilm(requete) {
  const data = await recupererDonnees(requete)
  console.log(data)

  document.querySelector(".element_mf_2").textContent = data.original_title
  document.querySelector(".element_mf_3").textContent = data.long_description
  let image = document.querySelector(".element_mf_1")
  if ("image_url" in data) {
    image.setAttribute("src", data.image_url)
  } else {
    console.log("l'image n'existe pas")
  }

}

async function test(requete) {
  const data = await recupererDonnees(requete)
  console.log(data)

}



modifmeilleurFilm("http://localhost:8000/api/v1/titles/1508669")
