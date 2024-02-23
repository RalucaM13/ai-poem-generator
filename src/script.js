function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The rose is blue in winter",
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
