const boardSpaces = document.querySelector('.board-container').children;
let spacesArray = [];
for (k = 0; k < 9; k++) {
     spacesArray[k] = boardSpaces[k]
}

spacesArray.forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault();
        e.target.textContent = "o";
    })
})