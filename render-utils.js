export function renderCardTemplate(card) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('card-template');

    p.textContent = card.name;
    img.src = `${card.img}`;
    a.href = ``; // link to card's detail page here

    div.append(p, img);

    a.append(div);

    return a;
}
