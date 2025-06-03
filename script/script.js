const sanduiche = document.getElementById('sanduiche');
const navbar = document.getElementById('navbar');
const header = document.getElementById('header');

sanduiche.onclick = () => {
    if (navbar.classList.contains('display')) {
        navbar.classList.remove('display');
        sanduiche.innerHTML = 'close';
    } else {
        navbar.classList.add('display');
        sanduiche.innerHTML = 'menu';
    }
}

window.onscroll = () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}