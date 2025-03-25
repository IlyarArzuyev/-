// script.js
const slides = document.querySelectorAll('.slide');
let current = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    // Смещение от текущего слайда
    const offset = index - current;

    // Чем дальше слайд от текущего, тем сильнее его смещение и поворот
    const translateX = offset * 40;    // 40% смещения между карточками
    const rotateY = offset * 15;      // 15 градусов поворота на каждую позицию

    slide.style.transform = `translateX(${translateX}%) rotateY(${rotateY}deg)`;
  });
}

// События на кнопках
document.getElementById('prevBtn').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlides();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlides();
});

// Инициализируем расположение при загрузке
updateSlides();
