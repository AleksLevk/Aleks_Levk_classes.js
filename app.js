class Car {
    constructor(model, mark, country, speed){
        this.model = model;
        this.mark = mark;
        this.country = country;
        this.speed = speed;
    }
    increaseSpeed(value) {
        this.speed += value;
    }
    decreaseSpeed(value){
    this.speed -= value;
    }
}

class Truck extends Car {
    takeWeight(weight) {
        console.log(`Truck ${this.mark} ${this.model} take ${weight} kg`)
    }
}

class Bus extends Car {
    takePeople(people) {
        console.log(`Bus ${this.mark} ${this.model} take ${people} people`);
    }
}

class Transporter extends Car {
    takeCars(cars) {
        console.log(`Transporter ${this.mark} ${this.model} take ${cars} cars`)
    }
}