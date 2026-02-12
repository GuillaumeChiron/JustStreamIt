async function imageError(urlImage, imageParDefaut) {
    return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => resolve(urlImage);
        img.onerror = () => resolve(imageParDefaut);

        img.src = urlImage;
    });
}

function changeData(data, balise) {
     let divsFilm = document.querySelectorAll(balise)

        divsFilm.forEach(divFilm => {
            divFilm.querySelector("img[src]").src = data.image_url
            divFilm.querySelector("h3").textContent = data.original_title
        })
}