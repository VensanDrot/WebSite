const list = document.querySelectorAll('.nava');
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }

    })

    list.forEach(a => {
        a.classList.remove('active');
        if (a.classList.contains(current)) {
            a.classList.add('active');
        }
    })

});