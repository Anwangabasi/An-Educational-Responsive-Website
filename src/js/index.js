//change navbar style on scroll
const scroll = function () {
  document
    .querySelector(".nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
};

window.addEventListener("scroll", scroll);

// show/hide frequently Asked Questions
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const navList = document.querySelector(".nav__list");

openMenuBtn.addEventListener("click", () => {
  navList.style.display = "flex";
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "inline-block";
});

closeMenuBtn.addEventListener("click", () => {
  navList.style.display = "none";
  openMenuBtn.style.display = "inline-block";
  closeMenuBtn.style.display = "none";
});
