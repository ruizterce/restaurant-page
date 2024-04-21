const loadMenu = () => {
    const contentDiv = document.querySelector('#content')

    contentDiv.innerHTML = '';

    const h1Div = document.createElement('h1');
    h1Div.className = 'menu';
    h1Div.textContent = 'Menu';

    contentDiv.appendChild(h1Div);

};

export { loadMenu as default }