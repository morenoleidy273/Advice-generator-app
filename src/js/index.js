function api() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      const result = data.slip.advice;

      const advice = document.querySelector(".advice");
      advice.innerText = `"${result}"`;

      const num = data.slip.id;

      const id = document.querySelector(".id");
      id.innerText = `ADVICE #${num}`;
    });
}

window.addEventListener("load", api);

let b = document.querySelector(".btn");

b.addEventListener("click", api);
