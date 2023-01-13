/*
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает. 
*/

function PowerSocket(){
    this.devices = [],
    this.getSumWattage = function(){
        let result = 0
        for (let i=0; i<this.devices.length; i++){
            result += this.devices[i].wattage
        }
        console.log(`Потребляемая мощность в розетке: ${result} квт/ч`)
    }
}

function Device(name, wattage){
    this.wattage = wattage,
    this.name = name,
    this.is_switch_on = false 
}

Device.prototype.onDevice = function(power_socket){
    power_socket.devices.push(this)
    this.is_switch_on = true
    console.log(`В розетку включен  прибор ${this.name} с потреблением ${this.wattage}  квт/ч`)
}

Device.prototype.offDevice = function(power_socket){
    indexDev = power_socket.devices.indexOf(this)
    if(indexDev >= 0) {
        power_socket.devices.splice(indexDev,1)
        this.is_switch_on = false
        console.log(`Из розетки выключен  прибор ${this.name} с потреблением ${this.wattage}  квт/ч`)
    } else {
        console.log(`Прибора ${this.name} в розетке нет`)
    }
}


function Lamp(name, wattage, color){
    this.wattage = wattage,
    this.name = name,
    this.color = color,
    this.getInfo = function(){
        console.log(`Я лампочка и когда включена, то обычно свечу ${this.color} цветом`)
    }
}

Lamp.prototype = new Device()

Lamp.prototype.onDevice = function(power_socket){
    power_socket.devices.push(this)
    this.is_switch_on = true
    console.log(`В розетку включена лампочка ${this.name} цвета ${this.color} с потреблением ${this.wattage}  квт/ч`)
}

Lamp.prototype.offDevice = function(power_socket){
    let indexDev = power_socket.devices.indexOf(this)
    if(indexDev >= 0) {
        power_socket.devices.splice(indexDev,1)
        this.is_switch_on = false
        console.log(`Из розетки выключена лампочка ${this.name} с потреблением ${this.wattage}  квт/ч`)
    } else {
        console.log(`Лампочки ${this.name} в розетке нет`)
    }
}

function Computer(name, blockWattage, monitorWattage){
    this.blockWattage = blockWattage,
    this.name = name,
    this.monitorWattage = monitorWattage
    this.wattage = this.blockWattage + this.monitorWattage
}

Computer.prototype = new Device()

Computer.prototype.onDevice = function(power_socket){
    power_socket.devices.push(this)
    this.is_switch_on = true
    console.log(`В розетку включен компьютер ${this.name} потребление системного блока и монитора: ${this.blockWattage} квт/ч и ${this.monitorWattage} квт/ч`)
}

Computer.prototype.offDevice = function(power_socket){
    let indexDev = power_socket.devices.indexOf(this)
    if(indexDev >= 0) {
        power_socket.devices.splice(indexDev,1)
        this.is_switch_on = false
        console.log(`Из розетки выключен компьютер ${this.name} с потреблением ${this.wattage}  квт/ч`)
    } else {
        console.log(`Лампочки ${this.name} в розетке нет`)
    }
}

const powerSocket = new PowerSocket()

const dev = new Device('NONAME', 10)
const lamp = new Lamp('Lamp', 1, 'Green')
const computer = new Computer('Computer', 2, 3)

lamp.onDevice(powerSocket)
computer.onDevice(powerSocket)
// console.log(powerSocket.devices)
powerSocket.getSumWattage()
lamp.offDevice(powerSocket)
powerSocket.getSumWattage()
dev.onDevice(powerSocket)
powerSocket.getSumWattage()
lamp.getInfo()
