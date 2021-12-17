import ImdbModel from "./model.js";
import ImdbView from "./view.js";

class ImdbController {
    constructor(container) {
        this.imdbModel = new ImdbModel();
        this.imdbView = new ImdbView()
        this.searchInput = document.getElementById("searchInput");
    };

    test() {
        document.querySelector("#searchButton").addEventListener('click', e => {
            e.preventDefault();
            this.search(this.searchInput.value);
        })
    };

    search(inputSearch) {
        this.imdbModel.getMovieBySearch(inputSearch)
            .then(movies => {
                this.imdbView.renderMovies(movies.Search);
                document.querySelectorAll('.movie').forEach(movieArticle => {
                    movieArticle.addEventListener('click', e => {
                        const imdbId = movieArticle.querySelector('input').value;
                        this.getMovieInfo(imdbId);
                    })
                });
            });
    };

    getMovieInfo(imdbId) {
        this.imdbModel.getMovieById(imdbId)
            .then(movie => {
                this.imdbView.renderMovie(movie);
            });
    }
}

export default ImdbController;