
var op = document.querySelector(".op")
var h1 = document.querySelector(".h1-button")
var h2 = document.querySelector(".h2-button")
var h3 = document.querySelector(".h3-button")

function heading(h, msg) {
    var ip = document.querySelector(".ip").value;
    if (h === "h1"){
        op.innerHTML = "<h1>"+ip+"</h1>"
    }
    else if (h === "h2"){
        op.innerHTML = "<h2>"+ip+"</h2>"
    }
    else if (h === "h3"){
        op.innerHTML = "<h3>"+ip+"</h3>"
    }
}

h1.addEventListener("click",function heading1() {
    heading("h1");
})

h2.addEventListener("click",function heading2() {
    heading("h2");
})

h3.addEventListener("click",function heading3() {
    heading("h3");
})