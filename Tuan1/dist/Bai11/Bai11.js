"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} says: Gâu!`);
    }
}
class Cat extends Animal {
    meow() {
        console.log(`${this.name} says: Meo!`);
    }
}
const dog = new Dog("Chó cỏ");
dog.bark();
const cat = new Cat("Mèo cam");
cat.meow();
//# sourceMappingURL=Bai11.js.map