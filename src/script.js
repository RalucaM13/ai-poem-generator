function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

//build the api url
//call api using axios
//display the generated poem

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "b13fe4d2a8e30dd1a60bbd2oaf1tb1be";
  let context =
    "You are a poetry expert and love to write beautiful poems in the style of Alphonse de Lamartine, Edgar Allan Poe and Charles Baudelaire. Your mission is to generate a 4 line poem in basic HTML and separate each line with a </br>. Each line should also be separated by a comma, and the last line should have an ellipsis at the end, followed by this emoji 🪻. Please do not include a title.   Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
