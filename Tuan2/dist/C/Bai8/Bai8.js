"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex28.ts
async function task(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Task ${id} done`), 1000);
    });
}
async function batchProcess() {
    const results = await Promise.all([1, 2, 3, 4, 5].map(task));
    console.log(results);
}
batchProcess();
//# sourceMappingURL=Bai8.js.map