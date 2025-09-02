"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex21.ts
async function fetchTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
}
fetchTodo();
//# sourceMappingURL=Bai1.js.map