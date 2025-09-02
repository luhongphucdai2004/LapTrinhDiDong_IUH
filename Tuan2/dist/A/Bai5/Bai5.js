"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex5.ts
function simulateTask(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task done"), time);
    });
}
simulateTask(1500).then(msg => console.log(msg));
//# sourceMappingURL=Bai5.js.map