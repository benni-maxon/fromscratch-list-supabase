import { getCard } from '../fetch-utils.js';
import { renderCardDetail } from '../render-utils.js';

const cardDetailContainer = document.getElementById('card-detail-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const card = await getCard(id);
    const cardDetailEl = renderCardDetail(card);
    cardDetailContainer.append(cardDetailEl);
});
