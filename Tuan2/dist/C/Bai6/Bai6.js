"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex26.ts
async function wait5s() {
    return new Promise(resolve => setTimeout(resolve, 5000));
}
(async () => {
    console.log("Waiting...");
    await wait5s();
    console.log("5 seconds passed");
})();
//# sourceMappingURL=Bai6.js.map