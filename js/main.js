// selector
const adviceContainer = document.querySelector(".advice");
const adviceId = document.querySelector(".advice__id");
const adviceText = document.querySelector(".advice__text");
const randomAdviceBtn = document.querySelector(".advice__button");
const spinner = document.querySelector(".spinner");

async function getRandomAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  return data.slip;
}

async function updateAdvice() {
  const { id, advice } = await getRandomAdvice();
  adviceId.innerHTML = `advice #${id}`;
  adviceText.innerHTML = `&ldquo;${advice}&rdquo;`;
}

randomAdviceBtn.addEventListener("click", async (e) => {
  e.target.classList.add("spin");
  await updateAdvice();
  e.target.classList.remove("spin");
});

async function init() {
  spinner.classList.add("show");
  await updateAdvice();
  spinner.classList.remove("show");
  adviceContainer.classList.add("show");
}

init();
