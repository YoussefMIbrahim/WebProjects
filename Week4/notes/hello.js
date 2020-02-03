console.log('hello world');

let name = 'youssef';
let todayTemp = 33;

console.log(`My name is ${name} and today's temp is ${33}`);
console.log(todayTemp);

// function that checks if the given gpa is within the valid range
function checkGpa(gpa) {
    if (gpa < 0 || gpa > 4){
        return false
    }
    return true;
}

function joinString(city , state){
    return`${city}, ${state.toUpperCase()}`
}

adress = joinString('minneapolis','mn');
console.log(adress);
// running this in terminal shows some useful stuff
// adressTest = joinString('minneapolis')
// console.log(adressTest)

function testArguments(){
    for (i = 0; i < arguments.length; i++){
        console.log(i)
    }
}
// you can loop over the length of the arguments. arguments being everything given to the function even with no specific
// variable?
let test = testArguments(1,2,3,4,5,5,6,7,9);
console.log(test);