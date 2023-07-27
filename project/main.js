let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img", { origin: "bottom" });

// function message(){
//    var name= document.getElementById('name');
//    var email= document.getElementById('email');
//    var age= document.getElementById('age');
//    var city= document.getElementById('city');
//    var earnings= document.getElementById('earnings');
//    var teams= document.getElementById('teams');
//    const success= document.getElementById('success');
//    const danger= document.getElementById('danger');

//    if(name.value===''||email.value===''||age.value===''||city.value===''||earnings.value===''||teams.value===''){
//       danger.style.display='block';
//    }
//   else{
//     settimeout((){
//       name.value='';
//       email.value='';
//       age.value='';
//       city.value='';
//       earnings.value='';
//       teams.value='';
//     }, 2000);
//     success.style.display='block';
//   }
// }
