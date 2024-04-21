import yuki from './img/yuki.png';
import haruka from './img/haruka.png';
import ryuji from './img/ryuji.png';



const loadAbout = () => {
    const contentDiv = document.querySelector('#content')

    contentDiv.innerHTML = '';

    const h1Div = document.createElement('h1');
    h1Div.className = 'about';
    h1Div.textContent = 'About Us';

    const chefArea = document.createElement('div');
    chefArea.id = 'chefArea';
    chefArea.className = 'about';

    chefArea.appendChild(new Chef(haruka, 'Haruka Ishikawa', 'Guardian of Tradition', 'Three decades of culinary refinement.', 'Upholder of traditional kaiseki dining and omakase experiences.', 'Unmatched mastery in sushi and sashimi.').loadDiv());
    chefArea.appendChild(new Chef(yuki, 'Yuki Tanaka', 'Minimalist Maven', '15 years dedicated to the culinary craft.', 'Embracing simplicity in Japanese culinary traditions.', 'Perfecting authentic ramen and delicate tea-infused desserts.').loadDiv());
    chefArea.appendChild(new Chef(ryuji, 'Ryuji Nakamura', 'Culinary Fusion Virtuoso', 'Trained in the kitchens of Japan and France for 16 years.', 'Harmonious fusion of Japanese and French cuisines.', 'Innovator of creative sushi rolls and exquisite desserts.').loadDiv());

    contentDiv.appendChild(h1Div);
    contentDiv.appendChild(chefArea);
};

class Chef {
    constructor(src, name, title, exp, style, special) {
        this.src = src;
        this.name = name;
        this.title = title;
        this.exp = exp;
        this.style = style;
        this.special = special;
    }

    //Return div node with the appropiate elements to append in #chefArea
    loadDiv() {
        const chefDiv = document.createElement('div');
        chefDiv.className = 'about chef';

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'menu iconWrapper';
        const img = document.createElement('img');
        img.src = this.src;
        iconWrapper.appendChild(img);

        const textWrapper = document.createElement('div');
        textWrapper.className = 'about textWrapper';

        const name = document.createElement('h3');
        name.className = 'about';
        name.textContent = this.name;

        const title = document.createElement('h4');
        title.className = 'about';
        title.textContent = this.title;

        const exp = document.createElement('p');
        exp.className = 'about';
        exp.textContent = this.exp;

        const style = document.createElement('p');
        style.className = 'about';
        style.textContent = this.style;

        const special = document.createElement('p');
        special.className = 'about';
        special.textContent = this.special;


        textWrapper.appendChild(name);
        textWrapper.appendChild(title);
        textWrapper.appendChild(exp);
        textWrapper.appendChild(style);
        textWrapper.appendChild(special);

        chefDiv.appendChild(iconWrapper);
        chefDiv.appendChild(textWrapper);

        return chefDiv;
    }
}

export { loadAbout as default }