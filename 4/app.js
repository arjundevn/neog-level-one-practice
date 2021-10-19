
var op = document.querySelector(".op h2")
var red = document.querySelector(".red")
var blue = document.querySelector(".blue")
var green = document.querySelector(".green")

function heading(h) {
    var ip = document.querySelector(".ip").value;
    if (h === "red"){
        op.style.color = "red";
        op.innerHTML = ip;
    }
    else if (h === "blue"){
        op.style.color = "blue";
        op.innerHTML = ip
    }
    else if (h === "green"){
        op.style.color = "green";
        op.innerHTML = ip;
    }
}

red.addEventListener("click",function heading1() {
    heading("red");
})

blue.addEventListener("click",function heading2() {
    heading("bl`ue");
})

green.addEventListener("click",function heading3() {
    heading("green");
})