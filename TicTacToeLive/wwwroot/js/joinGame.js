var connection = new signalR.HubConnectionBuilder().withUrl("/gameHub").build();
var messageContainer = document.getElementById("message-container");
var sendBtn = document.getElementById("sendBtn");
var message = document.getElementById("message");
var gameId = sessionStorage.getItem("gameId");
var username = sessionStorage.getItem("username");
var join = sessionStorage.getItem("join");
async function start() {
    try {
        await connection.start();
        console.log("SignalR Connected.");
    } catch (err) {
        console.log(err);
        setTimeout(start, 5000);
    }
};

start().then(function () {
    connection.invoke("CreateGame", gameId);
});
//figure out why connection is on on on state

connection.on("RecieveMessage", function (message, fromUsername) {
    var newItem = document.createElement("li");
    newItem.textContent = fromUsername + " : " + message;
    console.log("message sent", message);
    messageContainer.appendChild(newItem);
})

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    connection.invoke("SendMessage", message.value, gameId, username).catch(function (err) {
        return console.error(err.toString());
    });
})

