// ex25.ts
async function downloadFile(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("File downloaded");
      resolve();
    }, 3000);
  });
}

(async () => {
  await downloadFile();
})();
