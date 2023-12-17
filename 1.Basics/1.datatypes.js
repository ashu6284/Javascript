"use strict";
// treat all code as new javascript code

console.log(2+2);
console.log(2+"2");
console.log("2"+2);
console.log(2-2);
console.log(2-"20");
console.log("20"-2);
// from the above code we can say that if type conversion of string gives the appropriate result of arithmetic operation then string will convert in number by js.

const s="ashu";
console.log(typeof(s)) //string
console.log(typeof(null)) //object
console.log(typeof(undefined)) //undefined


let a=34;
console.log(a++);
console.log(a);
console.log(++a);
console.log(a);

// slice,splice
// splice(index,how many delete,newvalues);


let name="ashujaiswal";

const newName=name.slice(-1);
console.log(newName);

// trim,replace
// trim is usd to remove white spaces from the string
// replace(old value,new value) only first matching values



const userName="     ashuashu     ";
console.log(userName.trim());
console.log(userName.replace("s","j"));


