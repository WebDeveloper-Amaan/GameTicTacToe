let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");

let turn0 = true; //playerX,playerO

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
    });
});