let animals = ['penguin', 'bear', 'beer'];
// can store different types of data in one array

console.log(animals);
console.log(animals[2]);

animals[2] = 'mouse';
// can add to an element out of range, in between will be filled with undefined
animals[4] = "what're you doing here ";
//push function adds an element to the end of the array. even skips undefineds in the middle
//shift function is the opposite of pop; removes and stores first element
animals.push('dog');
let firstAnimal = animals.shift();
console.log(animals);
console.log(firstAnimal);
// unshift adds an element at the start of the array
animals.unshift('penguin is back on top');
console.log(animals);
// can use indexOf to get index vale of something
console.log(animals.indexOf('bear'));
// reverse reverses the order of elements
let allAnimals = animals.join(' '); // joins the entire array into a string, separated by commas by default
console.log(allAnimals);