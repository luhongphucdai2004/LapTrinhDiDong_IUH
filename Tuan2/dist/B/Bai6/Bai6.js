"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex16.ts
async function task(num) {
    return new Promise(resolve => setTimeout(() => resolve(num), 1000));
}
(async () => {
    const results = await Promise.all([task(1), task(2), task(3)]);
    console.log("Parallel results:", results);
})();
//# sourceMappingURL=Bai6.js.map