"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    year;
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
book.displayInfo();
//# sourceMappingURL=Bai6.js.map