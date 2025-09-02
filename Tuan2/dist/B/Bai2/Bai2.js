"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex12.ts
function simulateTask(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task done"), time);
    });
}
async function runTask() {
    const result = await simulateTask(2000);
    console.log(result);
}
runTask();
//# sourceMappingURL=Bai2.js.map