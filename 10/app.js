
var btn = document.querySelector('.btn');
var op = document.querySelector('.op');

btn.addEventListener("click", function submit() {
    var ip = document.querySelector(".ip")
    if (ip.value.length > 9){
       ip.style.backgroundColor = "green";
       btn.disabled = "true";
       op.style.display = "none"
    }
    else 
    {
        ip.style.backgroundColor = "red";
        op.innerText = "Please enter a minimum of 10 characters"

    }
});


