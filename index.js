const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");

let player;
let computer;
let random;

rockBtn.addEventListener("click", rock);
paperBtn.addEventListener("click", paper);
scissorBtn.addEventListener("click", scissor);

function rock() {
  document.getElementById("myLabel1").innerHTML = "rock";
  player = "rock";
  common();
  player = "rock"
    ? computer == "rock"
      ? (resultText.innerHTML = "You Draw!")
      : computer == "paper"
      ? (resultText.innerHTML = "You Loose!")
      : (resultText.innerHTML = "You Win!")
    : (resultText.innerHTML = "You Win!");
}

function paper() {
  document.getElementById("myLabel1").innerHTML = "paper";
  player = "paper";
  common();
  player = "paper"
    ? computer == "paper"
      ? (resultText.innerHTML = "You Draw!")
      : computer == "scissor"
      ? (resultText.innerHTML = "You Loose!")
      : (resultText.innerHTML = "You Win!")
    : (resultText.innerHTML = "You Win!");
}

function scissor() {
  document.getElementById("myLabel1").innerHTML = "scissor";
  player = "scissor";
  common();
  player = "scissor"
    ? computer == "scissor"
      ? (resultText.innerHTML = "You Draw!")
      : computer == "rock"
      ? (resultText.innerHTML = "You Loose!")
      : (resultText.innerHTML = "You Win!")
    : (resultText.innerHTML = "You Win!");
}

function common() {
  random = Math.floor(Math.random() * 3 + 1);

  switch (random) {
    case 1:
      computer = "rock";
      break;

    case 2:
      computer = "paper";
      break;

    case 3:
      computer = "scissor";
      break;
  }
  document.getElementById("myLabel2").innerHTML = computer;
}
