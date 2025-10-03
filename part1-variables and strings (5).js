/*
What Is Bracket Notation, and How Do You Access Characters from a String?

In JavaScript, strings are treated as sequences of characters, and each character in a string can be accessed using bracket notation. 
This allows you to retrieve a specific character from a string based on its position, which is called its index.

An index is the position of a character within a string, and it is zero-based. 
This means that the first character of a string has an index of 0, the second character has an index of 1, and so on.

For example, in the string hello, the character h is at index 0, e is at index 1, l is at index 2, and so on.

Bracket notation uses square brackets ([]) and the index of the character you want to access. 
*/

let salute = "Hello";
console.log(salute[4]); // Output: o

/*
o get the last character of a string, you can use the length of the string minus one. 
The length property of a string tells you how many characters it contains, 
so to access the last character, you would subtract one from the length:
*/

let example = "JavaScript";

console.log(example[example.length-1]); // Output: t


// If you want to get multiple characters, you can use bracket notation like this:

let firstExample = "Hello";

let secondExample = firstExample[0] + firstExample[1];

console.log(secondExample); // Output: He

/*
How Do You Create a Newline in Strings and Escape Strings?

When working with strings in JavaScript, there are times when you need to include special characters that the JavaScript engine might otherwise misinterpret.

Two common tasks involve creating a newline within a string and escaping certain characters (like quotes) to make sure they appear correctly.

In many programming languages, including JavaScript, you can create a newline in a string using a special character called an escape sequence. 
The most common escape sequence for newlines is \n.

For example, if you want to break a string into multiple lines, you would use \n where you want the new line to begin:
*/

let newLines = "This is line one.\nThis is line two. \nThis is line three. \nThis is line four."
console.log(newLines)

// The \n escape sequence tells JavaScript to insert a line break at that point, which results in the string being displayed across multiple lines.

/*
Another important concept when working with strings is escaping characters. Sometimes, you need to include characters in your string that JavaScript normally uses for something else, such as quotes.

If you simply use quotes inside a string without escaping them, it can cause an error because JavaScript will think you're trying to end the string.

For example, this will cause an error:
*/

// let wrongString = "He said, "Hello!" to me."; // This will result in an error
// console.log(wrongString);

/*
To fix this, you can use the backslash (\) to escape the quotes, 
telling JavaScript to treat them as part of the string rather than as string delimiters.
JavaScript gets confused because it thinks the string ends after the word "said," 
but, you want the quotes around "Hello!" to be part of the string.
*/


// To fix this, you can escape the inner quotes by placing a backslash (\) before them

let correctString = "He said, \"Hello!\" to me.";
console.log(correctString); // Output: He said, "Hello!" to me.

/*
You can also escape other special characters, such as the backslash itself (\\), 
or single quotes within a string surrounded by single quotes (\').

Here's another example using single quotes:
*/

let anotherString = 'It\'s a beautiful day!. Welcome to \\Javascript.';
console.log(anotherString);  // Output: It's a beautiful day!. Welcome to \ Javascript

/*
By escaping the single quote with \', 
JavaScript knows to include it as part of the string rather than ending the string early.

Escaping and creating newlines are essential when you’re formatting output or handling special characters in strings. 
These techniques help you prevent errors and ensure your text appears exactly as intended.
*/