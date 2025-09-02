"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    sound() {
        console.log("Âm thanh động vật chung");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Gâu gâu!");
    }
}
class Cat extends Animal {
    sound() {
        console.log("Meo meo!");
    }
}
const animals = [new Dog(), new Cat()];
animals.forEach(a => a.sound());
//# sourceMappingURL=Bai19.js.map