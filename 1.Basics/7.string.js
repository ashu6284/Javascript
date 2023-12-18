const stringTest="ashujaiswal";
const newString=stringTest.toUpperCase();

console.log(stringTest);
console.log(newString);
// returns new string


const stringTest2="     ashu jaiswal";
const newString2=stringTest2.trim();
console.log(stringTest2)
console.log(newString2);
// returns new string remove the space from the start and end

const stringTest3="aarav jaiswal is king";
 const newString3=stringTest3.split(" ");
 console.log(newString3);
 console.log(stringTest3);
//  returns new array means split the string into array on the bassis of argumnet



const myObj={
    ashu:"hey"
}
console.log(myObj["ashu"]);