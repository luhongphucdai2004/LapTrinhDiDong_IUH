// ex29.ts
async function task(id: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Task ${id} done`), 1000);
  });
}

async function queueProcess() {
  for (let i = 1; i <= 5; i++) {
    const result = await task(i);
    console.log(result);
  }
}

queueProcess();
