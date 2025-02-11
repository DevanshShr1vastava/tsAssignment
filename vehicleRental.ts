class Vehicle {
    brand : string;
    model : string;
    rentPricePerDay : number;
    constructor(brand : string,model : string,rentPricePerDay :number){
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
}

class Car extends Vehicle{
    seats : number;
    color : string;
    constructor(brand : string,model : string,rentPricePerDay :number, seats:number=4,color:string){
        super(brand,model,rentPricePerDay);
        this.seats = Number(seats);
        this.color = color;
    }

    calculateRentalCost(days:number){
        return this.rentPricePerDay * Number(days) * (this.seats * 0.5);
    }
}

class Bike extends Vehicle{
    type:string;
    constructor(brand : string,model : string,rentPricePerDay :number,type:string){
        super(brand,model,rentPricePerDay);
        this.type = type;
    }

    calculateRentalCost(days:number){
        let additionalCost:number = 0;
        if(this.type === 'sports') additionalCost = 250;
        if(this.type === 'chopper') additionalCost = 350;
        if(this.type === 'economy') additionalCost = 100;
        return (this.rentPricePerDay * days )+ additionalCost;
    }
}

class Truck extends Vehicle{
    extension:boolean;
    constructor(brand : string,model : string,rentPricePerDay :number,extension:boolean){
        super(brand,model,rentPricePerDay);
        this.extension = extension;
    }

    calculateRentalCost(days:number){
        return (this.rentPricePerDay * days) + (this.extension ? 150 : 0);
    }
}

const vehicle1 = new Vehicle('Hayato','B537',90)
const car1 = new Car('Toyota','Essilion',250,4,'moon silver')
const bike1 = new Bike('Suzuki','Crescent',130,'sports');
const truck1 = new Truck('Mercedeze','750TWS',670,true);

console.log(vehicle1);
console.log(car1);
console.log(car1.calculateRentalCost(43));
console.log(bike1.calculateRentalCost(23));
console.log(truck1.calculateRentalCost(67));