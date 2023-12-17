const arrayTest=["ashu",12,true,"1212"];
console.log(arrayTest);
// ====================================================
// TRAVERSAL OF LOOP



// 1.traditional
for(let i =0;i<arrayTest.length;i++)
{
    console.log(arrayTest[i])
}


// 2.for in 
for(let i in arrayTest)
{
    console.log(i);
}

// 3.for of
for(let i of arrayTest)
{
    console.log(i);
}


// 4.forEach--->returns undefined
arrayTest.forEach(function(elements,index)
{
    console.log(`${elements} at ${index}`);
})
// 5.find returns first element which satisfied condition and take callack function as parameter
function findCallback(elements)
{
    return elements>10;
}
const k= arrayTest.find(findCallback);
console.log(k);


// ########################################################################################################################
// SEARCHING METHODS

// 1.indexOf whose first parameter is item and second is starting index
console.log(arrayTest.indexOf(12,0));

// 2.lastIndexOf whose first parameter is item and second  is last index
console.log(arrayTest.lastIndexOf("1212",2));


// 3.includes whose first parameter is item and second is start
console.log(arrayTest.includes("1212",0));



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// SORT
console.log(arrayTest.sort());



// **********************************************************************************************************************
// CRUD
// here push and unshift(addition operation) returns new length while pop and shift(removal operation) returns element.


// 1.PUSH->add the element in last
arrayTest.push("jaiswal")
console.log(arrayTest);


// 2.POP->remove the last element
arrayTest.pop();
console.log(arrayTest);

// 3.UNSHIFT->add the element in first
arrayTest.unshift("king");
console.log(arrayTest);

// 4.SHIFT->remove the first element
arrayTest.shift();
console.log(arrayTest);




// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// MAP,FILTER,REDUCE


// 1.MAP->returns new array
const arrayTest2=[12,34,45,"121"];
const newArray=arrayTest2.map((elements,index)=>{return elements*2});
console.log(newArray);



// 2.FILTER->returns new array which satisy the condition
const arrayTest3=[13,56,12,111,78];
function greaterThan(element)
{
    return element>12;
}
const newArray2=arrayTest3.filter(greaterThan);
console.log(newArray2);


// 3.REDUCE->method which process on each element and give single value like sum
const output=arrayTest3.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output);