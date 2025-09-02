class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

const products: Product[] = [
    new Product("Laptop", 1500),
    new Product("Phone", 900),
    new Product("Book", 50)
];

const filtered = products.filter(p => p.price > 100);
console.log(filtered);
