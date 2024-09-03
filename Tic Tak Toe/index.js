let boxes = document.querySelectorAll(".box");
let ResetButton = document.querySelector(".resetButton");
let newGameButton = document.querySelector(".newGame");
let messageContainer = document.querySelector(".message-container");
let msg = document.querySelector("#msg");
const winLine = document.querySelector(".win-line");

let tern0 = true;
const winPatterens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let span = document.createElement("span");
    if (tern0 === true) {
      span.innerText = "O";
      span.classList.add("o-color");
      tern0 = false;
    } else {
      span.innerText = "X";
      span.classList.add("x-color");
      tern0 = true;
    }
    box.appendChild(span);
    box.disabled = true;
    checkWinner();
    ResetButton.classList.remove("hide");
  });
});


const showWinner = (winner,pattern) => {
  console.log(pattern);
  
  msg.innerText = `Congratulations Winner is   ${winner}`;
  messageContainer.classList.remove("hide");
  pattern.forEach((index) => {
    boxes[index].classList.add("zoom-animation"); 
  });
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = ""; 
    box.classList.remove("zoom-animation");
    box.classList.remove("o-color", "x-color","zoom-animation");
    messageContainer.classList.add("hide");
  }
};

const checkWinner = () => {
  for (let pattern of winPatterens) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log(pos1, "winner");
        showWinner(pos1,pattern);
      }
    }
  }
};

const resetGame = () => {
  tern0 = true;
  enableBoxes();
};

ResetButton.addEventListener("click", resetGame);
