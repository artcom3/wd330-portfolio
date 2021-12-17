import ImdbController from "./controller.js";

const myImdbController = new ImdbController('movies')

window.addEventListener('load', () => {
    myImdbController.watch();
});
