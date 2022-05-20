export default function timeOut(
  callback: () => void,
  delay: number | null,
): NodeJS.Timeout {
  const timerId = setTimeout(() => callback(), delay);
  return timerId;
}
