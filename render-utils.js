export function renderCardTemplate(card) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('card-template');

    p.textContent = card.name;
    img.src = `${card.img}`;
    a.href = `./detail/?id=${card.id}`; // link to card's detail page here

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderCardDetail(card) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');
    // const typeEl = document.createElement('p');
    // const subtypeEl = document.createElement('p');
    const textEl = document.createElement('p');
    const typeAndSubtypeEl = document.createElement('div');

    div.classList.add('card-detail');

    nameEl.textContent = card.name;
    nameEl.classList.add('name');

    // typeEl.textContent = `Type: ${card.type}`;
    // typeEl.classList.add('type');

    // subtypeEl.textContent = `Subtype: ${card.subtype}`;
    // subtypeEl.classList.add('subtype');

    textEl.textContent = `Card Text: ${card.text}`;
    textEl.classList.add('text');

    typeAndSubtypeEl.textContent = `${card.type} - ${card.subtype}`;
    typeAndSubtypeEl.classList.add('type-and-subtype');

    img.src = `${card.img}`;

    div.append(nameEl, img, typeAndSubtypeEl, textEl);

    return div;
}
