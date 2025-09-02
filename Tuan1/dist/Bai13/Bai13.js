"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
}
class Square extends Shape {
    side;
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const square = new Square(5);
console.log("Square area:", square.area());
const circle = new Circle(3);
console.log("Circle area:", circle.area());
//# sourceMappingURL=Bai13.js.map