export function addTargetProdcut(products, id) {
  const [newProducts, targetIndex, targetProduct, error] = getNewProductsAndTargetInfo(
    products,
    id,
  );
  if (error.isError) {
    return [products, null, error];
  }
  newProducts[targetIndex] = { ...targetProduct, ea: targetProduct.ea + 1 };
  return [newProducts, targetIndex, error];
}

export function substractTargetProdcut(products, id) {
  const [newProducts, targetIndex, targetProduct, error] = getNewProductsAndTargetInfo(
    products,
    id,
  );
  if (error.isError) {
    return [products, null, error];
  }
  if (targetProduct.ea <= 0) {
    error.isError = true;
    error.msg = '선택한 상품의 제고가 없어요. ';
    return [products, targetIndex, error];
  }
  newProducts[targetIndex] = { ...targetProduct, ea: targetProduct.ea - 1 };
  return [newProducts, targetIndex, error];
}

export function addTargetUnit(units, balance, id) {
  const [newUnits, targetUnitIndex, targetUnit, error] = getNewUnitsAndTargetInfo(units, id);
  if (error.isError) {
    return [units, balance, error];
  }
  newUnits[targetUnitIndex] = { ...targetUnit, count: targetUnit.count + 1 };
  const newBalance = balance + targetUnit.unit;
  return [newUnits, newBalance, error];
}

export function subStractTargetUnit(units, balance, id) {
  if (balance <= 0) {
    const error = {
      isError: true,
      msg: '잔고가 0원 보다 작아요.',
    };
    return [units, balance, error];
  }
  const [newUnits, targetUnitIndex, targetUnit, error] = getNewUnitsAndTargetInfo(units, id);
  if (error.isError) {
    return [units, balance, error];
  }
  if (targetUnit.count <= 0) {
    error.isError = true;
    error.msg = '뺄 수 있는 잔고가 없어요.';
    return [units, balance, error];
  }
  if (targetUnit.unit > balance) {
    error.isError = true;
    error.msg = '잔고가 충분하지 않아 선택된 단위를 뺄 수 없어요.';
    return [units, balance, error];
  }
  newUnits[targetUnitIndex] = { ...targetUnit, count: targetUnit.count - 1 };
  const newBalance = balance - targetUnit.unit;
  return [newUnits, newBalance, error];
}

function getNewUnitsAndTargetInfo(units, id) {
  const error = {
    isError: false,
    msg: '',
  };
  const newUnits = [...units];
  const targetIndex = newUnits.findIndex(unit => unit.id === id);
  if (!targetIndex) {
    error.isError = true;
    error.msg = '상품들 중에 찾는 id가 없어요. ';
  }
  const targetUnit = newUnits[targetIndex];
  return [newUnits, targetIndex, targetUnit, error];
}

function getNewProductsAndTargetInfo(products, id) {
  const error = {
    isError: false,
    msg: '',
  };
  const newProducts = [...products];
  const targetIndex = newProducts.findIndex(product => product.id === id);
  if (!targetIndex) {
    error.isError = true;
    error.msg = '상품들 중에 찾는 id가 없어요. ';
  }
  const targetProduct = newProducts[targetIndex];
  return [newProducts, targetIndex, targetProduct, error];
}
