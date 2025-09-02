// ex28.ts
async function task(id: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Task ${id} done`), 1000);
  });
}

async function batchProcess() {
  const results = await Promise.all([1, 2, 3, 4, 5].map(task));
  console.log(results);
}

batchProcess();
