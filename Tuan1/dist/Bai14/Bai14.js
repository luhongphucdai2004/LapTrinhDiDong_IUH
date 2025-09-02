"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Manager extends Employee {
    manage() {
        console.log(`${this.name} là quản lý.`);
    }
}
class Developer extends Employee {
    code() {
        console.log(`${this.name} là lập trình viên.`);
    }
}
const m = new Manager("Tiến");
m.manage();
const d = new Developer("Đại");
d.code();
//# sourceMappingURL=Bai14.js.map