class Animal {
    sound(): void {
        console.log("Âm thanh động vật chung");
    }
}

class Dog extends Animal {
    sound(): void {
        console.log("Gâu gâu!");
    }
}

class Cat extends Animal {
    sound(): void {
        console.log("Meo meo!");
    }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(a => a.sound());
