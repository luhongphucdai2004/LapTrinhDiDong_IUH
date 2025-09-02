"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex24.ts
async function postData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
    });
    const data = await res.json();
    console.log("Posted:", data);
}
postData();
//# sourceMappingURL=Bai4.js.map