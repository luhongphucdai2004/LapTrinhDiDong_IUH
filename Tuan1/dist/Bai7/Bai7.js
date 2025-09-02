"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    getter() {
        return this.name;
    }
    setter(newName) {
        this.name = newName;
    }
}
const u = new User("Đại");
console.log(u.getter());
u.setter("Phúc");
console.log(u.getter());
//# sourceMappingURL=Bai7.js.map