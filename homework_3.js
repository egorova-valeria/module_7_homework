// Задание 3
// Написать функцию, которая создает пустой объект, но без прототипа.

function CreateEmptyObj() {
    return Object.create(null);
}

let myObj = CreateEmptyObj();

// myObj.a = 1;

console.log(myObj)
