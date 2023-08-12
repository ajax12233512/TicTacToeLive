
var messageContainer = document.getElementById("message-container");
var sendBtn = document.getElementById("sendBtn");
var message = document.getElementById("message");

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    connection.invoke("SendMessage", message.value).catch(function (err) {
        return console.error(err.toString());
    });
})

connection.on("RecieveMessage", function (message) {
    var newItem = document.createElement("li");
    newItem.textContent = message;
    console.log("message sent", message);
    messageContainer.appendChild(newItem);
})