const near = (arr, target) => {
  let near = 0;
  let abs = 0;
  let min = 10000;

  if (target > arr[arr.length - 1]) return arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    abs = arr[i] - target;
    abs = abs < 0 ? -abs : abs;

    if (abs < min) {
      min = abs;
      near = arr[i];
    }
  }

  return near;
};

export { near };
