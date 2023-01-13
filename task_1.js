/*
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
и значения только собственных свойств. Данная функция не должна возвращать значение.
*/
const getKeys = function(obj){
    let result = []
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            result.push(key)
        }
    }
    return result
}
 
const person = {
    name: '',
    age: 0,
    city: '',
    123: true,
};

const student = Object.create(person)
student.name = 'Ivan'
student.age = 25
student.city = 'Ufa'
student['123'] = true

console.log('*****Прототип выглядит так: ')
console.log(Object.getPrototypeOf(student))
console.log('*****Список ключей выглядит так: ')
console.log(getKeys(student))
console.log('*****Другой вариант списка ключей в одну строчку без самонаписанной функции: ')
console.log(Object.keys(student))