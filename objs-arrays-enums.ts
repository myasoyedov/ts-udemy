// const person: {
//     name: string
//     age: number
// } = {
//     const person:{
//         name: string;
//         age: number;
//         hobbies: string[];
//         role: [number, string];
//     } = {
//     name: "Olexandr",
//     age: 29,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
    name: "Olexandr",
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin'];

let favoriteActivities: any[];
favoriteActivities = ['Sports', 5];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR){
    console.log('is admin');
}
