// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var roomCodeInput = document.getElementById("roomCode");
var startGameBtn = document.getElementById("startGameBtn");
var joinGameBtn = document.getElementById("joinGameBtn");
var inputUsername = document.getElementById("username");
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function checkUsername(username) {
    if (username == '') {
        alert("Please Enter Username");
        return false;
    }
    else {
        return true
    }
}

startGameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (checkUsername(inputUsername.value) === false) {
        return;
    } else {
        var gameId = makeid(12);
        sessionStorage.setItem("username", username.value);
        sessionStorage.setItem("mark", "x");
        sessionStorage.setItem("gameId", gameId);
        sessionStorage.setItem("join", false);
        document.location.replace("/Board");
    }
});

joinGameBtn.addEventListener("click", (e) => {
    if (checkUsername(inputUsername.value) === false) {
        return;
    } else {
        e.preventDefault();
        var gameId = roomCodeInput.value;
        sessionStorage.setItem("username", username.value);
        sessionStorage.setItem("mark", "o");
        sessionStorage.setItem("gameId", gameId);
        sessionStorage.setItem("join", true);
        document.location.replace("/Board");
    }

})



