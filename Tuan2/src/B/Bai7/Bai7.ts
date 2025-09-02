// ex17.ts
async function task(num: number): Promise<number> {
  return new Promise(resolve => setTimeout(() => resolve(num), 1000));
}

(async () => {
  const promises = [task(1), task(2), task(3)];

  for await (const result of promises) {
    console.log("Got:", result);
  }
})();
