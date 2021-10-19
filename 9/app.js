var btn = document.querySelector(".btn-submit");

var inputText = document.querySelector("textarea[name='input']");
var outputText = document.querySelector(".output");

btn.addEventListener("click", clickEventHandle);

url = "https://api.funtranslations.com/translate/minion.json";

function clickEventHandle() {
    fetch(url+ "?" + "text=" +inputText.value)
    .then(response => response.text())
    .then(json => {
        outputText.innerText = json;
    }).catch(errorHandler)
}
 

function errorHandler(error) {
    alert("Server is busy. Please try after sometime..    "+error);
    console.log(error);
}
