/* Imports */
import { getCards } from './fetch-utils.js';
import { renderCardTemplate } from './render-utils.js';

/* Get DOM Elements */
const cardListContainer = document.getElementById('card-list-container');

/* Display Functions */
window.addEventListener('load', async () => {
    const cards = await getCards();
    for (let card of cards) {
        const cardEl = renderCardTemplate(card);
        cardListContainer.append(cardEl);
    }
});

// (don't forget to call any display functions you want to run on page load!)
