// Находим элементы
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Получаем ширину слайда (исходя из min-width: 100% для li)
const slideWidth = slides[0].getBoundingClientRect().width;

// Расставляем слайды в линию (горизонтально)
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

// Текущий индекс слайда
let currentSlide = 0;

// Функция для переключения слайдов
function moveToSlide(track, current, target) {
  track.style.transform = `translateX(-${target.style.left})`;
  currentSlide = slides.indexOf(target);
}

// Кнопка «Назад»
prevButton.addEventListener('click', () => {
  // Проверяем, чтобы не выйти за границы
  if (currentSlide > 0) {
    const prevSlide = slides[currentSlide - 1];
    moveToSlide(track, slides[currentSlide], prevSlide);
  } else {
    // Перейти на последний слайд (при желании)
    const lastSlide = slides[slides.length - 1];
    moveToSlide(track, slides[currentSlide], lastSlide);
  }
});

// Кнопка «Вперёд»
nextButton.addEventListener('click', () => {
  // Проверяем, чтобы не выйти за границы
  if (currentSlide < slides.length - 1) {
    const nextSlide = slides[currentSlide + 1];
    moveToSlide(track, slides[currentSlide], nextSlide);
  } else {
    // Перейти на первый слайд (при желании)
    const firstSlide = slides[0];
    moveToSlide(track, slides[currentSlide], firstSlide);
  }
});
