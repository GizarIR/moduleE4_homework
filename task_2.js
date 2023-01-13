/*
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у 
переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

const checkProp = (prop, obj) => {
    return prop in obj
};

const student = {
    name: 'Ivan',
    age: 25,
    city: 'Ufa',
    123: true,
};

const dog = {
    name: 'Bibi',
    age: 5,
    own: student,
};

console.log(checkProp('city', dog));
console.log(checkProp('city', student));
