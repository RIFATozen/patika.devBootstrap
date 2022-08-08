const GET_STAR = document.querySelectorAll(".fa-bookmark");
GET_STAR.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("fa-regular")) {
      element.classList.remove("fa-regular");
      element.classList.add("fa-solid");
    } else {
      element.classList.remove("fa-solid");
      element.classList.add("fa-regular");
    }
  });
});
const myNav = document.querySelector(".fixed-top");
const myButton = document.querySelector(".rounded-pill");
window.onscroll = function () {
  "use strict";
  if (window.scrollY > 300) {
    myNav.classList.remove("bg-yellow");
    myNav.classList.add("nav-colored");
    
    myButton.classList.remove("btn-dark");
    myButton.classList.add("btn-success");

  } else {
    myNav.classList.remove("nav-colored");
    myNav.classList.add("tbg-yellow");
  
    myButton.classList.remove("btn-success");
    myButton.classList.add("btn-dark");
  }
};
