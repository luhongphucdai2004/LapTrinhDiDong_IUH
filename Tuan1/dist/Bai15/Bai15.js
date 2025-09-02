"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    constructor(title) {
        this.title = title;
    }
}
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Library {
    books = [];
    users = [];
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
}
const lib = new Library();
lib.addBook(new Book("Clean Code"));
lib.addUser(new User("David"));
console.log(lib);
//# sourceMappingURL=Bai15.js.map