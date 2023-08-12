const boardSpaces = document.querySelector('.board-container').children;

let spacesArray = [];
for (k = 0; k < 9; k++) {
     spacesArray[k] = boardSpaces[k]
}

spacesArray.forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault();
        var spot = e.target.dataset.spot;     
        connection.invoke("MakeMove", gameId, spot).then(function () {
            console.log("move sent")
        })
    })
})

connection.on("RecieveMove", function (spot) {
    spacesArray[spot].textContent = "0";
})