const hamburger = document.getElementById('hamburger');
const navul = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navul.classList.toggle('show');
});