var url = "https://mock-practice.prakhar10v.repl.co/items";
var alltd = document.querySelectorAll("td");
var op = document.querySelector("h4");
var btn = document.querySelector("button")
var table = document.querySelector("table")

btn.addEventListener("click", function a() {
    fetch(url)
        .then(response=> response.json())
        .then(json => insertValues(json))
    table.style = "display:block;"
    alltd.style = "margin:3rem";
})

function insertValues(json) {
    alltd[0].innerHTML = json[0].id;
    var temp = 0;
    var prices = [];

    for(var i =0; i<4;i++){
        alltd[temp].innerHTML = json[i].id;
        temp++;
        alltd[temp].innerHTML = json[i].item;
        temp++;
        alltd[temp].innerHTML = json[i].price;
        temp++;
        prices.push(json[i].price)
    }

    op.innerHTML = "Maximum amount spent is  "+Math.max(...prices)+" on "+json[prices.indexOf(Math.max(...prices))].item
    
}