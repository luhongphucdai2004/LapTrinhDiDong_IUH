// ex16.ts
async function task(num: number): Promise<number> {
  return new Promise(resolve => setTimeout(() => resolve(num), 1000));
}

(async () => {
  const results = await Promise.all([task(1), task(2), task(3)]);
  console.log("Parallel results:", results);
})();
