// METHODS OF ARRAYS 
// foreach(used for loops)
const fruits=[2,5,7,8,9,4]
fruits.forEach((a)=>{console.log(a)})
// Map Method (if we want to do with an array,,,it return a new array)
const goats=[3,4,5,7,94]
const byAdding=goats.map((number)=>{return number+5})
console.log(byAdding);
//Filter Method(if we want to filter from an array e.g even ,odd)
const horses=[3,56,67,75,89,36,78,785,57,36]
const eVen=horses.filter((array)=>{return array%2===0})
console.log(eVen);
// 2nd example
let classChairs=[{
    class1:9,
    section:"A",
    rollno:4

},{  class1:5,
    section:"B",
    rollno:9


},{  class1:8,
    section:"C",
    rollno:10
}]
const oddRollNo=classChairs.filter((array)=>{return array.rollno %2!==0})
console.log(oddRollNo);
// REDUCE METHOD
//accumulator  currentValue   return
// 2               3           5
//5+3              5            13           
const georges=[45,758,38,84,6,35]
const totalNum=georges.reduce((accumulator,currentValue)=>{return accumulator+currentValue})
console.log(totalNum);
// 2nd Example
const userTake=[{
    productName:"Laptop",
    productPrice:120000
},{
    productName:"Mobile",
    productPrice:75000
},{
    productName:"tv",
    productPrice:40000
}]
const payment=userTake.reduce((total,price)=>{return total+price.productPrice},0)
console.log(payment);
// SORT METHOD
const garbar=[33,36,24,857,45,93,49,35]
const assendingOrder=garbar.sort((a,b)=>{return a-b})
console.log(assendingOrder)
const dessendingOrder=garbar.sort((a,b)=>{return b-a})
console.log(dessendingOrder);
// ARRANGEMENT OF ALPHABETS (first capital letters then small)
const reArrangeByAlphabets=["Alishba","areeba","javeria","Nimra","Sania,Bareera"]
reArrangeByAlphabets.sort()
console.log(reArrangeByAlphabets);
// FIND METHOD
const cuteAnimals=["cat","monkey","owl","zebra"]
const toFindOut=cuteAnimals.find((array)=>{return array.length===8})
console.log(toFindOut);
// 2nd example
let AlfaisalMall=[{
    studentsModel:1,
    ProjectName:"Kidney",
    studentIdentity:"anum"
},{
    studentsModel:2,
    ProjectName:"Heart",
    studentIdentity:"zohra"
},{
    studentsModel:3,
    ProjectName:"Lungs",
    studentIdentity:"fatima"
}];
const forFinding=AlfaisalMall.find((object)=>
{return object.studentsModel===3})
console.log(forFinding);

// EVERY METHOD(this method return boolean)
let jozafs=[2,4,7,8,4]
let check=jozafs.every((array)=>{return array%2===0})
console.log(check);
// 2nd example
// (condition check to all.if all apply to condition thn return true)
let assemblyStudents=[{
    studentnumber:1,
    studentName:"fatime",
     rollNo:11,
    mobilePrice:1200},
     {
        studentnumber:2,
    studentName:"Anaya",
     rollNo:16,
     mobilePrice:4200
     },{
        studentnumber:3,
    studentName:"Sonia",
     rollNo:19,
     mobilePrice:700
     }]
const search=assemblyStudents.every((number)=>{return number.mobilePrice>400})
console.log(search);
// SOME METHOD
// (check if particular element is true )
// realistic example to check price is greater than 4000

let fountains=[23,4,56,56,76,85,8,47]
let toond=fountains.some((number)=>{number%2===0})
console.log(toond)
// FILL METHOD
// (to fill in array)

// SPLICE METHOD
// to delete and insert


