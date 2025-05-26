const galaxy = document.querySelector(".galaxy");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("twinkle");

  const size = Math.random() * 2 + 1 + "px";
  const top = Math.random() * 100 + "%";
  const left = Math.random() * 100 + "%";

  star.style.width = size;
  star.style.height = size;
  star.style.top = top;
  star.style.left = left;

  galaxy.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 5000);
}

setInterval(createStar, 300);

// -------- Cartas --------

const cards = document.querySelectorAll('.card');
const preview = document.getElementById('cardPreview');
const previewImg = document.getElementById('previewImage');

cards.forEach(card => {
  card.addEventListener('click', () => {
    preview.style.display = 'flex';
    previewImg.src = card.src;
    previewImg.alt = card.alt;
    void previewImg.offsetWidth;
    preview.classList.add('show');
  });
});

function closePreview() {
  preview.classList.remove('show');
  setTimeout(() => {
    preview.style.display = 'none';
  }, 300);
}

preview.addEventListener('click', (e) => {
  if (e.target === preview) {
    closePreview();
  }
});
