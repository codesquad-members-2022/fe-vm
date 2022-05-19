export default function useTimeout(
  callback: any,
  delay: number | null,
): NodeJS.Timeout {
  const timerId = setTimeout(() => callback(), delay);
  return timerId;
}
