 
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const links = document.querySelectorAll(".header-list-a");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      nav.classList.remove("open");
    });
  });




   document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".review-card");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          entry.target.style.transitionDelay = `${index * 0.6}s`;
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    cards.forEach((card) => observer.observe(card));
  });