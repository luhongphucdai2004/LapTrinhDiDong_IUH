class Employee {
    name: string;

    constructor(name: string) {
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
