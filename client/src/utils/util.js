export const calculateTotal = (keysArr, json) => {
  const total = keysArr.reduce((acc, key) => acc + Number(key) * json[key], 0);

  return total;
};
