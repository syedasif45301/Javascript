//LET ,VAR AND CONST :

//const values have block scope and they are constant and they cannot be re-declared and updated 
const a=123;  
//console.log(a);


//var values have global(functional) scope that is they can be updated and re-declared easily
var b="ViratKohli";

//let values also have block scope and they can be updated but canno be re-declared
// let c="anushka";
// c="king";
// var b="MSDhoni";
// console.table([a,b,c]);

// function a1(){
// let c="sakshi";
// console.log(c);
// }
// a1();
// console.log(c);

/*--------------------------------------------------------------------------------------------- */

//TYPE CONVERSION PRACTICE:

//printing a number value and checking its type 
let someNumber=45;
// console.log(someNumber)
// console.log(typeof someNumber)


//converting a number to string 
let someString=String(someNumber)
// console.log(someString)
// console.log( typeof someString)

//checking typeof 1 
let val=1;
// console.log(typeof val)

//converting val 1 to boolean
let bol=Boolean(val)
// console.log(typeof bol)

//checking typeof "33asf"
let sValue="33asf"
// console.log(typeof sValue)

//converting sValue to Number
let newNumber=Number(sValue)
// console.log(newNumber)


//checking typeof NaN
// console.log(typeof NaN)

/*-------------------------------------------------------------------------------------------------- */


//STACK(Primitive) AND HEAP(Non-primitive) MEMORY

/*Primitive datatypes:(Stack)
    Null
    Number
    String
    Symbol
    Boolean
    BigInt
    Undefined



 Non-primitive datatypes:(Heap)
  Objects
  Array
  Function

*/



//Stack() Example:
/*
let myText="Hello"

let newText=myText                  //here a copy of original text is shared to newText
newText="World"                    // here copied value is changed to other new value which will not affect the original text present in myText
console.log(myText);              //printing myText value
console.log(newText);            //printing newText value


//Heap() Example:

let obj={
    name:"kaleem",
    age:24
}
let newObj=obj                  //here a reference is created to heap() by both obj and newObj which points to same destination
console.log(obj)                //printing obj values
console.log(newObj)             //printing newObj values

console.log(newObj.age=32);    //here updating age value by newObj which means changing original value present in heap() i.e both obj and newObj values will change simultaneously
console.log(obj)               //printing updated values of obj
console.log(newObj)            //printing updated values of newObj  

*/
/*------------------------------------------*/

//String methods:

/*
let str=new String('helloWorld')
console.log(str.substring(0,4))
console.log(str.slice(0,4))
console.log(str.indexOf('e'))
console.log(str.lastIndexOf('l'))
console.log(str.charAt(4))
console.log(str.includes('World'))
console.log(str.length)
console.log(str.replace('hello','hurry'))
*/