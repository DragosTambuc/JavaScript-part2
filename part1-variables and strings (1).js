/* 
What Is a Data Type, and What Are the Different Data Types in JavaScript?

In JavaScript, a data type refers to the kind of value a variable holds.

A variable is a named container that stores a value of a specific data type, allowing you to reference and manipulate it throughout your code. 

Data types help the program understand the kind of data it's working with, whether it's a number, text, or something else.
JavaScript has several basic data types that you'll use in your programs. 
We'll explore each data type in greater detail in future lectures. 
For now, here is a brief introduction of the different data types in JavaScript.

1. NUMBER
A Number represents both integers and floating-point values. 
Examples of integers include 7, 19, and 90. 
Examples of floating point numbers include 3.14 and 5.2. 
A floating point number is a number with a decimal point.
*/

const age = 39;

const temperature = 22.5;

console.log(age, temperature); // Output: 39 22.5


/*
2. STRING
A String is a sequence of characters, or text, enclosed in quotes. 
Here are two examples: 'Hello world!' and "JavaScript is fun!"
You can use either single quotes (' ') or double quotes (" ") to define a string.
*/

const salute = 'Hello Mihai';

const message = "JavaScript is fun!";

console.log(salute + ',' + ' ' + message); // Output: Hello Mihai, JavaScript is fun!

/*
3. BOOLEAN
A Boolean represents one of two possible values: true or false. 
You can use a boolean to check if a page is loading, or if a user is logged in or not.
*/

const isMajor = false;

const isVaccinated = true;

if (isMajor) {
    console.log('You are an adult.');
}
    else {
        console.log('You are not an adult.')
    }
// Output: You are not an adult

/*
4. UNDEFINED
A variable that has been declared but not assigned a value is of type undefined.
*/

let car;

console.log(car); // Output: undefined

/*
5. NULL
The null type represents the intentional absence of any object value. 
It is often used to indicate that a variable should have no value.
*/

const house = null;

 console.log(house); // Output: null

/*
6.OBJECT
An Object is a more complex data type that can hold collections of key-value pairs. 
Let's break this down. 
The key (also called a property name), is like a label for the data, whereas the value, is the actual data you want to store.
Each key-value pair in an object is called a property
*/

const family = {
    mother: 'Nicoleta',
    father: 'Adrian',
    brother: 'Mihai'
}

console.log('My family members are:' + ' ' + family.mother + ', ' + family.father + ', ' + family.brother + '.');

/*
7. SYMBOL
is A special type of value in JavaScript that is always unique and cannot be changed. 
It's often used to create unique labels or identifiers for properties:
*/

const symbol1 = Symbol('mySymbol');
const symbol2 = Symbol('mySymbol');

console.log(symbol1 === symbol2); // Output: false (because each symbol is unique)

/*

8. BIGINT
Is used for very large numbers that exceed the limit of the Number type.
*/

const BigIntExample = 1234567890123456789012345678901234567890n;

console.log(BigIntExample); // Output: 1234567890123456789012345678901234567890n;