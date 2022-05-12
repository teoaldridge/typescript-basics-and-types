// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Teo', 
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     //this is a tuple:
//     role: [2, 'author']
// };

// person.role.push('admin');

//Here it doesn't work because I set only one feature, so change the length of the tuple array!
// person.role[1] = 10;

//Here it doesn't work because I set three features, so change the length od the tuple array!:
//person.role = [0,'admin', 'user']; 

//This works:
// let favouriteActivities: string[];
// favouriteActivities= ['Sports'];

// console.log(person.name);

// for(const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }



//const person: object is the same as cosnt person: {}

//role: [2, 'author'] - this is a Tuple. 
//Tuple is a fixed-length and fixed-type array
//Tuple can contain two values of different data types.


//ENUMS


// const ADMIN = 0; //or string: 'ADMIN'
// const AUTHOR = 1;
// const MANAGER = 2;

enum Role { ADMIN, MANAGER, AUTHOR };

const person = {
    name: 'Teo', 
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    //this is a tuple:
    role: Role.AUTHOR
};

if (person.role === Role.AUTHOR) {
    console.log('is author'); 
}

//Type 'any'- AVOID THAT TYPE AT ALL COSTS! This basically makes all the advantages of typescript disappear. 