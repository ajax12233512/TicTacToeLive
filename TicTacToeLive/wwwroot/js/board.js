const boardSpaces = document.querySelector('.board-container').children;
console.log(mark)
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
        var spot = e.target.dataset.spot;     
        connection.invoke("MakeMove", gameId, spot, mark).then(function () {
            console.log("move sent")
        })
    })
})

connection.on("RecieveMove", function (spot, mark) {
    var currentBoardState = JSON.parse(sessionStorage.getItem("board-state"));
    console.log(currentBoardState)
    updateBoard(currentBoardState, spot, mark);
    for (k = 0; k < spacesArray.length; k++) {
        if (currentBoardState[k] != "none") {
            spacesArray[k].textContent = currentBoardState[k];
            console.log(currentBoardState[k]);
        }

    }
})