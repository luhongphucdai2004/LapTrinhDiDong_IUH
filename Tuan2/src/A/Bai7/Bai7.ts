// ex7.ts
function simulateTask(time: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Task after ${time} ms`), time);
  });
}

Promise.race([
  simulateTask(1000),
  simulateTask(2000),
  simulateTask(3000)
]).then(result => console.log("First finished:", result));
