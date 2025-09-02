interface Animal {
    name: string;
    sound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name} says: Gâu!`);
    }
}

const dog = new Dog("Chó cỏ");
dog.sound();
