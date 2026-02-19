// Ce fichier contient les variables globales

//Url des genres
const urlGenres = "http://localhost:8000/api/v1/genres/?page_size=25"

//URL des Catégories de films
const urlMeilleursFilm = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
const urlFilmsMieuxNote = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7"
const urlFilmsMystery = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Mystery&page_size=6"
const urlFilmsCategorie2 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Sci-Fi&page_size=6"

//URL image par default des films sans image
const imageDefault = "https://fastly.picsum.photos/id/234/200/300.jpg?hmac=KD9xFDCez7-lqgcMm-EEi7BtpClIdCzJS6YvFVyLiDs"