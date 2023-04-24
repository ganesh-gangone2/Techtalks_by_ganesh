let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");



btn1.onclick = function() {
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "white";
    btn2.style.color = "green"
    btn2.classList.add("buttons")

}

btn2.onclick = function() {
    btn2.style.backgroundColor = "";
    btn1.style.backgroundColor = "white";
    btn2.style.color = "white"
    btn1.style.color = "green"
    btn1.classList.add("buttons")

}