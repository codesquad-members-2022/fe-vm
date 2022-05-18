export function addTargetProduct(products, id) {
  const [targetIndex, targetProduct, error] = getTargetProductInfo(products, id);
  if (error.isError) {
    return [products, null, error];
  }
  const newProducts = [...products];
  newProducts[targetIndex] = { ...targetProduct, ea: targetProduct.ea + 1 };
  return [newProducts, targetIndex, error];
}

export function substractTargetProduct(products, id) {
  const [targetIndex, targetProduct, error] = getTargetProductInfo(products, id);
  if (error.isError) {
    return [products, null, error];
  }
  if (targetProduct.ea <= 0) {
    error.isError = true;
    error.msg = '선택한 상품의 제고가 없어요. ';
    return [products, targetIndex, error];
  }
  const newProducts = [...products];
  newProducts[targetIndex] = { ...targetProduct, ea: targetProduct.ea - 1 };
  return [newProducts, targetIndex, error];
}

export function getTargetProductInfo(products, id) {
  const error = {
    isError: false,
    msg: '',
  };
  const targetIndex = products.findIndex(product => product.id === id);
  if (!targetIndex) {
    error.isError = true;
    error.msg = '상품들 중에 찾는 id가 없어요. ';
  }
  const targetProduct = products[targetIndex];
  return [targetIndex, targetProduct, error];
}
