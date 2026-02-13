// Ce fichier contient les variables globales

//URL des Catégories de films
const urlMeilleursFilm = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
const urlFilmsMieuxNote = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score"
const urlFilmsMystery = "http://localhost:8000/api/v1/titles/?genre=Mystery&page_size=6"
const urlFilmsCategorie2 = "http://localhost:8000/api/v1/titles/?genre=Action&page_size=6"

//URL image par default des films sans image
const imageDefault = "https://fastly.picsum.photos/id/234/200/300.jpg?hmac=KD9xFDCez7-lqgcMm-EEi7BtpClIdCzJS6YvFVyLiDs"