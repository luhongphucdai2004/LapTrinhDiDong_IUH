"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}
const car = new Car("Toyota", "Camry", 2025);
car.showInfo();
//# sourceMappingURL=Bai3.js.map