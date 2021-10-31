var ip = document.querySelector("textarea");
var sub = document.querySelector(".btn");
var op = document.querySelector("span");
var inc = document.querySelector(".inc");
var dec = document.querySelector(".dec");

sub.addEventListener("click",function acceptInput() {
    var ip = Number(document.querySelector("textarea").value);
    if (!ip){
        alert("Please enter a valid number only");
    }
    else if(ip<=0){
        alert("Please enter a positive number only");
    }
    else {
        op.innerHTML = ip;
    }
})

inc.addEventListener("click", function increase() {
    var num = Number(op.innerHTML);
    op.innerHTML = num+1;
    dec.disabled = false;
})

dec.addEventListener("click", function decrease() {
    var num = Number(op.innerHTML);
    op.innerHTML = num-1;
    if (op.innerHTML == 0) {
        dec.disabled = true;
        console.log("av")
    }
})