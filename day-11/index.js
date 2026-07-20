const myfun=(a,b,c)=>{
    return a+b+c; // arrow function
}

let out = myfun(12,56,34); 
console.log(out); // 102

console.log(name); // undefined
var name = "John";
//because of hoisting, the variable declaration is moved to the top of its scope, but the assignment remains in place. Therefore, when we try to log the value of name before it is assigned, it returns undefined.

//block scope,global scope
//block scope: variables declared with let and const are block-scoped, meaning they are only accessible within the block they are defined in. Global scope: variables declared with var are function-scoped or globally scoped, meaning they are accessible throughout the entire function or script.
//global scope: variables declared with var are function-scoped or globally scoped, meaning they are accessible throughout the entire function or script.

let myname = "Alice"; // block scope
myname = "Bob"; // global scope
console.log(myname); // Bob

const myname2 = "Charlie"; // block scope
// myname = "David"; // This would cause an error since const variables cannot be reassigned
console.log(myname2); // Charlie

var myname3 = "Eve"; // global scope
myname3 = "Frank"; // global scope
console.log(myname3); // Frank

//JS property hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

//higher-order functions: A higher-order function is a function that takes one or more functions as arguments, returns a function as its result, or both. Higher-order functions allow for more abstract and flexible programming patterns, enabling the creation of reusable and composable code.

//IIFE (Immediately Invoked Function Expression): An IIFE is a JavaScript function that runs as soon as it is defined. It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts: The first is the anonymous function with lexical scope enclosed within the Grouping Operator (), which prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

(()=>{
    console.log("This is an IIFE (Immediately Invoked Function Expression)"); // This will run immediately
})(); // IIFE

//forEach, map, filter, reduce: These are array methods in JavaScript that allow you to iterate over arrays and perform operations on their elements. forEach executes a provided function once for each array element, map creates a new array with the results of calling a provided function on every element, filter creates a new array with all elements that pass the test implemented by the provided function, and reduce applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
//mostly forEach, map, filter are used most


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((el, index) => {
    console.log(el, index); // This will log each element and its index 
    return el; // forEach does not return a new array, it simply executes the provided function once for each array element
    return el * 4; // This will not create a new array, it will just return the value for each element but not store it anywhere

});

arr.map((el, index) => {
    console.log(el,index); // This will log each element and its index, but map is typically used to create a new array based on the original array 
    return el * 2; // This will create a new array with each element multiplied by 2
});

arr.filter((el, index) => {
    return el % 2 === 0; // This will create a new array with only the even numbers from the original array

});

arr.reduce((el, index) => {
    return el*2; // This will reduce the array to a single value by multiplying each element by 2, but reduce typically requires an accumulator and a current value to work properly
}); 
arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // This will reduce the array to a single value by summing all the elements together
});  

let arr1 = [2,4,6,8,10,3,5,7,9,11]  
let out1 = arr.map((el, index) => {
    return el * 3; // This will create a new array with each element multiplied by 3
}).filter((el, index) => {
    return el % 5 === 0; // This will filter the new array to only include numbers divisible by 5
}).forEach((el, index) => {
    console.log(el*200); // This will log each element of the filtered array multiplied by 200
})