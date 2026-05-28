const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const btnGroup = document.getElementById("btn-group");

yesBtn.addEventListener("click", () => {
  window.location.href = "flower.html";
});

function moveNoButton() {
  const viewportPadding = 12;
  const minJumpDistance = Math.min(window.innerWidth, window.innerHeight) * 0.25;
  const currentRect = noBtn.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = Math.max(viewportPadding, window.innerWidth - noBtnRect.width - viewportPadding);
  const maxY = Math.max(viewportPadding, window.innerHeight - noBtnRect.height - viewportPadding);

  let randomX = viewportPadding;
  let randomY = viewportPadding;

  for (let attempt = 0; attempt < 12; attempt += 1) {
    randomX = Math.floor(Math.random() * (maxX - viewportPadding + 1)) + viewportPadding;
    randomY = Math.floor(Math.random() * (maxY - viewportPadding + 1)) + viewportPadding;

    const dx = randomX - currentRect.left;
    const dy = randomY - currentRect.top;
    const distance = Math.hypot(dx, dy);

    if (distance >= minJumpDistance) {
      break;
    }
  }

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  noBtn.style.right = "auto";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

noBtn.addEventListener(
  "touchstart",
  (event) => {
    event.preventDefault();
    moveNoButton();
  },
  { passive: false }
);
