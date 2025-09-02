// ex27.ts
async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed request");
      return await res.json();
    } catch (err) {
      console.error(`Attempt ${i + 1} failed`);
      if (i === retries) throw err;
    }
  }
}

(async () => {
  try {
    const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
    console.log("Data:", data);
  } catch (err) {
    console.error("Final error:", err);
  }
})();
