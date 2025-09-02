"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    password;
    createdAt;
    constructor(id, password) {
        this.id = id;
        this.password = password;
        this.createdAt = new Date();
    }
    showInfo() {
        console.log(`Account ID: ${this.id}, Password: ${this.password}, Created At: ${this.createdAt}`);
    }
}
const acc = new Account(1, "secret123");
acc.showInfo();
//# sourceMappingURL=Bai9.js.map