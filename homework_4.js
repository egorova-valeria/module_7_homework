// Задание 4
/* Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
*/


// родительная функция-конструктор
function ElectAppliance(name) {
    this.name = name,
    this.type = 'electrical appliance'
}

// метод для вычисления потребляемой мощности
ElectAppliance.prototype.getPower = function(amperage, voltage) {
    power = amperage * voltage;
    console.log(`Power ${this.name} = ${power} W` )
}

// метод для определения включен\выключен прибор
ElectAppliance.prototype.isSwitchedOn = function(switchedOn) {
    if(switchedOn) {
        console.log(`${this.name} turn On`);
    } else {
        console.log(`${this.name} turn Off`)
    }
}

//функция-конструктор для лампы
function Lamp(name, type) {
    this.name = name,
    this.type = type,
    this.brand = 'Xiaomi',

    this.getFullInfo = function() {
        console.group(`${this.name} info:`)
        console.log( `Name is ${this.name}`);
        console.log( `Type is ${this.type}`);
        console.log( `Brand is ${this.brand}`)
        console.groupEnd()
    }
}

Lamp.prototype = new ElectAppliance(); // связь с родительской функцией-конструктором
const desktopLamp = new Lamp('my lamp', 'desktop'); // настольная лампа

//функция-конструктор для ноутбука
function Computer(name, type, brand) {
    this.name = name,
    this.type = type,
    this.brand = brand,
    this.processor = 'Intel',

    this.getFullInfoMemory = function(ram, ssd) {
    console.log(`Full memory ${this.name}:
         RAM = ${ram} GB,
         SSD =  ${ssd} GB`)
    }
}

Computer.prototype = new ElectAppliance();  // связь с родительской функцией-конструктором
const laptop = new Computer('my laptop', 'desktop', 'Lenovo'); // ноутбук

// результаты
console.log(desktopLamp);
desktopLamp.getPower(10, 220)
desktopLamp.getFullInfo();
desktopLamp.isSwitchedOn(false)

console.log(laptop);
laptop.getPower(30, 100)
laptop.getFullInfoMemory(4, 128);
laptop.isSwitchedOn(true)


