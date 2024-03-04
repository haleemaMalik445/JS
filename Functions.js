// FUNCTION DECLARATION

function intro(){
     console.log("precious girl")
}
intro();
intro();
intro();
// example 2
function sumThreeNumbers(number1,number2,number3){
     return (number1+number2+number3)
}
console.log(sumThreeNumbers(5,6,7));

// example 3
function IsEven(number){
     if(number%2===0) return true;
     else return false;
}
console.log(IsEven(9));

// example 4
function firstCharacter(string){
     return string[0];
}
console.log(firstCharacter("haleema"));
// example 5
function target(array){
     for(i=0;i<array.length;i++)
     return array[1]
}
console.log(target(["iqra","tanzeela","javeria"]));

// FUNCTION EXPRESSION
// (to store function in a variable is function expression)
const myintro=function(){console.log("my name is bimi malik")}
myintro();

const AdditionThreeNumbers=function(number1,number2,number3){
     return (number1+number2+number3);
}
console.log(AdditionThreeNumbers(2,7,9));

// ARROWS FUNCTION
// if parameter is one we can remove parenthese
// and if the function is one line we can remove return 
const YoYoBrok=()=>{console.log("YOYO honeysingh");}
YoYoBrok();

const SumtwoNum=(num1,num2)=>{
      return num1+num2
     }
console.log(SumtwoNum(2,3))

// PARAMETER destructure(used in object and react)
// ist method
const gems={
     fullName:"hina",
     age:22,
     gender:"female",
}
function getdetails(obj){
     console.log(gems.fullName);
     console.log(gems.gender);
}
const print=getdetails(gems);
console.log(print);

// Call back function
// it is a function passed as an argument to another function..when we 
// call a function it should store in a variable
const calculation=function(num1,num2,func){
return func(num1,num2)
}
const multiply=function(){
     return num1+num2;
}
const result=calculation(5,7,multiply);
console.log(result);
const  names=["haleema","noor","sana"];
const name=function(index){
return names[0]
}
name(names[1]);
console.log("done");
// METHODS OF ARRAYS
// FOR each pass index and used for loops
const numbers=[4,2,5,8];
numbers.forEach(function(number){
     console.log(number*2)
})
const childrenIdentity=[
     {
          child:"biya",
          rollNo:11,
          gender:"male",
     },{
          child:"meer",
          rollNo:13,
          gender:"female",
     },{
          child:"reeshi",
          rollNo:14,
          gender:"male",
     }
]
childrenIdentity.forEach(
     function(object){
          console.log(object.rollNo)
     }
)
// MAP FUNCTION
// it also gives array
let dollars=[1,5,3,6]
const price=dollars.map(
     function(number){
          return number+number;
     }
);
console.log(price);

// FILTER FUNCTION
const jublees=[1,33,88,73,935,90,54]
const fill=jublees.filter(function(number){
     return number% 2===0;
})
console.log(fill);
// REDUCE METHOD
// accumulator(jis ki initialValue hum set karty hain e.g 0 or 100 )
// currentValue(jo product ki value htii ha)
// then they give return
// accumulator currentValue    return
//    0             120         0+120=120
//    120           150         120+150=270   
let yooArray =[
     { productid:1,
      productname:"mobile",
      price:120

     },{
          productid:2,
      productname:"tv",
      price:150
     },{
          productid:3,
      productname:"laptop",
      price:190
     }
]
let beTotal=yooArray.reduce(function(accumulator,currentValue){
     return accumulator+currentValue.price
},0)
console.log(beTotal);
// SORT METHOD 
// for ascending(a-b)for descending(b-a)
const cartoons=[{
     productid:1,
     productname:"tom",
     price:240
},{   productid:2,
     productname:"jerry",
     price:310},{   productid:3,
          productname:"panther",
          price:190}]
const lowToHigh=cartoons.sort(function(a,b){return a.price-b.price});
console.log(lowToHigh);
// 2nd method for strings
const places=["sabari","wahcantt","karachi","lahore"]
places.sort();
console.log(places)
// FIND METHOD
let emplyes=[{
     userId:1,
     fullName:"jabar hussain",
     age:34
},{
     userId:2,
     fullName:"alishba anjum",
     age:34
},{
     userId:3,
     fullName:"iqra naeem",
     age:34
}]
const findidentity=emplyes.find(function(user){
     return emplyes.userId===2;
})
console.log(findidentity);
          