class ImdbView {

    // Render Movies in the container
    renderMovies(movies, container) {
        this.clearContainer(container)
        movies.forEach(movie => {

            let article = document.createElement('article');
            article.className = "movie";
      
            let image = document.createElement('img');
            image.setAttribute('src', movie.Poster);
    
            let movieTitle = document.createElement('h3');
            movieTitle.textContent = movie.Title;
            
            let imdbID = document.createElement("input");
            imdbID.setAttribute("type", "hidden");
            imdbID.setAttribute("name", "imdbID");
            imdbID.setAttribute("value", movie.imdbID);

            article.appendChild(image);
            article.appendChild(movieTitle);
            article.appendChild(imdbID);


            document.querySelector(container).appendChild(article);
        });
    }

    // Render Movie Info
    renderMovie(movie) {

        let movieInfoDiv = document.createElement('div');
        movieInfoDiv.className = "movie-info-modal";
        
        let image = document.createElement('img');
        image.setAttribute('src', movie.Poster);

        let infoDiv = document.createElement('div');
        infoDiv.className = "movie-info";

        infoDiv.innerHTML = `
            <p><strong>Title: </strong>${movie.Title}</p>
            <p><strong>Year: </strong>${movie.Year}</p>
            <p><strong>Rated: </strong>${movie.Rated}</p>
            <p><strong>Runtime: </strong>${movie.Runtime}</p>
            <p><strong>Director: </strong>${movie.Director}</p>
            <p><strong>Writer: </strong>${movie.Writer}</p>
            <p><strong>Actors: </strong>${movie.Actors}</p>
            <p><strong>Plot: </strong>${movie.Plot}</p>
            <p><strong>imdbRating: </strong>${movie.imdbRating}</p>
        `;
        
        movieInfoDiv.appendChild(image);
        movieInfoDiv.appendChild(infoDiv);

        this.showModal(movie.Title, movieInfoDiv);
    }

    // To Render the Modal
    showModal(titleHtml, contentHtml) {
        const modal = document.createElement("div");
      
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal__inner">
                <div class="modal__top">
                    <div class="modal__title">${titleHtml}</div>
                    <button class="modal__close" type="button">
                        <span class="material-icons">close</span>
                    </button>
                </div>
                <div class="modal__content"></div>
                <div class="modal__bottom"><button id="saveButton" class="modal__button">Save</button></div>
            </div>
        `;

        modal.querySelector(".modal__content").appendChild(contentHtml)
      
        modal.querySelector(".modal__close").addEventListener("click", () => {
            document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
    }

    clearContainer(container) {
        document.querySelector(container).innerHTML = "";
    }
}

export default ImdbView;
