export default function iIncrementANumberAsync(num) {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () => {
        num += 1;
        resolve(num);
      }
    )
  });
}
