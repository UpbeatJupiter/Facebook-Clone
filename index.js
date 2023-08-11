
setTimeout(trendyolMessage, 4000);
setTimeout(newMessage, 6000);

function trendyolMessage() {

    document.getElementById("trendyolMessage").innerHTML = "typing...";
    document.getElementById("hepsiburadaStatus").style.color = "green";
    document.getElementById("hepsiburadaMessage").innerHTML = "Online";


}


function newMessage() {

    document.getElementById("newMessage").style.display = "block";
    document.getElementById("trendyolMessage").innerHTML = "Online";

}

function closeMessage() {
    document.getElementById("newMessage").style.display = "none";
}

function sendMessage() {
    var myInput = document.getElementById("myMessage");
    var myText = myInput.value;

    var containerChat = document.getElementById("message-container");
    containerChat.innerHTML += "<p class='from-me lastMine'>" + myText + "</p>";
    // containerChat[0].innerHTML += "<div class= 'from-me messages'><div class='message lastMine'>" + myText + "</div>";


    if (myText == "Evet") {
        alert("Tebrikler Abone Oldunuz!");
    } else if(myText == "Hayır") {
        document.getElementById("newMessage").style.display = "none";
    }

}
