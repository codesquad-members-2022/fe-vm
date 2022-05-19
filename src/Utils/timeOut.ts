export default function timeOut(
  callback: any,
  delay: number | null,
): NodeJS.Timeout {
  const timerId = setTimeout(() => callback(), delay);
  return timerId;
}
