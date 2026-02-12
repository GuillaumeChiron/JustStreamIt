// Ce fichier contient les fonctions utiles au script

async function imageError(urlImage, imageParDefaut) {
    return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => resolve(urlImage);
        img.onerror = () => resolve(imageParDefaut);

        img.src = urlImage;
    });
}