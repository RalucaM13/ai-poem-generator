function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The rose is blue in winter",
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
