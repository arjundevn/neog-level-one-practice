
sub = document.querySelector(".sub");
op = document.querySelector(".op");
op2 = document.querySelector(".op2");
image = document.querySelector(".img");

url = "https://api.github.com/users/"

sub.addEventListener("click", function a() {
    ip = document.querySelector(".ip").value;
    fetch(url+ip)
        .then(response=> response.json())
        .then(json => takeName(json))
})

function takeName(json) {
    console.log(json);
    op.innerHTML = `<h2><a href=${json.html_url}>Name: ${json.name}</a></h2>`
    takeRepo(url+ip+"/repos")
    image.innerHTML = `<img width="250" height="250" src=${json.avatar_url}>`
}

function takeRepo(u) {
    fetch(u)
        .then(response=> response.json())
        .then(json => listRepo(json))
}

function listRepo(a) {
    console.log(a)
    op2.innerHTML= "";
    var b = ""
    for(var i=1;i<a.length;i++){
        b += `<li><a href=${a[i].html_url}>${a[i].name}</a></li>`
    }
        op2.innerHTML += `<ol>${b}</ol>`
        console.log(op2.innerHTML)
}