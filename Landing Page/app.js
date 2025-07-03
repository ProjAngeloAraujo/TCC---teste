const items = document.querySelectorAll('.item');
let current = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

// Botão "Próximo"
document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % items.length;
  showSlide(current);
});

// Botão "Anterior"
document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  showSlide(current);
});

// Avanço automático a cada 10 segundos
setInterval(() => {
  current = (current + 1) % items.length;
  showSlide(current);
}, 10000); // 10000ms = 10 segundos