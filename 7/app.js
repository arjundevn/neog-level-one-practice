btn = document.querySelector(".btn");
url= "https://api.coinbase.com/v2/prices/spot?currency=USD";
op = document.querySelector(".output")
btn.addEventListener("click", price)


function price() {
    fetch(url)
    .then(response => response.json())
    .then(json => op.innerText = ("$ "+json.data.amount));
}