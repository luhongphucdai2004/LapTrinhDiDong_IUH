"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex14.ts
async function tripleAfter1s(num) {
    return new Promise(resolve => {
        setTimeout(() => resolve(num * 3), 1000);
    });
}
(async () => {
    const result = await tripleAfter1s(5);
    console.log("Result:", result);
})();
//# sourceMappingURL=Bai4.js.map