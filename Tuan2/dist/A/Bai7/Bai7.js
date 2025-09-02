"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex7.ts
function simulateTask(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Task after ${time} ms`), time);
    });
}
Promise.race([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(3000)
]).then(result => console.log("First finished:", result));
//# sourceMappingURL=Bai7.js.map