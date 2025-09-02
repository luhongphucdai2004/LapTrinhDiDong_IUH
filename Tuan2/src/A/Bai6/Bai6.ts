// ex6.ts
function simulateTask(time: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Task after ${time} ms`), time);
  });
}

Promise.all([
  simulateTask(1000),
  simulateTask(2000),
  simulateTask(3000)
]).then(results => console.log("All results:", results));
