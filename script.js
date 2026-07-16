alert("Welcome to Tic Tac Toe Game! \n\nPlayer 1: O \nPlayer 2: X \n\n it always start with player 1's preference i.e ( 0 )");

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newgamebtn = document.querySelector("#newgamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

let name1 = document.querySelector("#player1");
let name2 = document.querySelector("#player2");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1 === "O" ? name1.value : name2.value);
        return;
      }
    }
  }

  // Draw Check
  let count = 0;

  for (let box of boxes) {
    if (box.innerText !== "") {
      count++;
    }
  }

  if (count === 9) {
    msg.innerText = "Game Draw!";
    msgcontainer.classList.remove("hide");
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
        box.innerText = "O";
        box.style.color = "blue";
      turnO = false;
    } else {
        box.innerText = "X";
        box.style.color = "red";
      turnO = true;
    }

    box.disabled = true;

    checkWinner();
  });
});

newgamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
