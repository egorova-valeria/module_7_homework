// Задание 5
/* Переписать консольное приложение из предыдущего юнита на классы.
*/


// родительский класс
class ElectAppliance {
    constructor(name, amperage, voltage) {
        this.name = name;
        this.type = 'electrical appliance';
        this.amperage = amperage;
        this.voltage = voltage;
    }
// метод для вычисления потребляемой мощности
     getPower() {
        this.power = this.amperage * this.voltage;
        console.log(`Power ${this.name} = ${this.power} W`);
        }   
// метод для определения включен\выключен прибор
    isSwitchedOn() {
        if(this.switchedOn) {
            console.log(`${this.name} turn On`);
        } else {
            console.log(`${this.name} turn Off`);
        }
    } 
}

class Lamp extends ElectAppliance {
    constructor(name, type, switchedOn, amperage, voltage) {
        super(name, amperage, voltage);
        this.name = name;
        this.type = type;
        this.brand = 'Xiaomi';
        this.switchedOn = switchedOn;
    }

    getFullInfo() {
        console.group(`${this.name} info:`)
        console.log( `Name is ${this.name}`);
        console.log( `Type is ${this.type}`);
        console.log( `Brand is ${this.brand}`);
        super.getPower();
        super.isSwitchedOn();
        console.groupEnd()
    }
} 

const desktopLamp = new Lamp('my lamp', 'desktop', true, 35, 100); // настольная лампа

class Computer extends ElectAppliance {
    constructor(name, type, brand, switchedOn, ram, ssd, amperage, voltage) {
        super(name, amperage, voltage);
        this.name = name,
        this.type = type,
        this.brand = brand,
        this.processor = 'Intel',
        this.switchedOn = switchedOn;
        this.ram = ram;
        this.ssd = ssd;
    }

    getFullInfoMemory() {
    console.log(`Full memory ${this.name}:
        RAM = ${this.ram} GB,
        SSD =  ${this.ssd} GB`);
        super.getPower();
        super.isSwitchedOn();
    }
}

const laptop = new Computer('my laptop', 'desktop', 'Lenovo', true, 4, 128, 40, 220); // ноутбук

// результаты
console.log(desktopLamp);
desktopLamp.getPower();
desktopLamp.isSwitchedOn();
desktopLamp.getFullInfo();

console.log(laptop);
laptop.getPower();
laptop.isSwitchedOn();
laptop.getFullInfoMemory();


