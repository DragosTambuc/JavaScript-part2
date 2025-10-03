/*
What Is a String in JavaScript, and What Is String Immutability?

In JavaScript, a string is a sequence of characters used to represent text data. 
Strings are one of the primitive data types in the language, along with numbers, booleans, null, and undefined.

Strings can be created using either single quotes (' '), double quotes (" "), or backticks (` `) for template literals.

Here is an example of creating two variables that hold string values:

let firstName = 'Dragos';

let lastName = "Tambuc";

Even though you can use single or double quotes to create strings, it's important to be consistent. 
If a string begins with a single quote, it must also end with a single quote.

Another thing to take into account is that strings are immutable. 
In programming, immutability means that once something is created, it cannot be changed. 
So, when you create a string, you can't change its characters directly. 
Instead, you would create a new string if you want to make changes.

Here is an example of assigning a new string to a developer variable:

let developer = 'Raul';
developer = 'Gelu';

Since strings are immutable, we can't update the first string directly. 
That is why we are assigning a new string to the developer variable.

*/


/*
SRING CONCATENATION

In JavaScript, working with text is an essential part of coding, and often, you'll need to combine or join pieces of text together. 
This process is called string concatenation.

In this lecture, we'll focus on how string concatenation works, specifically using the + operator, the += operator, and the concat() method.

The + operator is one of the simplest and most frequently used methods to concatenate strings. 
It allows you to join multiple strings or combine strings with variables that hold text.
*/
const firstName = 'Dragos';

const lastName = 'Tambuc';

const fullName = firstName + ' ' + lastName;

console.log(fullName); // Output: Dragos Tambuc

/*
One disadvantage of using the + operator for string concatenation is 
that it can lead to spacing issues if you don't carefully manage the spacing between the concatenated strings.

Whenever you use the + operator to concatenate strings, it is important to double check for any potential spacing issues.

If you need to add or append to an existing string, then you can use the += operator. 
This is helpful when you want to build upon a string by adding more text to it over time.
*/

let brothersName = 'Mihai';

brothersName += ' Tambuc';

console.log(brothersName); // Output: MihaiTambuc

/*
THE CONCAT METHOD

Another way you can concatenate strings is to use the concat() method.

Before we begin learning about the concat() method, it is important to first understand what a method and a function are at a higher level.

In programming, a function is a reusable block of code that performs a specific task and can be called with various inputs. 
A method, on the other hand, is a type of function that is associated with an object, meaning it operates on the data contained within that object.

In future lectures, we will dive much deeper into how functions, objects, and methods work in JavaScript. 
But for now, it is important to understand that JavaScript has dozens of methods you can use, like the concat() method.

Here's an example of using the concat() method to join two strings together:
*/

 let str1 = 'Hello';

 let str2 = 'World!';

 let str3 = str1.concat(' ', str2);

 console.log(str3); // Output: Hello World!


 