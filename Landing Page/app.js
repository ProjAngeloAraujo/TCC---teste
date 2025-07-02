const items = document.querySelectorAll('.item');
let current = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % items.length;
  showSlide(current);
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  showSlide(current);
});