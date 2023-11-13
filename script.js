const menu = document.getElementById('hamburger-menu');
const openBtn = document.getElementById('open-icon');
const closeBtn = document.getElementById('close-icon');

openBtn.onclick = () => {
    if (!menu.classList.contains('open-menu')) {
        menu.classList.add('open-menu');
    }
}

closeBtn.onclick = () => {
    if (menu.classList.contains('open-menu')) {
        menu.classList.remove('open-menu');
    }
}