"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const products = [
    new Product("Laptop", 1500),
    new Product("Phone", 900),
    new Product("Book", 50)
];
const filtered = products.filter(p => p.price > 100);
console.log(filtered);
//# sourceMappingURL=Bai8.js.map