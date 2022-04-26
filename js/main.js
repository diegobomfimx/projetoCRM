function ativarMenu() {
    let toggle = document.querySelector('.toggle');
    let navbar = document.querySelector('.navbar');
    let principal = document.querySelector('.principal');
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
    principal.classList.toggle('active');
}