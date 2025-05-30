const themeSelector = document.querySelector('#theme-selector');

function changeTheme() {
    const body = document.body;
    const logo = document.querySelector('.logo');

    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'images/byui-logo_white.png'; // Switch to white logo
    } else {
        body.classList.remove('dark');
        logo.src = 'images/byui-logo_blue.webp'; // Switch to blue logo
    }
}

themeSelector.addEventListener('change', changeTheme);