// WORKING WITH DATA TYPES 

/*
What Is Dynamic Typing in JavaScript, and How Does It Differ from Statically Typed Languages?

JavaScript is a dynamically typed language, meaning you don't need to specify the data type of a variable when you declare it. 
Instead, the type is determined based on the value assigned to the variable while the program is running. 
This allows you to change the type of a variable throughout the prograM.

EXAMPLE:

let data = 42; // Initially, data is a number
data  = 'Hello world!'; // Now, data is a string
data = true; // Now, data is a boolean

In this example, we have a variable called example with the data type of string. 
But then we update value to be a number instead.

The flexibility of dynamic typing makes JavaScript more forgiving and easy to work with for quick scripting, 
but it can also introduce bugs that may be harder to catch, especially as your program grows larger.

n statically typed languages like Java or C++, you must declare the data type of a variable when you create it, and that type cannot change.

For instance, if you declare a variable as integer, you can only assign it integer values. 
If you try to assign it a different type, the program will throw an error.

How Does the typeof Operator Work, and What Is the typeof null Bug in JavaScript?

The typeof operator in JavaScript is a simple yet powerful tool that lets you see the data type of a variable or value. 
It always returns a string indicating the type.
*/

let numberExample = 42;
console.log(typeof numberExample); // Output: number


let stringExample = "Hello world!";
console.log(typeof stringExample); // Output: string

/*
Using the typeof operator can be especially useful when you're debugging 
or trying to understand what kind of data you're working with in your code.

However, there's a well-known quirk in JavaScript when it comes to null.
*/

let nullExample = null;
console.log(typeof nullExample); // Output: object

/*
In this example, we have a variable called exampleVariable and have assigned it the value of null. 
But when we use the typeof operator, it returns the string object.

This is widely considered a bug in JavaScript, dating back to its early days. 
The reason for this behavior is rooted in the way JavaScript was originally designed.

When the language was first implemented, values like null were represented as a special type of object, leading to this unexpected result.

Unfortunately, this has become a part of the language, and while it's confusing, it's something you'll need to be aware of.
*/