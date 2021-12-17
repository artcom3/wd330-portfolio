import ImdbModel from "./model.js";
import ImdbView from "./view.js";

class ImdbController {
    constructor(container) {
        this.imdbModel = new ImdbModel();
        this.imdbView = new ImdbView()
        this.searchInput = document.getElementById("searchInput");
    };

    watch() {
        document.querySelector("#searchButton").addEventListener('click', e => {
            e.preventDefault();
            this.search(this.searchInput.value);
        })
      
        this.imdbView.renderMovies(this.getData("moviesSaved"), "#movies-saved");
        this.addPosterListener();
    };

    search(inputSearch) {
        this.imdbModel.getMovieBySearch(inputSearch)
            .then(movies => {
                this.imdbView.renderMovies(movies.Search, "#movies");
                this.addPosterListener();
            });
    };

    getMovieInfo(imdbId) {
        this.imdbModel.getMovieById(imdbId)
            .then(movie => {
                this.imdbView.renderMovie(movie);
                document.querySelector("#saveButton").addEventListener("click", () => {
                    let toSave = {
                        "Title": movie.Title,
                        "Poster": movie.Poster,
                        "imdbID": movie.imdbID
                    };
                    
                    const moviesSaved = this.getData("moviesSaved");

                    moviesSaved.push(toSave);
                    this.setData("moviesSaved", moviesSaved);
                    this.imdbView.renderMovies(this.getData("moviesSaved"), "#movies-saved");
                    alert("Movie Saved")

                });
            });
    }

    addPosterListener() {
        document.querySelectorAll('.movie').forEach(movieArticle => {
            movieArticle.addEventListener('click', e => {
                const imdbId = movieArticle.querySelector('input').value;
                this.getMovieInfo(imdbId);
            })
        });
    }
    
    // For Local Storage

    setData(key, obj) {
        const values = JSON.stringify(obj);
        localStorage.setItem(key,values);
    }

    getData(key) {
        return JSON.parse(localStorage.getItem(key) || "[]");
    }

    updateDate(key, newData) {
        if(localStorage.getItem(key) != null){
            const oldData = JSON.parse(localStorage.getItem(key));
            for(keyObj in newData){
                oldData[keyObj] = newData[keyObj];
            }
            const values = JSON.stringify(oldData);
            localStorage.setItem(key,values);
        } else {
            return false;
        }
    }
}

export default ImdbController;