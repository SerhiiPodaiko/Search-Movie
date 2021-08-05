const API_URL = `https://api.themoviedb.org/3/discover/
movie?sort_by=popylarity.desc&
api_key=bd9299632bb2508f574e117e1996579f&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

async function getMovies() {
    const response = await fetch(API_URL);
    const body = await response.json()

    body.results.forEach(movie => {
        const img = document.createElement('img');
        img.src = IMG_PATH + movie.poster_path;

        document.body.appendChild(img);
    })

    return body;
}

getMovies();