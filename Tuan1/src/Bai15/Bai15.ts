class Book {
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Library {
    books: Book[] = [];
    users: User[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    addUser(user: User) {
        this.users.push(user);
    }
}

const lib = new Library();
lib.addBook(new Book("Clean Code"));
lib.addUser(new User("David"));
console.log(lib);
