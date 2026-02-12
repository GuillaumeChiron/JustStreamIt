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
  console.log(data["image_url"])
  const isPictureOnline = pictureOnline(data["image_url"])
  console.log(isPictureOnline)
  let image = document.querySelector(".element_mf_1")
  if (isPictureOnline) {
    image.setAttribute("src", data.image_url)
  } else {
    console.log("l'image n'existe pas")
  }

}

async function test(requete) {
  const data = await recupererDonnees(requete)
  console.log(data)

}

async function pictureOnline(url) {
  try {
    let response = await fetch(url, { method: "HEAD" })
    if (response.status === 200) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}


modifmeilleurFilm("http://localhost:8000/api/v1/titles/499549")
