"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex22.ts
async function fetchTodo(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res.json();
}
(async () => {
    const results = await Promise.all([fetchTodo(1), fetchTodo(2), fetchTodo(3)]);
    console.log(results);
})();
//# sourceMappingURL=Bai2.js.map