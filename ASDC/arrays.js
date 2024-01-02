//ARRAY-1:
/*
//empty array
let arr=[];
console.log(arr);

//array with more than 5 elements
let newarr=[1,2,3,4,5,6,7]
console.log(newarr)

//length
console.log("length:",newarr.length)

//first item of array
console.log("first item:",newarr[0])
// console.log("first item:",newarr.shift())      //here it fetches out the first item which makes changs to original array

//last item of array
console.log("last item:",newarr[6])
// console.log("last item:",newarr.pop())        //here it fetches out the first item which makes changs to original array

//middle item
console.log("middle item:",newarr[3])


//declaring different types of datatypes in array
let mixedDataTypes=["hello","world",786,'A',12,null,undefined,true]
console.log("length of array:",mixedDataTypes.length);
console.log(mixedDataTypes);

let itCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]
console.log(itCompanies);
//lenth
console.log("No.of comapnies:",itCompanies.length);
//first company
console.log("first comapany:",itCompanies[0])
//middle company
console.log("middle comapany:",itCompanies[3])
//last company
console.log("last comapany:",itCompanies[6])

//caps 
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

//printing array like sentence using join()
console.log(itCompanies.join()+" are big IT companies");

//checking apple is present in array or not
console.log(itCompanies.includes('Apple')?itCompanies[3]+" company exist":"company not found")
*/

//-----------------------------------------------------------------------------------------------------------------------------

//ARRAY-2:

/*
var shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)

//adding meat in beginning using unshift()
console.log(shoppingCart.unshift('Meat'))
console.log(shoppingCart)

//adding sugar at end using push()
console.log(shoppingCart.push('Sugar'))
console.log(shoppingCart)

//removing honey from array 
console.log("splice:removing honey");
console.log(shoppingCart.splice(4, 1))
console.log(shoppingCart)


//modifying tea to green tea in array 
console.log("splice:modify tea to green tea");
console.log(shoppingCart.splice(3, 1, 'Green Tea'))
console.log(shoppingCart)

//In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list. 
let countries = ['nepal', 'japan', 'india', 'korea', 'africa', 'saudi', 'dubai']
console.log(countries);
console.log(countries.includes('india') ? "INDIA" : countries.push('india'));
console.log(countries)

//Concatenate the following two arrays and store it in a fullStack variable. ['HTML', 'CSS', 'JS', 'React'] ['Node','Express', 'MongoDB'] 

let frontEnd=['HTML', 'CSS', 'JS', 'React']
let backEnd=['Node','Express', 'MongoDB']

// let fullStack=frontEnd+','+backEnd                   //concatinating through 3rd variable
// console.log(fullStack)

console.log(...frontEnd,...backEnd);                    //concatinating through spread 

*/

//---------------------------------------------------------------------------------------------------------------------------------------------------


//ARRAY-3:

/*The following is an array of 10 students ages: 
var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
-Sort the array and find the min and max age 
-Find the median age(one middle item or two middle items divided
 by two) 
-Find the average age(all items divided by 
number of items) 
-Find the range of the ages(max minus min) 
-Compare the value of (min - average) and (max - average),
 use abs() method */

/*
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages);

//sort
console.log("sorting:",ages.sort());

//min age
console.log("min age:",Math.min(19, 22, 19, 24, 20, 25, 26, 24, 25, 24))

//max age
console.log("max age:",Math.max(19, 22, 19, 24, 20, 25, 26, 24, 25, 24))

//median age
console.log("median age:",ages[4]/2);

//average age
console.log("average age:",(19+22+19+24+20+25+26+24+25+24)/10);

//range of ages
console.log("range of ages:",26-19)

//min-avg
console.log("min-avg:",Math.abs(19-22.8))

//max-avg
console.log("max-avg:",Math.abs(26-22.8))

*/




/* You are developing a word game. Write a function that takes an 
array of words and returns a new array containing only the words 
with more than three letters.*/

// let arrWords=["Hello","Hi","Bye","Good","Bad","Pink","Sky","welcome","to","king"]

// arrWords.forEach((value)=>{
//    if(value.length>3){
//    console.log(value);
//    }
// })




/*You are building a shopping cart. Write a JavaScript that removes 
 an item from the cart based on the item's name. 
*/
