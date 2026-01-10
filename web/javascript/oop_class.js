class Car {
    constructor (name) {
        this.name = name;
    }

    getCarName() {
        return this.name;
    }
}

let c1 = new Car("Toyota");
let c2 = new Car("Honda");
let c3 = new Car("Suzuki");

console.log(c1.getCarName())
console.log(c2.getCarName())
console.log(c3.getCarName())

// document.getElementById("result").innerHTML = 
// `<option> ${c1.getCarName()} </option>
// <option> ${c2.getCarName()} </option>
// <option> ${c3.getCarName()} </option>
// `;

/// class two

class Animal {
    constructor (name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super(name)
        this.sound = sound;
    }

    getDetails (){
        return `Name is ${this.name} & sounds like ${this.sound}`
    }
}
let cat = new Cat("Oreo", "Meow meow");

console.log(cat.getDetails())