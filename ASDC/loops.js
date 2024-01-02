//LOOPS:

//1.Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log("even=",i);
//     }
// }

//2.Use for loop to iterate from 0 to 100 and print only odd numbers.
// for(let i=0;i<=100;i++){
//     if(i%2!==0){
//     console.log("odd=",i);
//     }
// }


//3.Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum=0;
// for (let i = 0; i <=100; i++) {
    
//     sum=sum+i;
   
// }

// console.log("Sum of all numbers:",sum);






//4.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let sum1=0;
// let sum2=0;
// for (let i = 0; i <=100; i++) {
//     if(i%2==0){
//         sum1=sum1+i;
        
//     }
//     else{
//         sum2=sum2+i;
     
//     }
// }
// console.log("sum of even:",sum1)
// console.log("sum of odd:",sum2);







//5.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let sum3=0;
// let sum4=0;
// for (let i = 0; i <=100; i++) {
//     if(i%2==0){
//         sum3=sum3+i;
        
//     }
//     else{
//         sum4=sum4+i;
     
//     }
// }
// console.log("sum of even:",sum3);
// console.log("sum of odd:",sum4);
// console.log(`${sum3},${sum4}`);



//6.["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]


let countries=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
console.log("here:",countries);
console.log(countries.length);

//printing countries whose length is greater than equal to 8
countries.forEach((value) => {
    if(value.length>=8){
            console.log(value);
    }
});


//printing countries whose l;ength is upto 5
countries.forEach((value) => {
    if(value.length<=5){
            console.log(value);
    }
});


for (let countries = 11; countries >=0; countries--) {
    console.log(countries);
    
}