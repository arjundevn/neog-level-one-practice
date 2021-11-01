let ip = document.querySelector(".ip");
let sub = document.querySelector(".sub");


let op = document.querySelector(".op");

sub.addEventListener("click", function submit() {
    let vowels = 0;
    let consonants = 0;
    let vowelsText = "aeiou".split("");
    let consonantsText = "bcdfghijklmnpqrstvwxyz".split("");

    let ip = document.querySelector(".ip").value.toLowerCase().split("");
    for (let i=0;i<ip.length;i++) {
        if(vowelsText.includes(ip[i])){
            vowels++;
        }
         else if(consonantsText.includes(ip[i])){
            consonants++;
        }
    }

    op.innerHTML = ("Number of vowels in above text: "+vowels+". Number of consonants in above text: "+consonants)
})

