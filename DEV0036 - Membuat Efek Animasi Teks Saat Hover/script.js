const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

document.querySelector(".text-content").onmouseover = (event) => {
  let iteration = 0;
  const text = event.target.dataset.value;
  clearInterval(event.target.interval);

  event.target.interval = setInterval(() => {
    event.target.innerText = text
      .split("")
      .map((letter, index) =>
        index < iteration ? letter : letters[Math.floor(Math.random() * 26)]
      )
      .join("");

    if (iteration >= text.length) {
      clearInterval(event.target.interval);
    }

    iteration += 1 / 5;
  }, 40);
};

const animTexts = document.querySelectorAll(".text-animate");
animTexts.forEach((element) => {
  element.addEventListener("mouseover", () => {
    changeTextLetter(event);
  });
});
