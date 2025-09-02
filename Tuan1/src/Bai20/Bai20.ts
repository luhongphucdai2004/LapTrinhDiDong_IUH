interface Vehicle {
    drive(): void;
}

class Car implements Vehicle {
    drive(): void {
        console.log("Xe đang chạy...");
    }
}

class Bike implements Vehicle {
    drive(): void {
        console.log("Xe đạp đang chạy...");
    }
}

const car: Vehicle = new Car();
car.drive();

const bike: Vehicle = new Bike();
bike.drive();
