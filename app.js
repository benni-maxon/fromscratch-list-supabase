/* Imports */

import { getCards } from './fetch-utils.js';

/* Get DOM Elements */

const cardListContainer = document.getElementById('card-list-container');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const cards = await getCards();
    for (let card of cards) {
        const cardEl = renderCardTemplate(card);
        cardListContainer.append(cardEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
