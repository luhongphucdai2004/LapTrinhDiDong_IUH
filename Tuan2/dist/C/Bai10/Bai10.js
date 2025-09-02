"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex30.ts
async function apiCall(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5)
                resolve(`API ${id} success`);
            else
                reject(`API ${id} failed`);
        }, 1000);
    });
}
(async () => {
    const results = await Promise.allSettled([apiCall(1), apiCall(2), apiCall(3)]);
    results.forEach((r, i) => {
        if (r.status === "fulfilled")
            console.log(`Task ${i + 1}:`, r.value);
        else
            console.log(`Task ${i + 1}:`, r.reason);
    });
})();
//# sourceMappingURL=Bai10.js.map