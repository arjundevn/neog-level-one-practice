var ip = document.querySelector("textarea");
var sub = document.querySelector(".btn");
var op = document.querySelector("span");
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var timer;

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

sub.addEventListener("click",function acceptInput() {
    var ip =document.querySelector("textarea").value;
    op.innerHTML = ip;
    op.style.fontSize= "xx-large"
    stop.disabled = true;
})

start.addEventListener("click", function startColor() {
    stop.disabled = false;
    start.disabled = true;
    startTimer();
})

stop.addEventListener("click", function stopColor() {
    stop.disabled = true;
    start.disabled = false;
    stopTimer();
})

function startTimer() {
    timer = setInterval(function() {
        op.style.color = randColor();
    }, 1000);
}
 
function stopTimer() {
    clearInterval(timer);
}