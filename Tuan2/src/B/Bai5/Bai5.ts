// ex15.ts
async function task(num: number): Promise<number> {
  return new Promise(resolve => setTimeout(() => resolve(num), 1000));
}

(async () => {
  const r1 = await task(1);
  console.log("First:", r1);

  const r2 = await task(2);
  console.log("Second:", r2);

  const r3 = await task(3);
  console.log("Third:", r3);
})();
