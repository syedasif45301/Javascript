//selecting .parent class
const myParent=document.querySelector('.parent');
console.log(myParent);


//printing .parent class children i.e returned as HTMLCollections
console.log(myParent.children);
console.log(myParent.firstElementChild);
console.log(myParent.lastElementChild);
myParent.firstElementChild.style.color="pink";



//converting HTMLCollections to an Array
const newArr=Array.from(myParent.children);
console.log(newArr);



//Applying forEach on converted Array
const fEch=newArr.forEach((l)=>{
    console.log(l);
    l.style.color="blue";
})



//printing .parent class parent throught child i.e myParent
console.log(myParent.parentElement);




//printing child using childNodes i.e returned as NodeList
console.log(myParent.childNodes);
console.log(myParent.firstChild);
console.log(myParent.lastChild);



//printing .parent parent  thorough child i.e myParent
console.log(myParent.parentNode);


//setting new class Attributes
myParent.setAttribute('class',"parent  newParent");



//printing innerHTML 
console.log(myParent.innerHTML);
// myParent.innerText="good world!";
// myParent.outerHTML='<h1>Good World!</h1>';





//creating new element 
const myH2=document.createElement('h2');
console.log(myH2);


//setting new element class attribute
myH2.setAttribute('class','cls');




//setting new element id attribute
myH2.setAttribute('id','dh2');



//changing text to new text
myH2.innerText="Good morning";


//showing the above created element on browser screen
const onBrowsr=document.body.appendChild(myH2);




//assigning text through createTextNode
const newTxt=document.createTextNode('Welcome');
console.log(newTxt);


//appending to browser screen
const nxTxt=document.body.appendChild(newTxt);



//adding new list elements through a  function and displaying on browser screen
function myF(lang){
const newC=document.createElement('li');
console.log(newC);
newC.setAttribute('class','cls');
newC.setAttribute('id','d1');
newC.appendChild(document.createTextNode(lang));
document.querySelector('.newUl').appendChild(newC);

}
myF("python")
myF("js")


//editing  first child text of list
const e1=document.querySelector('li:first-Child');
console.log(e1);
// e1.innerHTML="new";
// e1.outerHTML='<h3>Heelo</h3>'
e1.innerText="very new";

//removing (delete)  the last list element of ul 
const del=document.querySelector('li:last-Child');
del.remove();