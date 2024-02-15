// Hello World
console.log("Hello World's");

// Methods of String
let myName = "haleema";
console.log(myName.toUpperCase());
let yourName = "Sana";
console.log(yourName.toLowerCase());
let fullName = "bambs";
console.log(fullName.slice(1, 3));

// Conversion
// string to number
let animal = "zebra";
animal = Number(animal);
console.log(typeof animal);
//number to string
let insect = "ant";
insect = String(insect)
console.log(typeof insect);

//String Concatenation(Join 2 strings)
let animal1 = "zebra";
let animal2 = "lion";
let animals = animal1 + " " + animal2
console.log(animals);

//Template String
let theName = "haleema";
let age = 21;
let mySelf = `my name is ${theName} and my age is ${age}.`
console.log(mySelf);

//Booleans(true/false) and Comparison Operator
let num1 = 21;
let num2 = 31;
console.log(num1 < num2)
console.log(num1 == num2);
console.log(num1 === num2);

// Truthy And Falsy Values
// truthy values(All values except falsy values)and they give if condition 
// Falsy values(0,Null ,Undefined,False)and they give else condition

// if,else condition
let page = 21;
if (page < 21) { console.log("chapter1") } else { console.log("chapter2") }

// $$(check both condition) and ||(check one or both condtion)
let theirName = "haleema";
let theirAge = 21;
if (theirName[0] === "h" && theirAge === 21) { console.log("right") }

let userName = "noori";
let userAge = 20;
if (userName[0] === "n" || userAge > 21) { console.log("done") }
// if we change || to && it will not print because 1 value is wrong

// LooPs
for (let i = 21; i < 24; i++) { console.log(i) }
console.log("for loop");
let j = 1;
while (j <= 3) { console.log(j); j++ }
console.log("while loop");
let a = 1;
do { console.log(a); a++ } while (a < 3);
console.log("do while");

// Break and continue statement
// In break remaining line will break..In continue only particular word will be removed
for (m = 3; m < 10; m++) { if (m === 8) break; console.log(m) }
console.log('done')
for (n = 3; n < 10; n++) { if (n === 6) continue; console.log(n) }
console.log("done")

// If/ElseIf Statement
let day = 6;
if (day === 1) {
    console.log("Tuesday")

} else {
    if (day === 2) { console.log("Wednesday") }
    if (day === 3) { console.log("Thursday") }
    if (day === 4) { console.log("Friday") }
    if (day === 5) { console.log("Saturday") }
    if (day === 6) { console.log("Sunday") }
    if (day === 0) { console.log("Monday") }
}