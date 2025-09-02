"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex13.ts
async function failTask() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Something went wrong"), 1000);
    });
}
(async () => {
    try {
        const result = await failTask();
        console.log(result);
    }
    catch (err) {
        console.error("Caught error:", err);
    }
})();
//# sourceMappingURL=Bai3.js.map