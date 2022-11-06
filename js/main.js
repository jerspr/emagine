/*Se uso https://mymth.github.io/vanillajs-datepicker/*/
if (document.querySelector("input[name='fecha']")) {
    const elem = document.querySelector('input[name="fecha"]');
    const datepicker = new Datepicker(elem, {
        'format': 'dd/mm/yyyy',
        'language': 'es'
    });
}
/*End*/
if (document.querySelector("#em-calendar")) {
    const emCalendar = document.getElementById('em-calendar');
    const datepickerInline = new Datepicker(emCalendar, {
        'format': 'dd/mm/yyyy',
        'language': 'es'
    }); 
}

/*Sticky nav*/
window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("nav-menu");

var sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
/*End*/

/*Menu Movil*/
// Selection of HTML objects
const body = document.querySelector("body");
const burger = document.querySelector("#burger");
const closeNav = document.querySelector("#close-nav");
const sidemenu = document.querySelector(".sidemenu");
const sidemenuLink = document.querySelectorAll(".sidemenu ul li a");

// Defining a function
function toggleMenu() {
  burger.classList.toggle("active");
  sidemenu.classList.toggle("active");
  body.classList.toggle('active-menu');
}

// Calling the function after click event occurs
sidemenuLink.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
burger.addEventListener("click", toggleMenu);
closeNav.addEventListener("click", toggleMenu);
/*End*/