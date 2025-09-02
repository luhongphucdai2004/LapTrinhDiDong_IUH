class Account {
    public id: number;
    private password: string;
    readonly createdAt: Date;

    constructor(id: number, password: string) {
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
