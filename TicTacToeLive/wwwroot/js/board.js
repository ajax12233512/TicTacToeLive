const boardSpaces = document.querySelector('.board-container').children;
console.log(mark)
let spacesArray = [];
for (k = 0; k < 9; k++) {
     spacesArray[k] = boardSpaces[k]
}

sessionStorage.setItem("board-state", [
    "", "", "",
    "", "", "",
    "", "", ""
])

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
    spacesArray[spot].textContent = mark;
})