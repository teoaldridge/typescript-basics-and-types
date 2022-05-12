//THE VOID TYPE


// function add( n1:number, n2: number) {
//     return n1 + n2;
// }

//what void means, is that this function does not have a return statement: it doesn't return anything!
// function printResult( num: number): void {
//     console.log( 'Reasult:' +num); 
// }

// printResult(add(5, 12));


//undefined is also a valid type in Typescript, although not very useful. 
//BUT if you assign a fucntion the type of undefined, it needs to have a return statement!

//! A funstion is of type void if that function returns nothing


//FUNCTIONS AS TYPES

//Functions types are types that describe a fucntion, 
//including the types of parameters and entered values of that function.

// function add( n1:number, n2: number) {
//     return n1 + n2;
// }

//what void means, is that this function does not have a return statement: it doesn't return anything!
//We define it like this: 
//let doSomething: (parameter: type, parameter: type) => typeOfResult
// function printResult( num: number): void {
//     console.log( 'Reasult:' +num); 
// }


// printResult(add (5, 12));

// Here we define combineValues as type of function which takes two parameters, 
//each of type number, and returns a number.
//let combineValues: (a: number, b: number) => number; 

//combineValues = add;
//combineValues = printResult;
//combineValues =5; 


//console.log(combineValues(8, 8));



//CALLBACK FUNCTIONS AND FUNCTION TYPES

function add( n1:number, n2: number): number {
    const result = n1 + n2;
    return result;
}

function printResult( num: number): void {
    console.log( 'Reasult:' + num); 
}

printResult(add (5, 12));

// Here we define a callback function 'cb' which is passed as an argument in function addAndHandle, 
//and is of type function and returns type void (so it does not return anything)
function addAndHandle(n1: number, n2:number, cb: (num: number) => void ){
    const result = n1 + n2;
    cb(result);
}


let combineValues: (a: number, b: number) => number; 

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle (10, 20, (result) => {
    console.log(result);
});