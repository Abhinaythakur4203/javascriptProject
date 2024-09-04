const boxes = document.querySelectorAll(".btn");
const resetbtn = document.getElementById("reset-btn");
const msg = document.getElementById('win-msg');

let turn = true;


let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

//  console.log(winCondition);

msg.style.display = 'none';

boxes.forEach(box => {
    box.addEventListener('click', () => {

        if (turn) {
            box.innerText = "O"
            turn = false;
        } else {
            box.innerText = "X"
            turn = true;
        }
        box.style.BackgroundColor = "rgba(214, 210, 210, 0.767)";
        box.disabled = true;


        winChecker();
    }
    )

});

const foundWinner = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const winMSG = (ms) => {
    msg.innerText = ms + " :WINS"
    msg.style.display = 'flex';
}
function winChecker() {
    winCondition.forEach(pattern => {

        const pos1 = boxes[pattern[0]].innerHTML;
        const pos2 = boxes[pattern[1]].innerHTML;
        const pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 != "" && pos1 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {

                foundWinner();
                winMSG(pos1);

            }

        }


    });
}



resetbtn.addEventListener('click', () => {

    turn = true;
    msg.style.display = 'none'
    for (b of boxes) {
        b.disabled = false
        b.innerText = "";

    }
});