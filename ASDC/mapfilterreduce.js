//MAPS:

//1.Use map to create a new array by changing each course to uppercase in the course array. eg: [’html’, ‘css’, ‘js’] OP : [’HTML’, ‘CSS’, ‘JS’]
// let ed=["html","css","js"]
// console.log(ed);
// let ed1=ed.map((value)=>{
//     return value.toUpperCase();
// })
// console.log(ed1);




//2.Use map to create a new array by changing each number to square in the numbers array.
// let numbers=[2,3,4,5,6,7,8]
// console.log("numbers array:",numbers);
// let newNum=numbers.map((value)=>{
//     return value*value;
// })
// console.log("numbers square:",newNum);




//3.You have an array of objects with products and their prices. Use the map function to create a new array containing the products' names only.
// let arrObj=[
//     {
//         products:'hat',
//         price:10

//     },

//     {
//         products:'mat',
//         price:15
//     },

//     {
//         products:'pad',
//         price:5
//     }
// ]

// console.log(arrObj);

// let newArrObj=arrObj.map((value)=>{
//     return value.products;
// })
// console.log(newArrObj);



//4.You have an array of temperatures in Celsius. Use the map function to convert each temperature to Fahrenheit using the formula (Celsius * 9/5) + 32
// let celsius=[24,32,44,36]
// console.log("celsius:",celsius);
// let fahrenhit=celsius.map((value)=>{
//         return (value*9/5)+32;
// })
// console.log("fahrenhit:",fahrenhit);




//5.You have an array of objects representing students with names and ages. Use the map function to create a new array of objects with the students' names and their year of birth. Assume the current year is 2023. eg: [ { name: "abc", age: 25 }, { name: "xyz", age: 19 }, { name: "efg", age: 30 } ];

// let students=[
//     {
//         name:'ajju',
//         age:22,
//     },
//     {
//         name:'raju',
//         age:24,
//     },
//     {
//         name:'kaju',
//         age:20,
//     },
// ];
// console.log(students);


// let curYear=2023;

// let newStudents=students.map((value)=>{
 
//     let  YOB = curYear - value.age;
//     return {name:value.name , YOB}
// });
// console.log(newStudents);


//------------------------------------------------------------------------------------------------------------------------------------------


//FILTER:

//1.
// let num=[1,2,3,4,5,6,7,8,9,10,11,12]
// console.log(num);

// let newNum=num.filter((val)=>{
//     return val%2==0;
// })
// console.log("even num:",newNum);



//2.
let country=["dubai","australia","india","singapore","qatar","england"]

// console.log(country);

// let newCountry=country.filter((val)=>{
//     return val.length<6;
// })
// console.log(newCountry);



//3.
// let newF=country.filter((val)=>{
//     return val.startsWith('e')
// })
// console.log(newF);



//4.
// let arrObj=[
//     {
//         products:'hat',
//         price:10

//     },

//     {
//         products:'mat',
//         price:15
//     },

//     {
//         products:'pad',
//         price:5
//     }
// ]

// console.log(arrObj);

// let newArrObj=arrObj.filter((val)=>{
//     return val.price<10;
// })
// console.log(newArrObj);




//5.
// let employees=[
//     {
//         name:'ajju',
//         sal:45000
//     },
//     {
//         name:'raju',
//         sal:55000
       
//     },
//     {
//         name:'kaju',
//         sal:50000
      
//     },
//     {
//         name:'kiran',
//         sal:40000
      
//     },
// ];
// console.log(employees);

// let newEmployees=employees.filter((val)=>{
//     return val.sal>=50000
// })
// console.log(newEmployees);




//------------------------------------------------------------------------------------------------------------------------------------------------------------


//REDUCE:

//1.
// let num=[2,4,3,5,14]
// console.log(num);
// let newNum=num.reduce((p,c)=>{
//     return p+c;
// },0)
// console.log(newNum);



//2.
// let str=["hello","world","welcome","here","comeon"]
// console.log(str);
// let newStr=str.reduce((p,c)=>{
//     return p+c;
// })
// console.log(newStr);




//3.
// let arrObj=[
//     {
//         products:'hat',
//         price:10

//     },

//     {
//         products:'mat',
//         price:15
//     },

//     {
//         products:'pad',
//         price:5
//     }
// ]

// console.log(arrObj);

// let newArrObj=arrObj.reduce((p,c)=>{
//     return p+c.price
// },0)
// console.log(newArrObj);





//4.
// let tran=[
//     {
//         type:'debit',
//         amt:50,
//     },
//     {
//         type:'credit',
//         amt:30,
//     },
//     {
//         type:'debit',
//         amt:10,
//     },
//     {
//         type:'debit',
//         amt:5,
//     },
//     {
//         type:'credit',
//         amt:30,
//     },
//     {
//         type:'debit',
//         amt:20,
//     },
// ]
// console.log(tran);

// let newTran=tran.reduce((d,c)=>{
//     if(c.type=='credit'){
//         return d+c.amt;
//     }
//     else{
//         return d-c.amt
//     }
// },0)
// console.log(newTran);