// Задание 1
/* Написать, функцию, которая принимает в качестве аргумента объект
 и выводит в консоль все ключи и значения только собственных свойств.
  Данная функция не должна возвращать значение.
*/

let generalProp = {
    city: 'Moscow',
    company: 'Skillfactory'
}

let Ivanov = Object.create(generalProp);

// добавляем объекту Ivanov собственные свойства
Ivanov.firstName = 'Ivan';
Ivanov.lastName = 'Ivanov';
Ivanov.age = 22;
Ivanov.position = 'developer';


OwnProperties(Ivanov);


// проверяем наличие собственных свойств и выводим в консоль пару ключ-значение
function OwnProperties(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop + ':' + ' ' + obj[prop]);
        }
    }
}




