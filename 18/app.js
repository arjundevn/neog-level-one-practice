var ip = document.querySelector(".ip");
var btn = document.querySelector(".btn")

btn.addEventListener("click", function check() {
    let char = ip.value.length
    console.log(char)
    if ((char%3) == 0) {
        ip.style.color = "red"
    }
    else {
        ip.style.color = "black"
    }
})