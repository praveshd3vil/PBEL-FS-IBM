// Part 1: Variables and Data Types

// 1. Create two variables named firstName and lastName and print your full name.
let fname = "Pravesh";
let lname = "Burathoki";

console.log(fname, lname);

// 2. Create a variable age and store your age in it. Print the value and its data type.
let age = 23;
console.log( age,typeof(age));

// 3. Create variables of type string, number, boolean, undefined, and null. Print their data types.
let myString = "Hello";
let myNumber = 7;
let myBoolean = true;
let myUndefined;
let myNull = null;
 
console.log(myString, typeof myString);
console.log(myNumber, typeof myNumber);
console.log(myBoolean, typeof myBoolean);
console.log(myUndefined, typeof myUndefined);
console.log(myNull, typeof myNull);

// 4. Create two numbers and print their sum, difference, product, and division.
let n1 = 5;
let n2 = 10;

console.log("Sum:", n1 + n2);
console.log("Difference:", n1 - n2);
console.log("Product:", n1 * n2);
console.log("Division:", n1 / n2);

// 5. Create a variable price = 99.99 and print its data type.
let price = 99.99;
console.log(typeof(price));

// 6. Predict the output of:
// console.log(typeof null)
// console.log(typeof undefined)
console.log(typeof null);
console.log(typeof undefined);

// Part 2: Comparison Operators

// 1. Create two variables and check ==, ===, !=, !==, >, <, >=, and <=.
let a = 10;
let b = "07";
console.log("a == b :", a == b);
console.log("a === b :", a === b);
console.log("a != b :", a != b);
console.log("a !== b :", a !== b);
console.log("a > b :", a > b);
console.log("a < b :", a < b);
console.log("a >= b :", a >= b);
console.log("a <= b :", a <= b);

// 2. Predict the output of:
// console.log(10 == '10')
// console.log(10 === '10')
console.log(10 == '10')
console.log(10 === '10')

// 3. Predict the output of:
// console.log(null == undefined)
// console.log(null === undefined)
console.log(null == undefined)
console.log(null === undefined)

// 4. Write a program to compare the ages of two people and print who is older.
let p1 = 25;
let p2 = 18;

if(p1>p2)
{
    console.log("P1 is older than P2");
}
else if (p2 > p1){
    console.log("P2 is older than P1");
} 
else{
    console.log("Both are of the same age");
}

// Part 3: Conditional Statements

// 1. Write a program to check whether a number is positive or negative.
let num = -10;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 2. Write a program to check whether a student has passed or failed. Passing marks are 40.
let marks = 55;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 3. Write a program to find the larger number between two numbers.
let a1 = 15;
let b1 = 25;

if (a1 > b1) {
    console.log(a1 + " is larger");
} else if (b1 > a1) {
    console.log(b1 + " is larger");
} else {
    console.log("Both numbers are equal");
}

// 4. Write a program to find the largest among three numbers.
let a2 = 7;
let b2 = 11;
let c2 = 10;

if (a2 >= b2 && a2 >= c2) {
    console.log(a2 + " is the largest");
} else if (b2 >= a2 && b2 >= c2) {
    console.log(b2 + " is the largest");
} else {
    console.log(c2 + " is the largest");
}

// 5. Write a program to check whether a number is even or odd.
let num1 = 7;
if (num1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 6. Write a program that prints:
// Excellent (marks above 90)
// Good (75–90)
// Average (50–74)
// Fail (below 50)
let marks1 = 82;

if (marks1 > 90) {
    console.log("Excellent");
} else if (marks1 >= 75) {
    console.log("Good");
} else if (marks1 >= 50) {
    console.log("Average");
} else {
    console.log("Fail");
}

// Part 4: Arrays

// 1. Create an array containing a string, number, boolean, null, and undefined.
let arr = ["JavaScript", 25, true, null, undefined];
console.log(arr);

// 2. Print the first element, last element, and length of the array.
let arr1 = ["JavaScript", 25, true, null, undefined];
console.log("First Element:", arr1[0]);
console.log("Last Element:", arr1[arr1.length - 1]);
console.log("Length:", arr1.length);

// 3. Add two elements using push().
let arr3 = ["JavaScript", 25, true, null, undefined];
arr3.push("MCA");
arr3.push(100);
console.log(arr3);

// 4. Remove the last element using pop().
let arr4 = ["JavaScript", 25, true, null, undefined];
arr4.pop();
console.log(arr4);

// 5. Replace the third element with your city name.
let arr5 = ["JavaScript", 25, true, null, undefined];
arr5[2] = "Shillong";
console.log(arr5);

// 6. Create the array [10, 20, 30, 40, 50] and perform the following operations:
// - Print the length
// - Add 60
// - Remove the last element
// - Change 30 to 100
// - Print the final array
let numbers = [10, 20, 30, 40, 50];
console.log("Length:", numbers.length);
numbers.push(60);
console.log("After Push:", numbers);
numbers.pop();
console.log("After Pop:", numbers);
numbers[2] = 100;
console.log("Final Array:", numbers);

// 7. Create a nested array:
// let data = [1, 2, [3, 4, 5], 6]
// Print 3, 5, and the length of the nested array.
let data = [1, 2, [3, 4, 5], 6];
console.log(data[2][0]);      
console.log(data[2][2]);      
console.log(data[2].length);  

// Part 5: Output Prediction

// 1. Predict the output:
// let x = 10;
// let y = '10';
// console.log(x == y);
// console.log(x === y);
// output = true 
//          false


// 2. Predict the output:
// let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// console.log(arr);
// output = [1, 2, 3]

// 3. Predict the output:
// let arr = ['A', 'B', 'C'];
// arr[1] = 'Z';
// console.log(arr);
// output = ["A", "Z", "C"]


// Challenge Questions
// 1. Create an array of 10 elements and replace every even index with 'JavaScript'.
let arr6 = new Array(10);
for (let i = 0; i < arr6.length; i++) {
    if (i % 2 === 0) {
        arr6[i] = "JavaScript";
    } else {
        arr6[i] = i;
    }
}
console.log(arr6);

// 2. Create three variables: name, age, and city, and print a complete sentence using them.
let name = "John";
let age1 = 22;
let city = "Shillong";
console.log("My name is " + name + ". I am " + age1 + " years old and I live in " + city + ".");

// 3. Create an array with mixed data types and count the number of elements without using length.
let arr7 = ["JavaScript", 25, true, null, undefined, 3.14];
let count = 0;
for (let element of arr7) {
    count++;
}
console.log("Total elements:", count);

