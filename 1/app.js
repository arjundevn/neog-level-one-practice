add = document.querySelector(".add");
subtract = document.querySelector(".subtract");
multiply = document.querySelector(".multiply");
divide = document.querySelector(".divide");
ans = document.querySelector("h2")


function operate(operation) {
    num1 = Number(document.querySelector("#num1").value);
    num2 = Number(document.querySelector("#num2").value);
    if (operation === "add") {
        console.log(num1+num2); 
        return (num1 + num2);
        
    }
    else if (operation === "subtract") {
        return (num1 - num2)
    }
    else if (operation === "multiply") {
        return (num1 * num2)
    }
    else if (operation === "divide") {
        return (num1 / num2)
    }
}


add.addEventListener("click", function result() {
    ans.innerHTML = "Result: "+operate("add")
})

subtract.addEventListener("click", function result() {
    ans.innerHTML = "Result: "+operate("subtract")
})

multiply.addEventListener("click", function result() {
    ans.innerHTML = "Result: "+operate("multiply")
})

divide.addEventListener("click", function result() {
    ans.innerHTML = "Result: "+operate("divide")
})

