/*
VARIABLES AND GUIDELINES

In JavaScript, variables act as containers for storing data that you can access and modify throughout your program.

You can think of variables as boxes that hold values. 
With variables, you can keep track of things like numbers or text and refer to these values whenever you need them in your program.

One way to declare a variable in JavaScript, is to use the let keyword.

let age = 39; // Here, we declare a variable named age and assign it the value 39.

In this example, we created a variable called age and assigned it the value 39. 
Now, whenever we refer to age in our code, it will represent the value 39.

age = 40; 

Now the age variable holds the value of 40. 
Notice that the let keyword wasn't needed again because the age variable was already declared, so there's no need to declare it a second time.

When using reassignment, you only need to reference the variable name. 
Reassignment is useful because it allows you to update and change the value stored in a variable as your program runs. 
A good example of this would be updating points in a game.

Naming variables may seem straightforward, but there are some rules and best practices to ensure your code is readable and functional.

Your variable names should describe what the data represents. 
For example, instead of using a name like x, a more descriptive name such as age or points makes your code easier to understand.

IMPORTANT:
Variables in JavaScript must begin with a letter, an underscore (_), or a dollar sign ($). 
They cannot start with a number.

Variable names are case-sensitive, meaning the word age in all lowercase and the word Age with a capital A are considered different variables.

CAMEL CASE:

This is why it's important to stick with a consistent naming convention like camelCase. 
camelCase is where the first word is all lowercase and each subsequent word starts with an uppercase letter.

let thisIsCamelCase;

There are certain keywords in JavaScript that you cannot use as variable names, 
such as let, const, function, or return, as they are reserved for the language itself.

You should also avoid using special characters like exclamation points (!) or at (@) symbols, in your variable names. 
It is best to keep variable names readable by using letters, numbers, underscores, or dollar signs
*/

let myBirthday = 'july 6th';

let isApproved = true;

let myDogAge = 1.4;

console.log(myBirthday + ', ' +  isApproved + ', '+  myDogAge);

/*
How Do let and const Work Differently When It Comes to Variable Declaration, Assignment, and Reassignment?

When working with JavaScript, you'll often declare variables to store data that you plan to use throughout your program.

In modern JavaScript, let and const are the preferred ways to declare variables, but they differ in how they handle value assignment and reassignment.

he let keyword allows you to declare variables that can be updated or reassigned later. 
You can think of let as a flexible container – once you've stored a value in it, you can change that value as needed throughout your program.

let score = 100;

score = 120; // Here, we reassigned the score variable to a new value of 120.

On the other hand, const is used to declare variables that are constant. Once you assign a value to a variable declared with const, you cannot reassign it.

This makes const ideal for values that you don't want to change accidentally during the execution of your program

const motherAge = 61;

motherAge = 62; // This will result in an error because you cannot reassign a const variable.

In summary, use let when you need a variable whose value may change over time, and use const when you want to ensure that a variable's value remains constant throughout your program.

Variables declared with const must be assigned a value at the time of declaration. 
If you try to declare a const variable without assigning it a value, you will get an error:


const brotherAge; // This will result in an error because const variables must be initialized with a value.

You can also use the var keyword, but it's not as recommended anymore. 
The var is kind of like let, except it has a wider scope, which is more likely to cause problems in your program.

*/

