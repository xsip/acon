export const sleepAsync = (ms: number) =>
  new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, ms);
  });
