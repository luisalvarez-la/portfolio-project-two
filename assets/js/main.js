

/* Toggle Icon in Navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* Scroll*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sect => {
        let top = window.scrollY;
        let offset = sect.offsetTop - 150;
        let height = sect.offsetHeight;
        let id = sect.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };

    });

    /*Fix Navbar and remove Navbar and Icon*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');



}



// Update the copyright element
let currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = 'Copyright © ' + currentYear + " Luis Alvarez";


// Switch language English/Spanish

document.addEventListener("DOMContentLoaded", function() {
    const languageCheckbox = document.getElementById("languageCheckbox");

    
    const currentPageIsEnglish = window.location.pathname.includes("index.html");
    languageCheckbox.checked = currentPageIsEnglish;

   
    languageCheckbox.addEventListener("change", function() {
        if (this.checked) {
            
            window.location.href = 'index.html';
        } else {
            
            window.location.href = 'index-es.html'; 
        }
    });
});


//Change language title in toggle
const toggle = document.querySelector('.toggle input');
toggle.addEventListener('click', () => {
    const toggling = toggle.parentNode.querySelector('.toggling');
    toggling.textContent = toggle.checked ? 'English' : 'Español';
})