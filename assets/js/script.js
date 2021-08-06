const API_URL = `https://api.themoviedb.org/3/discover/
movie?sort_by=popularity.desc&
api_key=bd9299632bb2508f574e117e1996579f&page=1`;

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const main = document.getElementById('main');

async function getMovies() {
    const response = await fetch(API_URL);
    const body = await response.json();
    console.log(body.results)

    body.results.forEach(movie => {
        const { poster_path, title, vote_average } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src=${IMG_PATH + poster_path} alt=${title}>
            <div class="movie-info">
                <h3>${title}</h3>
                <span class=${getClassByRate(vote_average)}>${vote_average}</span>
            </div>
        `;

        main.appendChild(movieEl);
    })

    return body;
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


getMovies();