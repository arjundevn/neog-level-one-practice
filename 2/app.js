
var op = document.querySelector(".output");
var done = document.querySelector(".done");
var inc = document.querySelector(".increase");
var dec = document.querySelector(".decrease");

done.addEventListener("click", function takeInput() {
    var ip = document.querySelector(".input").value;
    op.innerHTML = ip;
})

inc.addEventListener("click", function changesize(input) {
    var present = (op.style.fontSize).slice(0,3);
    op.style.fontSize = String(Number(present)+2)+"px";
})

dec.addEventListener("click", function changesize(input) {
    var present = (op.style.fontSize).slice(0,3);
    op.style.fontSize = String(Number(present)-2)+"px";
})
 

