
import fish from './img/fish.png'

const loadMenu = () => {
    const contentDiv = document.querySelector('#content')

    contentDiv.innerHTML = '';

    const h1Div = document.createElement('h1');
    h1Div.className = 'menu';
    h1Div.textContent = 'Menu';

    const dishArea = document.createElement('div');
    dishArea.id = 'dishArea';
    dishArea.className = 'menu';

    const dish = document.createElement('div');
    dish.className = 'menu dish';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'menu iconWrapper';

    const img = document.createElement('img');
    img.src = fish;

    iconWrapper.appendChild(img);

    const textWrapper = document.createElement('div');
    textWrapper.className = 'menu textWrapper';

    const dishName = document.createElement('h4');
    dishName.className = 'menu';
    dishName.textContent = 'Sushi';

    const dishDesc = document.createElement('p');
    dishDesc.className = 'menu';
    dishDesc.textContent = 'Delicious maki roll';

    textWrapper.appendChild(dishName);
    textWrapper.appendChild(dishDesc);

    dish.appendChild(iconWrapper);
    dish.appendChild(textWrapper);

    dishArea.appendChild(dish);


    contentDiv.appendChild(h1Div);
    contentDiv.appendChild(dishArea);

};

export { loadMenu as default }