document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.cabecera__logo');
    const nav = document.querySelector('.navegacion');

    logo.addEventListener('click', function() {
        nav.classList.toggle('navegacion--activo');
    });
});