//LET ,VAR AND CONST :

//const values have block scope and they are constant and they cannot be re-declared and updated 
const a=123;  
//console.log(a);


//var values have global(functional) scope that is they can be updated and re-declared easily
var b="ViratKohli";

//let values also have block scope and they can be updated but canno be re-declared
let c="anushka";
c="king";
var b="MSDhoni";
// console.table([a,b,c]);

function a1(){
let c="sakshi";
// console.log(c);
}
a1();
// console.log(c);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------------------------------------------------------------------ 


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

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

//STRING METHODS:

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

/*

//DATE:

let myDate=new Date("12-26-2023");
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString(1-26-2023))

//TIME:

let myDate2=new Date("01-14-2023")
let myTime=Date.now()
console.log(myTime);

*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//ARRAY-METHODS:

/*
let arr=[23,24,26,21,24,57,11,6,85,42]

//length
console.log("length:");
console.log(arr.length)
console.log(arr)

//push()
console.log(arr.push(98))
console.log(arr.push(99))
console.log("push");
console.log(arr)


//pop()
console.log("pop");
console.log(arr.pop())
console.log(arr)

//unshift()
console.log("unshift");
console.log(arr.unshift(1))
console.log(arr)
console.log(arr.unshift(0))
console.log(arr)


//shift()
console.log("shift");
console.log(arr.shift())
console.log(arr)

//join()
console.log("join")
let arr2=[6,4,12]
console.log(arr2.join("-"))

//sort()
console.log("sort")
console.log(arr.sort())


//slice()
console.log("slice");                   //slice performs the operations on copy not on original array and last element in slice is not included 
console.log(arr)
console.log(arr.slice(4,7))
console.log(arr)

//splice()

console.log("splice");                   //splice performs operations on original array and last element is included 
console.log(arr)
console.log(arr.splice(4,4,1,2,3,4))
console.log(arr)

//reverse()
console.log("reverse")
console.log(arr.reverse())

//includes()
console.log("includes");
console.log(arr.includes(98))

//spread()
console.log("spread");
let a1=[1,2,3,4,5]
let a2=[6,7,8,9,10]
console.log(...a1,...a2)                //spread is indicated by (...) operator and the returned value is not an array

//concat()
console.log("concat");
console.log(a1.concat(a2))

//flat()
console.log("without flat");
let newarr=[1,2,3,[4,5,6,7],8,9,[10,11,[12,13]],14]
console.log(newarr);
console.log("with flat");
console.log(newarr.flat(Infinity));

*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
//declaring a symbol variable
const mySym=Symbol('Hello')
console.log([mySym]);

//OBJECTS:

const student={
    name:"Syed Asif",
    age:22,
    gender:"Male",
    course:"FSD",
    email:"syedasif@google.com",
    place:"hyderabad",
    ['mySym']:"NewSymbol"
}
console.log([mySym]);
console.log(typeof [mySym]);
console.log(student);
console.log( typeof student);

// accessing name from student

//NOTE: In js, we can access the objects using 2 different ways ---- <1>(.) operator  <2>[" "] square brakets 

console.log(student.name);                  //accessing name key through (.) operator
console.log(student["name"]);               //accessing name key through [" "] square brakets




//adding new key and value to student object
student["day"]="wednesday";
console.log(student);


//accessing a particular key in student object
console.log(student["place"]);
console.log(student["name"]);


//function
student.greeting=function(){
    console.log(`hello World!....I'm ${this.name}`);      //this is used here...
};
console.log(student.greeting());

 //----------------------------------------------------------------------------------------------------------------------------------------------------------------


//declaring a1,b1,c1,d1 objects
const a1={1:"a1.1",2:"a1.2",3:"a1.3"}
const b1={4:"b1.1",5:"b1.2",6:"b1.3"}
const c1={7:"c1.1",8:"c1.2",9:"c1.3"}
const d1={10:"d1.1",11:"d1.2",12:"d1.3"}

//printing objects
console.log("a1:",a1)
console.log("b1:",b1)
console.log("c1:",c1)
console.log("d1:",d1)

//declaring new obj e1 and assigning a1,b1 objects to it without using assign method
const e1={a1,b1}
console.log("e1:",e1)



//OBJECT METHODS:

//ASSIGN METHOD:
//declaring a new f1 object and assiging all a1,b1,c1, and d1 objects to it through assign() method
console.log("Assign method in Objects");
const f1=Object.assign({},a1,b1,c1,d1)
console.log("f1:",f1);

//KEYS METHOD:
//accessing only keys of  f1 obj
console.log("f1 keys:",Object.keys(f1));

//VALUE METHOD:
//accessing only values of f1 obj
console.log("f1 values:",Object.values(f1))

//ENTRIES METHOD:
//returns keys and values in an array
console.log("f1 keys and values:",Object.entries(f1));

//hasOwnProperty() METHOD:
//used to check the particular key or property exist in ab obj or not
console.log(f1.hasOwnProperty('1'));


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// OBJECT DE-STRUCTURE:

//creating object course
const course={
    coursename:"JS",
    price:999,
    courseInstructor:"hitesh"
}

//printing hitesh
console.log("noraml printing:",course.courseInstructor); 

/*suppose if the samething u need to print multiple times 
then for each time we need to write this much of code
so to overcome this issue we do object destructure

//Example object-destructure
const {courseInstructor:Instructor}=course
console.log("obj-destructure:",Instructor);         //hence by just writing Instructor i can do the same task so this makes less code

*/


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

/*

//FUNCTIONS:
 
   // basically a function is nothing but a block of code which is executed when it is called.This is code reusability technique

   //NOTE: function with no parameters is called DEFAULT FUNCTION


//DEFAULT FUNCTION:

function myFuc(){              // function without parameters

    return "Hello world!"      //This is called as FUNCTION DEFINITION , where we write function_name with paranthesis().words under parenthesis is called PARAMETERS
}

console.log("default function-without parameters:",myFuc());        //This is called FUNCTION INVOCATION , from which we can pass value to the declared function .The passed valued is called ARGUMENTS



//------------------------------------------------------------------------------------------------

//FUNCTION WITH PARAMETERS:

function addTwoNum(n1,n2){          //function with parameters
        return n1+n2;
}
console.log("function with parameters:",addTwoNum(2,3))         //here, 2 and 3 are ARGUMENTS



//-----------------------------------------------------------------------------------------------


//Suppose if we want to prit multiple values then we need to declare multiple paramets.So,to overcome this issue we use concept called SPREAD (...name)

function cartShop(...kart){             //here,(...kart) is nothing but spread concept is used which can hold multiple values and returns it as an array 
    return kart
}
console.log("function with spread concept:",cartShop(100,222,124,1235,1000));


//-----------------------------------------------------------------------------------------------


//FUNCTION WITH ARRAYS

const Arr=["Arr1","Arr2","Arr3"]                                    //normal array
console.log(" Normal Array:",Arr);

function funcArray(anyArray){                                        //declaring a function with some xyz parameter

        console.log("Printing an array using a function")                                   
        return Arr                                                 //here,returning the noraml array which we created previously
}

console.log("Function with arrays:",funcArray(Arr))                 //here,passing the value of normal array to the funcArray() 


//------------------------------------------------------------------------------------------------

//FUNCTION WITH OBJECTS

const newObj={                                                      //normal object
    name:"Prince",
    age:24,
    place:"Hyd"
}
console.log("normal object:",newObj);



function funcObj(anyObj){                                           //declaring a function with some xyz parameter 
        console.log("Printing an object using a function")
        console.log(`newObj name is ${anyObj.name} and place is ${anyObj.place}`);   
    
        return newObj                                             //return will returns the value , where as console.log() usually just prints
}
console.log("Function with object:",funcObj(newObj));


*/

//----------------------------------------------------------------------------------------------------------------------------------------------------

//THIS KEYWORD DIFFERENT USAGES:




//1.GLOBAL CONTEXT:
// console.log(this)                //if we write this line of code i.e  outside of any function then in browser we get window global objects and in node,bun,deno we will get {} empty objects





//2.FUNCTION CONTEXT:    
// function func(){                 
//     console.log(this)            //if we write this  line of code within a function then it also refers to global objects both in console and as well as browsers 
// }
// func()





//3.METHOD CONTEXT:
// const myObj={
//     name:'asif',
//     age:22,
//     welcome:function(){
//         console.log(this)          //when we write this line of code inside a method of an object then it refers to the object that the method was called on.here, both in console and browers does the same work 
// }
// }
// myObj.welcome()





//4.CONSTRUCTOR CONTEXT:
// function myCons(){
//     this.myProperty=44               //it refers to the instance of object being created
// }
// const newQ= new myCons()
// console.log(newQ.myProperty);






//5.EVENT HANDLER CONTEXT:
//<button onclick="console.log(this)">Click me</button>   //In event handlers, such as those used in the DOM, this often refers to the element that triggered the event.






//6.ARROW FUNCTIONS:
// const myObject = {
     
//     myMethod: () => {
//       console.log(this);             //Arrow functions do not have their own this context. Instead, they inherit the this value from the enclosing scope.
//     }
//   };
  
// myObject.myMethod();            // refers to the global object, not 'myObject'



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//PRACTICE SESSION:


//PRINT STATEMENT:
//console.log(this)


//NOTE: function are mainly classified into 3 different types----------<1>function declaration    <2>function expression     <3>anonymous function

//1>FUNCTION DECLARATION is a type of function which is declared with a name
// function myFunction(){
//     console.log('function declaration');
// }
// myFunction()


//2>FUNCTION EXPRESSION is a type of function which is assigned to a varaiable

// let varFunction=function myExp(){
//     console.log("Function expression");
// }
// varFunction()                                                                   //function expression is called with declared varaiable only followed by parenthesis()




//3.ANONYMOUS FUNCTION is a type of function with no name

//we will see this in future 






//FUNCTION CONTEXT:
// function my(){

//     console.log(this)
// }
// my()



//METHOD CONTEXT: it is nothing but declaring a function in an object
// const newD={
//     name:'sdf',
//     age:22,
//     place:function(){
//         console.log(this)
//     }
// }
// // console.log(newD)
// newD.place();




//ARROW FUNCTION:

//Arrow function can be declared in 2 differen types  <1>Normal arrow function--->with curly brackets{}   <2>implicit arrow function--->with parentheis brackets() 


//NOTE: In normal arrow function  return keyword must need be declared ,   but  In implicit arrow function return keyword is not needed



//1.NORMAL ARROW FUCNTION :  FUNCTION WITH CURLY BRACKETS{}
// const xyz= (x,y)=>{
//        return x+y
// }
// // xyz(4,7)
// console.log(xyz(2,4));


//2.IMPLICIT ARROW FUNCTION: FUNCTION WITH PARENTHESIS BRACKETS()

//implicit arrow function for basic operation without parenthesis
// const addTwo=(x,y)=>x+y
// console.log(addTwo(4,4));


//implicit arrow function when we want to print the method of an object  we use parenthesis 
// const new2=(x,y)=>({name:'asif'})
// console.log(new2(3,4));


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

//IMMEDIATELY INVOKED FUNCTION EXPRESSIOS --(IIFE)

//NOTE: Always put semicolon(;) before/after IIFI function to avoid errors.The semicolon is usually indicates the end of the context


//IIFI SYNTAX:

//(function declaration within parenthesis)(function calling within parenthesis just after the end of declaration);



// NAMED IIFI FUNCTION:
// ;
// (function king(){                           //Named iifi is nothing but iifi function with name 
//     console.log('king')
// })();




// UNNAMED IIFI FUNCTION:
// ( ()=>{                                     //Unnamed iifi is nothing but iifi function without name 
//     console.log('king1')
// })();




// ( (name)=>{                                 
//     console.log(`the name is:${name}`)
// })('newking');


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//CONTROL FLOW:

//CONTIDIONAL STATEMENTS:


//NORMAL CONSOLE:
// console.log("this is normal console which is 100% executed when it is called");

//IF CONDITION:
// if(true){
//     console.log("this is a if-condition console, it is printed only if condition is true");
// }






//IF-ELSE CONDITION:
// if(true){
//     console.log("this is a if condition console, executed only when if condition is true");
// }
// else{
//     console.log("this is a else console , executed when if condition is false");
// }






//IF ELSE-IF CONDITION:
// let var_if_else_if=10;
// if(var_if_else_if>100){
//     console.log('this is if');
// }
// else if(var_if_else_if<10){
//     console.log('this is else-1');
// }
// else if(var_if_else_if==50){
//     console.log('this is else-1');
// }
// else{
//     console.log(`this is else,${var_if_else_if}`)
// }






//NESTED IF-ELSE CONDITION:
// let nest_if_else=50;
// if(nest_if_else==50){
//     if(nest_if_else===50){
//         console.log('nested if');
//     }
//     else{
//         console.log('nested else');
//     }
// }
// else{
//     console.log(`${nest_if_else}, is not equal `);
// }







//SWITCH CONDITION:
// const month='march'
// switch(month){
//     case 'jan':console.log('january');
//                break; 
//     case 'feb':console.log('feb');
//                 break;
//     case 'march':console.log('march');
//                 break;
//     case 'april':console.log('april');
//                 break;
//     case 'may':console.log('may');
//                 break;
//     case 'dec':console.log('december');
//                 break;
//     default:console.log("default is printed");
//             break;
// }







//BREAK:                                                    //break is used to immediate exit from a loop,function or a condition
// for(let i=1;i<=5;i++){
//     if(i==3){
//         break;
      
//     }
//     console.log("break:",i)
// }






//CONTINUE:                                                     //continue is used to skip a particular iteration of  a loop,function or a condition
// for(let i=1;i<=5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log("continue:",i)
// }







//LOGICAL AND(&&) OPERATOR:
// const a1=true;
// const a2=true;
// if(a1 && a2){
//     console.log(`Both a1 and a2 conditions  are true`);
// }
// else{
//     console.log("Anyone is false ");
// }







// //LOGICAL OR(||) OPERATOR:
// const b1=10;
// const b2=20;
// if(b1 || b2){
//     console.log(`true`);
// }
// else{
//     console.log('Anyone is false');
// }








//NULLISH COALESCING OPERATOR:(??)

// let valN=null??'some string'                                        //suppose if any of the  variable have value null orelse undefined then to handle it NULLISH COALESCING OPERATOR replaces it with some other text
// console.log(valN);                                          







//TERNARY OPERATOR:(?:)

// let aTer=10;                                                        //ternary operator is just a simplified version of if-else condition  statement 
// (aTer==100)?console.log('true'):console.log('false');



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//LOOPS:


//printing 1 to 10 tables using FOR LOOP

// for (let i = 1; i <=10; i++) {                               //initialization,condition and updation is done at same line only
//     for (let j = 1; j <=10; j++) {
//         // console.log(`innner loop:${j}`);
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
//     console.log(`-------------`);
    
// }









// WHILE LOOP

// let wloop=0;                                                        //initialization
// while(wloop<=5){                                                   //condition
//     console.log(`value of wloop:${wloop}`);
//     wloop++;                                                     //updation
// }






//DO-WHILE LOOP:

// let dloop=15
// do{
//     console.log(dloop);
//     dloop++
// }while(dloop<=10);


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//FOR-OF LOOP: It is a loop where each value is iterated and printed separately just like other loops

//ARRAY WITH FOR OF LOOP
// let new3=[12,3,45,76]
// for (const num of new3) {
//     console.log(num);
// }


//STRING WITH FOR OF LOOP:
// let str="Entertainment"
// for (const value of str) {
//     console.log(value);
// }





// MAPS :  maps are unique values i.e it does not prints the duplicate values  in console


// const  map=new Map()
// map.set('IN',"India")
// map.set('ENG',"England")
// map.set('USA',"United States Of America")
// map.set('ENG',"England")
// map.set('IN',"India")
// console.log(map)                            //printing map values without FOR-OF LOOP        





//FOR-OF LOOP IN MAPS:
// for (const num of map) {
//     console.log(map);               //This line prints the above map in a FOR-OF LOOP  i.e it iterated the number of unique values present in it
// }






//PRINTING ONLY KEYS OF MAP:
// for (const [key] of map) {
//     console.log(key);                   //printing only keys of map
// }





//PRINTING ONLY VALUES OF MAP:
// for (const [key,value] of map) {
//     console.log([value]);                   //printing only values of map
// }





//PRINTING BOTH KEYS AND VALUES OF MAP:
// for (const [key,value] of map) {
//     console.log(key,":",value);             //printing both keys and values of map
// } 




//NOTE: FOR OF LOOP  IS NOT APPLICABLE FOR OBJECTS IN JAVASCRIPT.So, to solve this issue javascript 
//has introduced new concept i.e  FOR-IN  LOOP that is applicable with objects in javascript


//FOR-IN LOOP:


// const obj={
//     js:'javascript',
//     cpp:'cplusplus',
//     html:'HyperTextMarkUpLanguage'
// }
// for (const key in obj) {
 
//   console.log(obj);                   //printig obj using FOR-IN LOOP

// }







    // for (const key in obj) {
 
    //     console.log(key);                   //printig only  keys of obj using FOR-IN LOOP
    // }



    // for (const key in obj) {
 
    //     console.log(obj[key]);                   //printig only values of obj using FOR-IN LOOP
    // }








//ARRAYS WITH FOR-IN LOOP:

// const arr1=["hello","world","welcome","here"]
// for (const key in arr1) {
//   console.log(key);                            //prints the index values of keys
// }





// const arr2=["hello","world","welcome","here"]
// for (const key in arr2) {
//   console.log(arr2[key]);                            //prints  keys of arrays when we write keys in [] along with arrayname
// }



//NOTE: Maps are not applicable for iterate 

//REMEMBER :For objects we use FOR-IN loop in js and For Arrays we use FOR-OF LOOP in js   and these loops were used very less in js

//NOTE: For arrays we mostly use FOR-EACH LOOP  only in js



//FOR-EACH:

let arrFe=["mon","tues","wed","thus","fri"]
// console.log(arrFe);                                         //normal console printing
// arrFe.forEach((value)=>{console.log(value);})              //accessing and printing values of array using FOR-EACH LOOP 

//NOTE:forEach acts like a call back function with no function name


//EXAMPLE:ARRAY OF OBJECTS ------>  [{},{},{}]  accessing the values of array using forEach() loop 

// let newArr=[
//     {
//         language:'javascript',
//         extension:'.js'
//     },
//     {
//         language:'java',
//         extension:'.java'
//     },
//     {
//         language:'python',
//         extension:'.py'
//     },
// ]
// newArr.forEach((value)=>{             
//     console.log(value.language);       
// })

//---------------------------------------------------------------------------------------------------------------------------

