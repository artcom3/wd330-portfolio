class ImdbModel {
    constructor() {
        this.url = "https://movie-database-imdb-alternative.p.rapidapi.com";
        this.host = "movie-database-imdb-alternative.p.rapidapi.com";
        this.key = "b50256fa60msh3a4a83d9df3fcd9p105989jsndc1913f08271";
    }

    getMovieBySearch(movieSearched) {
        const request = this.url + "/?s=" + encodeURIComponent(movieSearched);
        console.log(request);
        return fetch(request, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": this.host,
                "x-rapidapi-key": this.key
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.error(err);
            });
    }

    getMovieById(imdbId) {
        const request = this.url + "/?r=jason&i=" + encodeURIComponent(imdbId);
        console.log(request);
        return fetch(request, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": this.host,
                "x-rapidapi-key": this.key
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export default ImdbModel;