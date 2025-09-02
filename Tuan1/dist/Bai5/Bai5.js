"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
const rect = new Rectangle(5, 10);
console.log("Area:", rect.area());
console.log("Perimeter:", rect.perimeter());
//# sourceMappingURL=Bai5.js.map