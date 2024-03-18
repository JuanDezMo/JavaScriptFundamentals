/**
 * Tipos de Datos
 * 
 * PRIMITIVOS (Inmutables)
 * Paso por valor
 * 
 * string
 * number
 * boolean
 * null
 * undefined
 * symbol
 * bigint
 * 
 * COMPLEJOS (Mutables)
 * Paso por referencia
 * 
 * object
 * array
 * function
 */


// Inmutables
let age = 31;
age = age + 10;
console.log(`Age: ${age}`);

let isTrue = true;
isTrue = false;
console.log(`isTrue: ${isTrue}`);

// Mutables
let ferUser = { name: 'Fernanda', age: 26 };
console.log(`User: ${ferUser.name}`);
console.log(ferUser);
ferUser.age = 27;
console.log(ferUser);

let fruits = ['Apple', 'BlueBerries', 'Lychee', 'Melon'];
console.log(`List of fruits: ${fruits}`);
fruits[1] = 'Coconut';
console.log(`List of fruits: ${fruits}`);

let charlie = { name: 'Charlie', age : 2, breed: 'Bulldog'}
console.log(`Dog: ${charlie.name}`)
console.log(charlie);

function changeBreed(dog) {
    if (dog.breed != undefined) {
        dog.breed = 'Bull Terrier';
    }
}

changeBreed(charlie);
console.log(charlie);