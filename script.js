const menuButton = document.querySelector(".menu-button");
const navList = document.querySelector(".nav-list");
const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");
const yearText = document.querySelector("#year");


menuButton.addEventListener("click", function () {
  navList.classList.toggle("show-menu");

  const menuIsOpen = navList.classList.contains("show-menu");
  menuButton.setAttribute("aria-expanded", menuIsOpen);
});


navList.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    navList.classList.remove("show-menu");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

contactForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const studentName = document.querySelector("#name").value;
  formMessage.textContent = "Thank you, " + studentName + ". We got your message!";

  contactForm.reset();
});


yearText.textContent = new Date().getFullYear();
