obj1 = {
    name: "Ram",
    age: 25,
    yuga: "Treta",
    power: 2500
}

obj2 = {
    name: "Krishna",
    age: 31,
    yuga: "Dwarpar",
    power: 2325
}

function age(obj1, obj2) {
    if (obj1.age>obj2.age){
        console.log(obj1.name+ " is elder\n");
    }
    else {
        console.log(obj2.name+ " is elder\n");
    }
}

age(obj1, obj2);

function power(obj1, obj2) {
    if (obj1.power>obj2.power){
        console.log(obj1.name+ " has more power\n");
    }
    else {
        console.log(obj2.name+ " has more power\n");
    }
}

power(obj1, obj2);

function powerPoints(obj1, obj2) {

    let ramPowerPoints = obj1.name.length *35;
    let krishnaPowerPoints = obj2.name.length *35;
    
    if (ramPowerPoints>krishnaPowerPoints){
        console.log(obj1.name+ " has more power points\n");
    }
    else {
        console.log(obj2.name+ " has more power points\n");
    }
}

powerPoints(obj1, obj2);