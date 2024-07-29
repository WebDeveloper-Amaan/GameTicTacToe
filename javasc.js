let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX,playerO
let count = 0; //To Track Draw

const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

boxs.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked:)");
        if (turn0) {  //palyerO
            box.innerText = "O";
            turn0 = false;
        } else { //playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        count++;

        let isWinner = checkWinner();
    
        if (count === 9 && !isWinner) {
          gameDraw();
        }
});
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const disableBoxes = () => {
    for (let box of boxs) {
      box.disabled = true;
    }
  };

  const enableBoxes = () => {
    for (let box of boxs) {
      box.disabled = false;
      box.innerText = "";
    }
  };  
  
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const checkWinner = (e)=> {
    for(let patterns of winpattern) {
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxs[patterns[0]].innerText,boxs[patterns[1]].innerText,boxs[patterns[2]].innerText);

        let pos1Val = boxs[patterns[0]].innerText;
        let pos2Val = boxs[patterns[1]].innerText;
        let pos3Val = boxs[patterns[2]].innerText;
    

        if(pos1Val !="" && pos2Val !="" && pos3Val!=""){
            if(pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
Reset.addEventListener("click", resetGame);