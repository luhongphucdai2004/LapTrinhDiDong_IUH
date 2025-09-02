class Animal {
    name: string;

    constructor(name: string) {
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
