interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Bird implements Flyable {
    fly() {
        console.log("Chim bay được");
    }
}

class Fish implements Swimmable {
    swim() {
        console.log("Cá bơi được");
    }
}

const bird = new Bird();
bird.fly();

const fish = new Fish();
fish.swim();
