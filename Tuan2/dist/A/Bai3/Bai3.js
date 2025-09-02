"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex3.ts
function failPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Something went wrong"), 1000);
    });
}
failPromise().catch(err => console.error(err));
//# sourceMappingURL=Bai3.js.map