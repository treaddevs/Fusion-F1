const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.item');
const leftButton = document.querySelector('.button--left');
const rightButton = document.querySelector('.button--right');
const itemCount = items.length;
let currentPosition = 1;

leftButton.addEventListener('click', function() {
  roll('right');
});
rightButton.addEventListener('click', function() {
  roll('left');
});

function roll(direction) {
  carousel.classList.add(`moving-${direction}`);
  
  if (direction === 'right') {
    currentPosition = currentPosition < itemCount ? currentPosition + 1 : 1;
  } else if (direction === 'left') {
    currentPosition = currentPosition > 1 ? currentPosition - 1 : itemCount;
  }

  for (let i = 0; i < itemCount; i++) {
    const item = items[i];
    let newPosition = currentPosition + i;
    if (newPosition > itemCount) {
      newPosition -= itemCount;
    }
    item.dataset.position = newPosition;
  }

  carousel.addEventListener("transitionend", function() {
    carousel.classList.remove(`moving-${direction}`);
  }, false);

  const activeItem = document.querySelector('.item[data-position="3"]');
  console.log(activeItem);
}