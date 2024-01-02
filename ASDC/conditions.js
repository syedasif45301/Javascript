//CONDITIONS-1:

//1.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways using if else ,ternary operator.

//if-else:
// let a=12;
// let b=54;
// if(a>b){
//     console.log('a is greater than b');
// }
// else{
//     console.log('a is less than b');
// }

//ternary-operator:
// (a>b)?console.log('a is greater than b'):console.log('a is less than b');


//2.checking entered number is even or odd

// let num=prompt('Enter a num:')
// if(num%2==0){
//     document.write(`${num} is an even numner`);
// }
// else{
//    document.write(`${num} is an odd number`);
// }



//3.checking age and suggesting a feedback

// let age=prompt('Enter your age:')
// if(age>=18){
//     document.write(`You are old enough to drive`)
// }
// else{
//     document.write(`You are left with ${18-age} years to drive`)
// }



//4.finding largest of 3 numbers

// let one=46
// let two=49
// let three=112
// if(one>two && one>three){
//     console.log('one is greater:',one)
// }
// else if(two>three && two>one){
//    console.log("two is greater:",two)
// }
// // if(three>one && three>two)
// else {
//     console.log('three is greater:',three)
// }


//5.switch case example

// let day='thursday'
// switch(day){
//     case 'monday':console.log('working day');
//                     break;
//     case 'tuesday':console.log('meeting day');
//                     break;
//     case 'wednesday':console.log('crafting day');
//                     break;
//     case 'thursday':console.log('roaming day');
//                     break;
//     case 'friday':console.log('prayer day');
//                     break;
//     case 'saturday':console.log('movie day');
//                     break;
//     case 'sunday':console.log('fun day');
//                     break;

//     default:console.log('out off weekend days');
//             break;
// }


//--------------------------------------------------------------

//CONDITIONS-2:

/*You are creating a role-based access control system. Write a function that checks if a user 
has permission to perform a certain action. Users can have roles of "admin," "user," or "guest.
" The actions include "create," "read," "update," and "delete." Define the permissions in an 
object and use conditional statements to check if a user can perform the requested action. 
Input : checkPermission(userRole, action) Output: "Permission granted."*/


const permissions={

admin:{
    create:'yes',
    read:'yes',
    update:'yes',
    delete:'yes',
},

guest:{
    create:'yes',
    read:'yes',
    update:'no',
    delete:'no',
},
user:{
    create:'yes',
    read:'yes',
    update:'yes',
    delete:'no',

},

};

function checkPermission(userRole, action) {
    // Check if the user role and action are defined in permissions
    if (permissions[userRole] && permissions[userRole][action])
     {
      return "Permission granted.";
    } 
    else 
    {
      return "Permission denied.";
    }
  }
  
  // Example usage
  const userRole = "admin";
  const action = "update";
  console.log(checkPermission(userRole,action));;