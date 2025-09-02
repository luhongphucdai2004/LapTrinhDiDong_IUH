// ex23.ts
async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: any[] = await res.json();
  return todos.filter(todo => !todo.completed);
}

(async () => {
  const pending = await fetchTodos();
  console.log("Uncompleted todos:", pending.slice(0, 5)); // in thử 5 cái
})();
