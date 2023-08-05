var typed = new Typed(".multiple-texts", {
  strings: ["Junior Frontend Developer", "QA Tester"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

/*========= scroLL sections active Links ======= */

let section = document.querySelectorAll("section");
let lists = document.querySelectorAll(".list");
function activeLink() {
  lists.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
lists.forEach((item) => item.addEventListener("click", activeLink));

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      lists.forEach((sec) => {
        sec.classList.remove("active");
        document
          .querySelector(".list[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*========= sticky navbar ========= */

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*========= remove toggle icon and navbar when click navbar link (scroll) ========= */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');


};


 /*========= toggle icon ========= */


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


 /*========= scroll reveal ========= */

//  ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
//  });

//  ScrollReveal().reveal('.home-content, .heading', { origin: 'top '});
//  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
