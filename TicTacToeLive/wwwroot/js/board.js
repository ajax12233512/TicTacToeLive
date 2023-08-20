const boardSpaces = document.querySelector('.board-container').children;
const turnLabel = document.getElementById('turnLabel');
const markLabel = document.getElementById('markLabel');
const closeModalBtn = document.getElementById("closeModalBtn")
const modalText = document.getElementById("modalWinnerSpan");
const modalTitle = document.getElementById("modalTitleSpan");
markLabel.textContent = "Playing as " + mark.toLocaleUpperCase();
let turn;

if (!localStorage.getItem("turn")) {
    localStorage.setItem("turn", "X");
    turn = localStorage.getItem("turn");
    turnLabel.textContent = turn + " Turn"
} else {
    turn = localStorage.getItem("turn");
    turnLabel.textContent = turn + " Turn"
}



let spacesArray = [];
for (k = 0; k < 9; k++) {
     spacesArray[k] = boardSpaces[k]
}

if (!localStorage.getItem("board-state")) {
    localStorage.setItem("board-state", JSON.stringify([
        "none", "none", "none",
        "none", "none", "none",
        "none", "none", "none"
    ]))
} else {
    var currentBoardState = JSON.parse(localStorage.getItem("board-state"));
    for (k = 0; k < spacesArray.length; k++) {
        if (currentBoardState[k] != "none") {
            spacesArray[k].textContent = currentBoardState[k];
        }
    }
}



function updateBoard(boardArray, spot, mark) {
    boardArray[spot] = mark;
    localStorage.setItem("board-state", JSON.stringify(boardArray));
}

function showWinModal() {
    var winModal = document.getElementById('winModal');
    winModal.classList.add('show');
    winModal.style.display = 'block';
    winModal.style.color = "black";
    var modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop', 'fade', 'show');
    document.body.appendChild(modalBackdrop);
}

function closeWinModal() {
    var winModal = document.getElementById('winModal');
    winModal.classList.remove('show');
    winModal.style.display = 'none';
    var modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
        modalBackdrop.remove();
    }
    localStorage.setItem("board-state", JSON.stringify([
        "none", "none", "none",
        "none", "none", "none",
        "none", "none", "none"
    ]));
    var currentBoardState = JSON.parse(localStorage.getItem("board-state"));
    for (k = 0; k < spacesArray.length; k++) {
        spacesArray[k].textContent = "";
    }
}



closeModalBtn.addEventListener("click", () => {
    closeWinModal();
    document.getElementById("modalWinnerSpan").textContent = ""
})

function checkWinner(boardArray, mark) {
    if (boardArray[0] === mark && boardArray[1] === mark && boardArray[2] === mark) {
        return true
    } else false
    if (boardArray[3] === mark && boardArray[4] === mark && boardArray[5] === mark) {
        return true
    }
    if (boardArray[6] === mark && boardArray[7] === mark && boardArray[8] === mark) {
        return true
    } else false
    if (boardArray[0] === mark && boardArray[3] === mark && boardArray[6] === mark) {
        return true
    } else false
    if (boardArray[1] === mark && boardArray[4] === mark && boardArray[7] === mark) {
        return true
    } else false
    if (boardArray[2] === mark && boardArray[5] === mark && boardArray[8] === mark) {
        return true
    } else false
    if (boardArray[0] === mark && boardArray[4] === mark && boardArray[8] === mark) {
        return true
    } else false
    if (boardArray[2] === mark && boardArray[4] === mark && boardArray[6] === mark) {
        return true
    } else false
    
}

spacesArray.forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault();
        if (mark === localStorage.getItem("turn").toUpperCase()) {
            var spot = e.target.dataset.spot;
            connection.invoke("MakeMove", gameId, spot, mark).then(function () {

            })
        } else {
            return;
        }

    })
})

connection.on("RecieveMove", function (spot, mark) {
    var currentBoardState = JSON.parse(localStorage.getItem("board-state"));
    localStorage.getItem("turn") == "X" ? localStorage.setItem("turn", "O") : localStorage.setItem("turn", "X");
    turnLabel.textContent = localStorage.getItem("turn") + " Turn";
    updateBoard(currentBoardState, spot, mark);
    for (k = 0; k < spacesArray.length; k++) {
        if (currentBoardState[k] != "none") {
            spacesArray[k].textContent = JSON.parse(localStorage.getItem("board-state"))[k];
        }
    }
    if (checkWinner(JSON.parse(localStorage.getItem("board-state")), mark) === true) {
        showWinModal();
        if (mark.toUpperCase() === sessionStorage.getItem("mark")) {
            modalTitle.textContent = "Congratulations";
            modalText.textContent = "Winner";
        } else {
            modalTitle.textContent = "Maybe Next Time";
            modalText.textContent = "Lose";
        }
    }
})