const loadHome = () => {
    const contentDiv = document.querySelector('#content')

    contentDiv.innerHTML = '';

    const h1Div = document.createElement('h1');
    h1Div.textContent = 'Yuzu Blossom';

    const h2Div = document.createElement('h2');
    h2Div.textContent = 'Japanese Fusion Cuisine';

    const p1Div = document.createElement('p');
    p1Div.textContent = `Welcome to Yuzu Blossom, where culinary innovation meets traditional Japanese craftsmanship. Nestled in the
    heart of Granada, Spain, our restaurant invites you on a gastronomic adventure like no other. From the
    moment
    you step inside, you're transported to a realm where every dish tells a story, where each bite is a symphony
    of flavors.`;

    const p2Div = document.createElement('p');
    p2Div.textContent = `Our menu is a testament to our dedication to excellence, blending the finest ingredients with creative flair
    to create a dining experience that's both familiar and exhilaratingly new. Whether you're craving the
    delicate balance of sushi rolls infused with unexpected ingredients, or the robust umami of our signature
    ramen bowls, every dish is a masterpiece crafted with care by our talented chefs.`


    contentDiv.appendChild(h1Div);
    contentDiv.appendChild(h2Div);
    contentDiv.appendChild(p1Div);
    contentDiv.appendChild(p2Div);
};

export { loadHome as default }
