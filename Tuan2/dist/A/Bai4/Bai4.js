"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex4.ts
const randomPromise = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num > 0.5)
        resolve(num);
    else
        reject("Number too small");
});
randomPromise
    .then(n => console.log("Success:", n))
    .catch(err => console.error("Error:", err));
//# sourceMappingURL=Bai4.js.map