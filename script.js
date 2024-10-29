let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-btn");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let moves = 0;
let tryagain = document.querySelector(".Tryagain");

let turnO = true;

const winpatterns = [
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
    console.log("box was clicked");
    moves++;
    console.log(moves);
    if (turnO === true) {
      box.innerText = "O";
      box.style.color = "green";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "#b0413e;";
      turnO = true;
    }
    box.disabled = true;

    let isWinner = checkWinner();

    if (moves == 9 && !isWinner) {
      console.log("draw");
      draw();
      moves = 0;
    }
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
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");

  disableBoxes();
};
const checkWinner = () => {
  for (let x of winpatterns) {
    let pos1val = boxes[x[0]].innerText;
    let pos2val = boxes[x[1]].innerText;
    let pos3val = boxes[x[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        moves = 0;
        showWinner(pos1val);
      }
    }
  }
};
const draw = () => {
  tryagain.classList.remove("hidden");
  disableBoxes();
};

const resetGame = () => {
  turnO = true;

  enableBoxes();
  msgContainer.classList.add("hide");
  tryagain.classList.add("hidden");
};
newGameBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
reset_button.addEventListener("click", resetGame);
