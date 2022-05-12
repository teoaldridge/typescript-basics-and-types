// UNION TYPES:

// function combine(input1: number | string, input2: number | string) { //these are Union types - you can assign two or more types to a var, using |
    
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }

//     return result;
// }

// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine('Dory', 'Phil');
// console.log(combinedNames);


//  LITERAL TYPES:
//In Literal Types, you assign not only the type a variable has, but also the exact value it will hold. 

// function combine(
//     input1: number | string, //these are Union types - you can assign two or more types to a var, using '|'
//     input2: number | string, 
//     resultConversion: 'as-number' | 'as-text' //these are Literal types- you give exact values this variable can have. 
//     ) { 
    
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }

//     if (resultConversion === 'as-number') {
//         return +result;
//     } else {
//         result.toString();
//     }

//     return result;
// }

// const combinedAges = combine( '30', '26', 'as-number');
// console.log(combinedAges);

// const combinedNames = combine('Dory', 'Phil', 'as-text');
// console.log(combinedNames);



//TYPE ALIASES

//here type Conbinable is a Type Alias. 
type Conbinable = number | string;  
//You can also create a Type Alias using Literal Types and give exact values like this:
type ConversionDescriptor = 'as-number' | 'as-text';

//Type Aliases are reusable Types that we can reuse in our code like below: 
function combine(
    input1: Conbinable, 
    input2: Conbinable,  
    resultConversion: 'as-number' | 'as-text' //these are Literal types- you give exact values this variable can have. 
    ) { 
    
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    if (resultConversion === 'as-number') {
        return +result;
    } else {
        result.toString();
    }

    return result;
}

const combinedAges = combine( '30', '26', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Dory', 'Phil', 'as-text');
console.log(combinedNames);


// Type Aliases & Object Types

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

// For example:

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// To:

// type User = { name: string; age: number };
 
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }