"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex6.ts
function simulateTask(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Task after ${time} ms`), time);
    });
}
Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(3000)
]).then(results => console.log("All results:", results));
//# sourceMappingURL=Bai6.js.map