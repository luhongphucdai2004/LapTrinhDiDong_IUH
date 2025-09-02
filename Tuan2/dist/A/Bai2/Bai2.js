"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex2.ts
function getNumber() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 1000);
    });
}
getNumber().then(num => console.log(num));
//# sourceMappingURL=Bai2.js.map