const zeroLeft = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const formatTimeElapsed = (seconds: number): string => {
  const time = new Date(seconds * 1000);
  const minutes = time.getMinutes();
  const sec = time.getSeconds();
  return `${zeroLeft(minutes)}:${zeroLeft(sec)}`;
};
