/*
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает. 

Реализовать на классах
*/

class PowerSocket {
    constructor(){
        this.devices = []
    }

    getSumWattage = function(){
        let result = 0
        for (let i=0; i<this.devices.length; i++){
            result += this.devices[i].wattage
        }
        console.log(`Потребляемая мощность в розетке: ${result} квт/ч`)
    }
}

class Device {
    constructor (name, wattage){
        this.wattage = wattage,
        this.name = name,
        this.is_switch_on = false
    } 

    onDevice = function(power_socket){
        power_socket.devices.push(this)
        this.is_switch_on = true
        console.log(`В розетку включен  прибор ${this.name} с потреблением ${this.wattage}  квт/ч`)
    }

    offDevice = function(power_socket){
        indexDev = power_socket.devices.indexOf(this)
        if(indexDev >= 0) {
            power_socket.devices.splice(indexDev,1)
            this.is_switch_on = false
            console.log(`Из розетки выключен  прибор ${this.name} с потреблением ${this.wattage}  квт/ч`)
        } else {
            console.log(`Прибора ${this.name} в розетке нет`)
        }
    }
}


class Lamp extends Device {
    constructor(color, name, wattage){
        super(name, wattage);
        this.color = color;
        this.wattage = wattage;
        this.name = name;
    }
    
    getInfo = function(){
        if(this.is_switch_on){
            console.log(`Я лампочка и сейчас свечу ${this.color} цветом`)
        } else {
            console.log(`Я лампочка и сейчас я выключена, но обычно свечу ${this.color} цветом`)
        }
    }

    onDevice = function(power_socket){
        power_socket.devices.push(this)
        this.is_switch_on = true
        console.log(`В розетку включена лампочка ${this.name} цвета ${this.color} с потреблением ${this.wattage}  квт/ч`)
    }

    offDevice = function(power_socket){
        let indexDev = power_socket.devices.indexOf(this)
        if(indexDev >= 0) {
            power_socket.devices.splice(indexDev,1)
            this.is_switch_on = false
            console.log(`Из розетки выключена лампочка ${this.name} с потреблением ${this.wattage}  квт/ч`)
        } else {
            console.log(`Лампочки ${this.name} в розетке нет`)
        }
    }
}


class Computer extends Device {
    constructor(name, blockWattage, monitorWattage){
        super(name);
        this.blockWattage = blockWattage
        this.monitorWattage = monitorWattage
        this.wattage = this.blockWattage + this.monitorWattage
        this.name = name
    }

    onDevice = function(power_socket){
        power_socket.devices.push(this)
        this.is_switch_on = true
        console.log(`В розетку включен компьютер ${this.name} потребление системного блока и монитора: ${this.blockWattage} квт/ч и ${this.monitorWattage} квт/ч`)
    }

    offDevice = function(power_socket){
        let indexDev = power_socket.devices.indexOf(this)
        if(indexDev >= 0) {
            power_socket.devices.splice(indexDev,1)
            this.is_switch_on = false
            console.log(`Из розетки выключен компьютер ${this.name} с потреблением ${this.wattage}  квт/ч`)
        } else {
            console.log(`Лампочки ${this.name} в розетке нет`)
        }
    }
}


const powerSocket = new PowerSocket()

const dev = new Device('NONAME', 10)
const lamp = new Lamp('Зеленым', 'Настольная', 1)
const computer = new Computer('Настольный', 2, 3)

lamp.onDevice(powerSocket)
lamp.getInfo()

computer.onDevice(powerSocket)
powerSocket.getSumWattage()

lamp.offDevice(powerSocket)
lamp.getInfo()

powerSocket.getSumWattage()
dev.onDevice(powerSocket)
powerSocket.getSumWattage()

