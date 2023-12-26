//STRINGS EXERCISE:

//toUpperCase()
let str = "Entertainment"
let newstr = str.toUpperCase()
console.log(newstr)

//toLowerCase()
let newstr1 = str.toLowerCase()
console.log(newstr1)

//slice()
let word = "Hello World"
console.log(word.slice(0, 5))

//split()
let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
let newcomp = company.split(',')
console.log(newcomp)

//indexof()
let lang = "Javascript"
console.log(lang.indexOf('a'))


//lastindexof()
console.log(lang.lastIndexOf('a'))

//concatination two strings using template literals
let a = "Javascript is used"
let b = " to add functionalities to the web app"
console.log(`${a} ${b}`)

//includes()
let sen = "This course is all about Javascript"
console.log(sen.includes('Javascript'))

/* Use console.log() and escape characters to print the following pattern.
                 1 1 1 1 1
                 2 1 2 4 8 
                 3 1 3 9 27 
                 4 1 4 16 64 
                 5 1 5 25 125
*/

console.log(`\t 1 1 1 1 1 \n\t 2 1 2 4 8 \n\t 3 1 3 9 27 \n\t 4 1 4 16 64 \n\t 5 1 5 25 125`)




/*Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 50000 from salary per month, 10000 annual bonus.'*/

let sentence="'He earns 50000 from salary per month, 10000 annual bonus."
console.log(`total Annual income of the person = ${50000*12+10000}`)