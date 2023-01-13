/*
Написать функцию, которая создает пустой объект, но без прототипа.
*/

function createObj(){
   return Object.create(null)
};

const obj = createObj();

console.log(createObj())
console.log(Object.getPrototypeOf(obj));


