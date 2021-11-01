
sub = document.querySelector(".sub");
op = document.querySelector(".op");

url = "https://api.github.com/users/"

sub.addEventListener("click", function a() {
    ip = document.querySelector(".ip").value;
    fetch(url+ip)
        .then(response=> response.json())
        .then(json => takeRepo(json))
})

function takeRepo(json) {
    console.log(json.name);
    // op.innerHTML = json;
}