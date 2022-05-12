//THE UNKNOWN TYPE

//The Unknown type is different to 'any'
//Any is the most flexible type in typescript- it avoids any type of checking. 

//Unknown is also a type you should generally avoid using, but is better than any!

// let userInput: unknown; 
// let userName: string; 

// userInput = 5;
// userInput = 'Laura'; 

//  if (typeof userInput === 'string') {
//     userName = userInput; 
//  }


 //THE NEVER TYPE

 let userInput: unknown; 
let userName: string; 

userInput = 5;
userInput = 'Laura'; 

 if (typeof userInput === 'string') {
    userName = userInput; 
 }

 //if you don't specify a type for the generateError function, 
 //Typescript will infer that it returns void. 
 //However, if you define the type as 'never', TS will know that this function
 //NEVER returns a result. 

 function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
 }

 generateError('An error occured', 500);