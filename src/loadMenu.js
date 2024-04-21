
import fish from './img/fish.png';
import lobster from './img/lobster.png';
import poke from './img/poke.png';
import ramen from './img/ramen.png';
import rolls from './img/rolls.png';
import sake from './img/sake.png';
import salad from './img/salad.png';
import sushi from './img/sushi.png'

const loadMenu = () => {
    const contentDiv = document.querySelector('#content')

    contentDiv.innerHTML = '';

    const h1Div = document.createElement('h1');
    h1Div.className = 'menu';
    h1Div.textContent = 'Menu';

    const dishArea = document.createElement('div');
    dishArea.id = 'dishArea';
    dishArea.className = 'menu';

    dishArea.appendChild(new Dish(sake, 'Sake Sunset', 'Refreshing blend of premium sake, hints of citrus, and a touch of ginger root.').loadDiv());
    dishArea.appendChild(new Dish(salad, 'Garden Glow', 'Wakame seaweed salad with sesame soy dressing.').loadDiv());
    dishArea.appendChild(new Dish(poke, 'Island Harmony', 'Glazed Tofu, seaweed salad, edamame, poke sauce.').loadDiv());
    dishArea.appendChild(new Dish(ramen, 'Miso Mingle', 'Miso broth, tofu, seaweed, corn, ramen noodles.').loadDiv());
    dishArea.appendChild(new Dish(fish, 'Tsunami Tataki', 'Seared mahi mahi slices with ginger soy glaze.').loadDiv());
    dishArea.appendChild(new Dish(lobster, 'Tempura Tidal', 'Tempura lobster bites with jasmin rice balls and spicy mayo dip.').loadDiv());
    dishArea.appendChild(new Dish(rolls, 'Dragon Dance', 'Eel, avocado, cucumber, topped with shitake slices.').loadDiv());
    dishArea.appendChild(new Dish(sushi, 'Crunchy Maki', 'Tempura shrimp, avocado, sushi rice roll.').loadDiv());

    contentDiv.appendChild(h1Div);
    contentDiv.appendChild(dishArea);

};

class Dish {
    constructor(src, name, desc) {
        this.src = src;
        this.name = name;
        this.desc = desc;
    }

    //Return div node with the appropiate elements to append in #dishArea
    loadDiv() {
        const dishDiv = document.createElement('div');
        dishDiv.className = 'menu dish';

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'menu iconWrapper';
        const img = document.createElement('img');
        img.src = this.src;
        iconWrapper.appendChild(img);

        const textWrapper = document.createElement('div');
        textWrapper.className = 'menu textWrapper';
        const title = document.createElement('h4');
        title.className = 'menu';
        title.textContent = this.name;
        const description = document.createElement('p');
        description.className = 'menu';
        description.textContent = this.desc;
        textWrapper.appendChild(title);
        textWrapper.appendChild(description);

        dishDiv.appendChild(iconWrapper);
        dishDiv.appendChild(textWrapper);

        return dishDiv;
    }

}

export { loadMenu as default }