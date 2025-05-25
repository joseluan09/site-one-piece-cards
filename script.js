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