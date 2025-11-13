const rows = 5;
const cols = 6;
const numOfCells = rows * cols;

let todaysWord;
let guessWord = "";
let attempts = 0;

//of type string:list
let rowObj = {};

//get word-grid
const wordGrid = document.getElementById("word-grid");
const keys = document.querySelectorAll(".key");
const cells = document.querySelectorAll(".cell");

keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    guessWord += key.innerText;
    console.log(guessWord);

    if (guessWord.length >= rows) {
      attempts += 1;
    }

    cells.forEach(() => {});
  });
});

for (let index = 0; index < numOfCells; index++) {
  let cell = document.createElement("div");
  cell.classList.add("cell", "grid-item");

  wordGrid.append(cell);
}

getWordOfTheDay();

async function getWordOfTheDay() {
  todaysWord = await fetch("https://words.dev-apis.com/word-of-the-day")
    .then((response) => {
      return response.json();
    })
    .then((data) => data["word"])
    .catch((err) => {
      console.log(err);
    });
  console.log(todaysWord);
}
