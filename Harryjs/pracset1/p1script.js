//1.create a variable of type string and try to add number to it

let str="Hello"
console.log(str+22)


//using typeof opearator to check its type
let strNew=str
console.log(typeof strNew)
console.log(typeof(str))


//creating const object 

const obj={
    name:"Asif",
    age:24,
    gender:"male"
}
console.log(obj);
console.log(obj['age']=18);
console.log(obj);


//adding new key in above obj

obj['place']='Hyd'
console.log(obj);


//creating word-meaning dictionary using objects

const dict={
    happy:"feeling good",
    sad:"not feeling well",
    hurry:"doing something fast",
    ride:"driving a car or a bike",
    depress:"feeling guilt and uncomfortable"
}
console.log(dict);

console.log(dict['depress']);
console.log(dict['happy']);
