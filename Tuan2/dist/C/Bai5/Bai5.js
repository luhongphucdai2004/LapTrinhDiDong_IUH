"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex25.ts
async function downloadFile() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("File downloaded");
            resolve();
        }, 3000);
    });
}
(async () => {
    await downloadFile();
})();
//# sourceMappingURL=Bai5.js.map