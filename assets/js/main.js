

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

    // Check if the checkbox should be checked based on the current page
    const currentPageIsEnglish = window.location.pathname.includes("index.html");
    languageCheckbox.checked = currentPageIsEnglish;

    // Add event listener to the checkbox
    languageCheckbox.addEventListener("change", function() {
        if (this.checked) {
            // Navigate to index.html if the checkbox is checked
            window.location.href = '/alternative-repository/index.html';
        } else {
            // Navigate to index-es.html if the checkbox is unchecked
            window.location.href = './assets/lang/index-es.html'; // Update the path as needed
        }
    });
});

