

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

    /*Fix Navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*Remove Navbar and icon*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
    


}

