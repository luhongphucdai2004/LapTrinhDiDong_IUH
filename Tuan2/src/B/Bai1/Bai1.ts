// ex11.ts
async function helloAsync(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("Hello Async"), 2000);
  });
}

(async () => {
  const msg = await helloAsync();
  console.log(msg);
})();
