// ex9.ts
const arrPromise = new Promise<number[]>((resolve) => {
  setTimeout(() => {
    const arr = [1, 2, 3, 4, 5, 6];
    resolve(arr);
  }, 1000);
});

arrPromise.then(arr => {
  const evens = arr.filter(n => n % 2 === 0);
  console.log("Even numbers:", evens);
});
