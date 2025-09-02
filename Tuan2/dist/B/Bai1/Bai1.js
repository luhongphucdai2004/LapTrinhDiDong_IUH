"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex11.ts
async function helloAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hello Async"), 2000);
    });
}
(async () => {
    const msg = await helloAsync();
    console.log(msg);
})();
//# sourceMappingURL=Bai1.js.map