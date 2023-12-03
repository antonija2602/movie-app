const APIURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1"

const IMGPATH = "https://image.tmdb.org/t/p/w1280/"

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

//initialize movies by popularity
getMovies()

async function getMovies() {
    const resp = await fetch(APIURL)
    const respData = await resp.json()

    console.log(respData)

    respData.results.forEach((movie) => {
        // mozemo destrukturirati movie i onda koristiti samo nastavke kod kreiranja novog diva
        //ili
        // mozemo koristiti movie+nastavci

        // ========== destructuring movie ===========
        // const {poster_path, title, vote_average} = movie

        // const movieElement = document.createElement("div")
        // movieElement.classList.add("movie")

        // movieElement.innerHTML = `
        //     <img
        //         class="movie__img"
        //         src="${IMGPATH + poster_path}"
        //         alt="${title}" />

        //     <div class="movie__info">
        //         <h3 class="movie__title">${title}</h3>
        //         <span class="movie__rating">${vote_average}</span>
        //     </div>
        // `

        const movieElement = document.createElement("div")
        movieElement.classList.add("movie")

        movieElement.innerHTML = `       
            <img
                class="movie__img"
                src="${IMGPATH + movie.poster_path}"
                alt="${movie.title}" />

            <div class="movie__info">
                <h3 class="movie__title">${movie.title}</h3>
                <span class="movie__rating ${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
            </div>
        `
        main.append(movieElement)
    })
    return respData
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green"
    } else if (vote >= 5) {
        return "orange"
    } else {
        return "red"
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const searchTerm = search.value
})
