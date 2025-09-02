class Car {
    brand: string;
    model: string;
    year: number;
    constructor(brand: string, model: string, year: number) {
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