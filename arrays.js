// Arrays ...
// change in Array and length of array
let lovelyAnimals = ["lion", "cat", "zebra"];
console.log(lovelyAnimals);
console.log(lovelyAnimals[1]);
lovelyAnimals[1] = "bear";
console.log(lovelyAnimals);
console.log(lovelyAnimals.length);

// methods of Arrays 
// push ,pop(Add or remove item from end and is fast)
//  shift ,unshift(add and remove from strt and slow bcz it move items forword and then add or remove)
let myfvrtVvegetable = ["pea", "lady Finger", "carrot"];
myfvrtVvegetable.push("potato");
console.log(myfvrtVvegetable);
myfvrtVvegetable.pop();
console.log(myfvrtVvegetable);
// shift,unshift
myfvrtVvegetable.unshift("potato");
console.log(myfvrtVvegetable);
myfvrtVvegetable.shift();
console.log(myfvrtVvegetable)
console.log("done")


// Clone and Spread operator
let fruits1 = ["mango", "banana", "apple", "grapes"];
let fruit2 = fruits1
console.log(fruit2)

let petsName = ["puppii", "titu", "rubee"];
let pets = [...petsName, "rani", "mairii"];
console.log(pets);

// LOOPS
// for loop
for (let i = 0; i < pets.length; i++) { console.log(pets[i].toUpperCase()) }
// whileloop
let i = 0;
while (fruits1.length_1) { console.log(fruits1); fruits1++ }
// forof loop
for (let fruit of fruits1) { console.log(fruit) }
console.log("done")
// forin loop
for (let index in petsName) { console.log(petsName[index]) }

// OBJECTS
let person = {
    name: "haleema",
    age: 21,
    gender: "female",
    hobbies: ["guitar", "music"]
}
console.log(person.name)
person.age = 20;
console.log(person.age)
// add keyWords pairs 
person["gender"] = "female"
console.log(person);
// loop  in object
for (let key in person) { console.log(key, ":", person[key]) }
// to store multiple user information
let users = [{
    "name": "haleema",
    "age": "21",
    "Gender": "female"
},
{
    "name": "uzair",
    "age": "41",
    "Gender": "male"
}, {
    "name": "bisma",
    "age": "31",
    "Gender": "female"
}]
console.log(users);
console.log(users["1"]);
