var readline =  require('readline-sync');
var studentNames = [];
var ut=[];
var pf = [];
var f = []

for(var i=1; i<3; i++) {
    var name = readline.question("Enter the name ofstudent "+i+": ");
    studentNames.push(name);

    var unitTestMarks = readline.question("Enter the Unit Test Marks of student "+i+": ");
    ut.push(Number(unitTestMarks));

    var preFinalMarks = readline.question("Enter the Pre Final Marks of student "+i+": ");
    pf.push(Number(preFinalMarks));

    var finalMarks = readline.question("Enter the Final Marks of student "+i+": ");
    f.push(Number(finalMarks));
    console.log("\n");

} 

function highestunitTestMarks() {
    return Math.max(...ut)
}

function highestpreFinalMarks() {
    return Math.max(...pf)
}

function highestfinalMarks() {
    return Math.max(...f)
}

console.log("Student with the highest Unit test marks: "+studentNames[Number([ut.indexOf(highestunitTestMarks())])]);

console.log("\nStudent with the highest Pre Final marks: "+studentNames[Number([pf.indexOf(highestpreFinalMarks())])]);

console.log("\nStudent with the highest Final marks: "+studentNames[Number([f.indexOf(highestfinalMarks())])]);

function avg(arrayName) {
    var total = 0;
    for(var i = 0; i < arrayName.length; i++) {
        total += arrayName[i];
    }
    return total / arrayName.length;
}

console.log("\nAverage Unit test marks:"+avg(ut));

console.log("\nAverage Pre Final marks:"+avg(pf));

console.log("\nAverage Final marks:"+avg(f));
