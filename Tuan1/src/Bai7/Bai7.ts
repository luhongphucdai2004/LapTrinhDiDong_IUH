class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getter(): string {
        return this.name;
    }

    setter(newName: string) {
        this.name = newName;
    }
}

const u = new User("Đại");
console.log(u.getter());
u.setter("Phúc")
console.log(u.getter());
