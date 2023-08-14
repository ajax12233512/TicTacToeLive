const boardSpaces = document.querySelector('.board-container').children;
const turnLabel = document.getElementById('turnLabel');
const markLabel = document.getElementById('markLabel');
markLabel.textContent = "Playing as " + mark.toLocaleUpperCase();
let turn = "X";
turnLabel.textContent = turn + " Turn"
let spacesArray = [];
for (k = 0; k < 9; k++) {
     spacesArray[k] = boardSpaces[k]
}

sessionStorage.setItem("board-state", JSON.stringify([
    "none", "none", "none",
    "none", "none", "none",
    "none", "none", "none"
]))

function updateBoard(boardArray, spot, mark) {
    boardArray[spot] = mark;
    sessionStorage.setItem("board-state", JSON.stringify(boardArray));
}

spacesArray.forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault();
        if (mark === turn.toLocaleLowerCase()) {
            var spot = e.target.dataset.spot;
            connection.invoke("MakeMove", gameId, spot, mark).then(function () {

            })
        } else {
            return;
        }

    })
})



connection.on("RecieveMove", function (spot, mark) {
    var currentBoardState = JSON.parse(sessionStorage.getItem("board-state"));
    turn == "X" ? turn = "O" : turn = "X";
    turnLabel.textContent = turn + " turn";
    updateBoard(currentBoardState, spot, mark);
    for (k = 0; k < spacesArray.length; k++) {
        if (currentBoardState[k] != "none") {
            spacesArray[k].textContent = currentBoardState[k];
        }

    }
})