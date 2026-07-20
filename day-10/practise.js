// Part A: Conditions and Operators
// 1. Take a number as input. If the number is divisible by 2, print 'Even'; otherwise print 'Odd'.
let num = 15;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 2. Take a number as input. If it is divisible by 3, print 'Fizz'. If it is divisible by 7, print 'Buzz'. If it is divisible by both 3 and 7, print 'FizzBuzz'.
let n1 = 21;

if (n1 % 3 === 0 && n1 % 7 === 0) {
    console.log("FizzBuzz");
} else if (n1 % 3 === 0) {
    console.log("Fizz");
} else if (n1 % 7 === 0) {
    console.log("Buzz");
} else {
    console.log("Neither Fizz nor Buzz");
}

// 3. Take three numbers and print the greatest number among them.
let a = 20;
let b = 45;
let c = 30;

if (a >= b && a >= c) {
    console.log(a + " is the greatest");
} else if (b >= a && b >= c) {
    console.log(b + " is the greatest");
} else {
    console.log(c + " is the greatest");
}

// 4. Check whether a student has passed or failed. Marks greater than or equal to 40 means Pass.
let marks = 55;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 5. Predict the output of logical operators (&& and ||).
console.log(true && false);
console.log(true || false);
console.log(false && true);
console.log(false || true);
console.log(10 > 5 && 20 > 15);
console.log(10 < 5 || 20 > 15);




// Part B: Strings
// 1. Print all vowels from the string 'JavaScript is awesome'.
let str = "JavaScript is awesome";
let vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        console.log(str[i]);
    }
}
// 2. Count the number of vowels in 'Masai School'.
let str1 = "Masai School";
let vowels1 = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        count++;
    }
}
console.log("Total vowels:", count);

// 3. Print every character of 'Full Stack Development' using a loop.
let str2 = "Full Stack Development";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// 4. Count the number of spaces in 'We are learning JavaScript'.
let str3 = "We are learning JavaScript";
let spaces = 0;

for (let i = 0; i < str.length; i++)
    {
    if (str[i] === " ") {
        spaces++;
    }
    }

    console.log("Total spaces:", spaces);

    // 5. Reverse the string 'Hello'.
    let str4 = "Hello";
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    console.log(reverse);

    // Part C: Loops

    // 1. Using a for loop, print numbers from 1 to 20.
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
    // 2. Using a while loop, print numbers from 20 to 1.
    let i = 20;

    while (i >= 1) {
        console.log(i);
        i--;
    }
    // 3. Print the multiplication table of 7.
    let n2 = 7;

    for (let i = 1; i <= 10; i++) {
        console.log(n2 + " x " + i + " = " + (n2 * i));
    }
    // 4. Print all even numbers from 1 to 50.
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    // 5. Find the sum of all numbers from 1 to 100.
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        sum += i;
    }

    console.log("Sum =", sum);

    // Part D: Arrays
    // 1. Create an array [10, 20, 30, 40, 50] and perform array operations such as push, pop, length and update values.
    let arr = [10, 20, 30, 40, 50];
    arr.push(60);
    console.log("After push:", arr);
    arr.pop();
    console.log("After pop:", arr);
    console.log("Length:", arr.length);
    arr[2] = 35;
    console.log("After update:", arr);

    // 2. Using a for...of loop, print all elements of ['Apple', 'Mango', 'Banana', 'Orange'].
    let fruits = ["Apple", "Mango", "Banana", "Orange"];

    for (let fruit of fruits) {
        console.log(fruit);
    }

    // 3. Find the largest number in [23, 56, 89, 12, 100, 45].
    let arr1 = [23, 56, 89, 12, 100, 45];
    let largest = arr1[0];

    for (let num of arr1) {
        if (num > largest) {
            largest = num;
        }
    }
    console.log("Largest number:", largest);

    // 4. Find the sum of all elements in [5, 10, 15, 20, 25].
    let arr2 = [5, 10, 15, 20, 25];
    let sum1 = 0;

    for (let num of arr2) {
        sum1 += num;
    }

    console.log("Sum:", sum1);


    // 5. Count the number of even numbers in [2, 5, 8, 11, 14, 17, 20].
    let arr3 = [2, 5, 8, 11, 14, 17, 20];
    let count1 = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            count1++;
        }
    }

    console.log("Even numbers count:", count);

    // Part E: Objects and for...in

    // 1. Print all keys from a student object using for...in.
    let student = {
        name: "John",
        age: 20,
        course: "MCA"
    };

    for (let key in student) {
        console.log(key);
    }

    // 2. Print all values from the object.
    let std = {
        name: "John",
        age: 20,
        course: "MCA"
    };

    for (let key in std) {
        console.log(std[key]);
    }

    // 3. Find the subject with the minimum marks from a marks object.
    let marks1 = {
        Math: 85,
        English: 72,
        Science: 90,
        History: 65
    };

    let minSubject = "";
    let minMarks = Infinity;

    for (let subject in marks) {
        if (marks1[subject] < minMarks) {
            minMarks = marks1[subject];
            minSubject = subject;
        }
    }

    console.log("Subject:", minSubject);
    console.log("Marks:", minMarks);

    // 4. Count the total number of properties in an object.
    let std1 = {
        name: "John",
        age: 20,
        course: "MCA"
    };

    let count2 = 0;

    for (let key in std1) {
        count2++;
    }

    console.log("Total properties:", count2);

    // 5. Predict the output of iterating through an object using for...in.
    let person = {
        name: "Alice",
        age: 25,
        city: "Delhi"
    };

    for (let key in person) {
        console.log(key, ":", person[key]);
    }

    // Part F: Functions

    // 1. Create a function that takes two numbers and prints their sum.
    function add(a, b) {
        console.log("Sum =", a + b);
    }

    add(10, 20);

    // 2. Create a function that takes a number and prints its square.
    function square(num) {
        console.log("Square =", num * num);
    }

    square(6);

    // 3. Create an arrow function that takes three numbers and prints their average.
    const average = (a, b, c) => {
        console.log("Average =", (a + b + c) / 3);
    };

    average(10, 20, 30);

    // 4. Create a function that takes a string and prints its length.
    function stringLength(str) {
        console.log("Length =", str.length);
    }

    stringLength("JavaScript");

    // 5. Create a function that takes two numbers and prints the greater number.
    function greater(a, b) {
        if (a > b) {
            console.log(a + " is greater");
        } else if (b > a) {
            console.log(b + " is greater");
        } else {
            console.log("Both numbers are equal");
        }
    }

    greater(25, 40);


    // Part G: Variables (let, const, var)

    // 1. Predict the output of using a variable before declaration with var.
    console.log(a1);
    var a1 = 10;

    // 2. Predict the output of using a variable before declaration with let.
    // console.log(b1);
    // let b1 = 20;
    // Cannot access 'b1' before initialization
    // 3. Predict the output when modifying a const variable.
    // const pi = 3.14;
    // pi = 3.14159;
    // typeError: Assignment to constant variable.
    //  console.log(pi);

    // 4. Write the difference between var, let and const.
    // var = Function-scoped, can be redeclared and reassigned.
    // let = Block-scoped, can be reassigned but not redeclared.
    // const = Block-scoped, cannot be reassigned and must be initialized when declared.


    // Challenge Questions

    // 1. Find the second largest number in an array.
    let arr4 = [23, 56, 89, 12, 100, 45];

    let largest1 = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr4) {
        if (num > largest1) {
            secondLargest = largest1;
            largest1 = num;
        } else if (num > secondLargest && num < largest1) {
            secondLargest = num;
        }
    }

    console.log("Second Largest:", secondLargest);

    // 2. Count vowels and consonants in the string 'Programming'.
    let str5 = "Programming";
    let vowels2 = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let ch of str5) {
        if (vowels.includes(ch)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }

    console.log("Vowels:", vowelCount);
    console.log("Consonants:", consonantCount);

    // 3. Create a student object containing name, age, university, subjects and hobbies, then print all information.
    let std3 = {
        name: "John",
        age: 22,
        university: "ADTU",
        subjects: ["JavaScript", "DBMS", "Python"],
        hobbies: ["Gaming", "Reading", "Music"]
    };

    for (let key in std3) {
        console.log(key + ":", std3[key]);
    }

    // 4. Write a function that checks whether a number is prime or not.
    function isPrime(num) {
        if (num <= 1) {
            console.log("Not Prime");
            return;
        }

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                console.log("Not Prime");
                return;
            }
        }

        console.log("Prime");
    }

    isPrime(17);

    // 5. Write a function that reverses a string.
    function reverseString(str) {
        let reverse = "";

        for (let i = str.length - 1; i >= 0; i--) {
            reverse += str[i];
        }

        console.log(reverse);
    }

    reverseString("Hello");

    // 6. Create an array of students and print only those whose names start with 'A'
    let students = ["Alice", "Bob", "Andrew", "Charlie", "Ankit", "David"];

    for (let name of students) {
        if (name.startsWith("A")) {
            console.log(name);
        }
    }

