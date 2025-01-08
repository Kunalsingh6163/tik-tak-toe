let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player X, player O

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.textContent = "X";
      turnO = false;
    } else {
      box.textContent = "O";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

function showWinner(winner) {
  msg.innerHTML = `Congrats winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

function matchTie() {
  msg.innerHTML = `Match Tie Start New Game`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
}

newGame.addEventListener("click", resetGame);
restBtn.addEventListener("click", resetGame);
