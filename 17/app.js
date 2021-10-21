var readline = require("readline-sync");


var news = readline.question("\nWhat is the news you heard?\n");
var source = readline.question("\nWhat is the source of this news?\n");

if (source === "whatsapp" || source === "facebook"){
    console.log("\nDon't believe things on FB and Whatsapp")
}