// Задание 2

/* Написать функцию, которая принимает в качестве аргументов строку
 и объект, а затем проверяет есть ли у переданного объекта свойство
  с данным именем. Функция должна возвращать true или false. */

  let str = "Word";
  let obj = {
      1: 123,
      Word: "Word",
      3: "string"
  }


  checkNameProp(str, obj)

// проверяем наличие свойства с именем str в объекте obj
  function checkNameProp(str, obj) {
      return console.log(str in obj)
  }

