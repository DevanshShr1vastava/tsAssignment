"use strict";
class Vehicle {
    constructor(brand, model, rentPricePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
}
class Car extends Vehicle {
    constructor(brand, model, rentPricePerDay, seats = 4, color) {
        super(brand, model, rentPricePerDay);
        this.seats = Number(seats);
        this.color = color;
    }
    calculateRentalCost(days) {
        return this.rentPricePerDay * Number(days) * (this.seats * 0.5);
    }
}
class Bike extends Vehicle {
    constructor(brand, model, rentPricePerDay, type) {
        super(brand, model, rentPricePerDay);
        this.type = type;
    }
    calculateRentalCost(days) {
        let additionalCost = 0;
        if (this.type === 'sports')
            additionalCost = 250;
        if (this.type === 'chopper')
            additionalCost = 350;
        if (this.type === 'economy')
            additionalCost = 100;
        return (this.rentPricePerDay * days) + additionalCost;
    }
}
class Truck extends Vehicle {
    constructor(brand, model, rentPricePerDay, extension) {
        super(brand, model, rentPricePerDay);
        this.extension = extension;
    }
    calculateRentalCost(days) {
        return (this.rentPricePerDay * days) + (this.extension ? 150 : 0);
    }
}
const vehicle1 = new Vehicle('Hayato', 'B537', 90);
const car1 = new Car('Toyota', 'Essilion', 250, 4, 'moon silver');
const bike1 = new Bike('Suzuki', 'Crescent', 130, 'sports');
const truck1 = new Truck('Mercedeze', '750TWS', 670, true);
console.log(vehicle1);
console.log("--------------------------------");
console.log(car1);
console.log(car1.calculateRentalCost(43));
console.log("--------------------------------");
console.log(bike1);
console.log(bike1.calculateRentalCost(23));
console.log("--------------------------------");
console.log(truck1);
console.log(truck1.calculateRentalCost(67));
