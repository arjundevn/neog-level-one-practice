var btn = document.querySelector(".btn-submit");

var inputText = document.querySelector("textarea[name='input']");
var outputText = document.querySelector(".output");

btn.addEventListener("click", clickEventHandle);

url = "https://api.funtranslations.com/translate/minion.json";

function clickEventHandle() {
    fetch(url+ "?" + "text=" +inputText.value)
    .then(response => response.status)
    .then(status => {
        if(status == 200){
            outputText.innerText = "Status code is "+status+". Success";
        }
        else if(status == 404){
            alert("Page not found")
        }
        else if(status == 401){
            alert("You are not logged in")
        }        
    }).catch(errorHandler)
}
 

function errorHandler(error) {
    alert("Server is busy. Please try after sometime..    "+error);
    console.log(error);
}
