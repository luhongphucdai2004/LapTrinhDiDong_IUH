"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex10.ts
const p = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        if (success)
            resolve("Success!");
        else
            reject("Failure!");
    }, 1000);
});
p.then(msg => console.log(msg))
    .catch(err => console.error(err))
    .finally(() => console.log("Done"));
//# sourceMappingURL=Bai10.js.map