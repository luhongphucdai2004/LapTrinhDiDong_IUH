"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex8.ts
Promise.resolve(2)
    .then(x => x * x) // square
    .then(x => x * 2) // double
    .then(x => x + 5) // add 5
    .then(result => console.log("Result:", result));
//# sourceMappingURL=Bai8.js.map