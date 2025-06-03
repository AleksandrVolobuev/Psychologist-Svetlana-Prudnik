

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });
});

// Находим элемент с классом menu
const menu = document.querySelector('.menu');

// Добавляем обработчик клика
menu.addEventListener('click', function() {
// Переключаем класс open
this.classList.toggle('open');
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



document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
