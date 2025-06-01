  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('open'); // для анимации крестика
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