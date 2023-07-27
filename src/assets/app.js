import './main.css'
import 'boxicons'

const initApp = () => {
    const hamburgerBtn = document.querySelector('#hamburger-button');
    const mobileMenu = document.querySelector("#mobile-menu");

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');
    }


    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);

    const themeBtn = document.querySelector("#theme-toggle");
    const root = document.documentElement;

    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     root.classList.toggle('dark');
    //     themeBtn.checked = true;
    // } else {
    //     localStorage.theme = 'light';
    //     themeBtn.checked = false;
    // }

    const toggleTheme = () => {
        if ('theme' in localStorage && localStorage.theme == 'dark') {
            localStorage.theme = 'light'
            themeBtn.checked = false;
        } else {
            localStorage.theme = "dark"
            themeBtn.checked = true;
        }
        root.classList.toggle('dark');
        // themeBtn.checked = !themeBtn.checked;
    }

    themeBtn.addEventListener('click', toggleTheme);
}

document.addEventListener('DOMContentLoaded', initApp);
