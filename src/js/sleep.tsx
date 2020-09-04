const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const randomMSDelay = () => {
  return Math.random() * 250;
};

export { sleep, randomMSDelay }