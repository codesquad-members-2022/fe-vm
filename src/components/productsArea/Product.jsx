import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ProductBtn, Detail, Price } from 'components/productsArea/Product.style';
import { addCommasToNumber } from 'utils/util';
import { FinalPayContext, FinalPaySetContext } from 'Context/FinalPayProvider';
import { SelectedProductSetContext } from 'Context/SelectedProductProvider';
import { VMTimerSetContext } from 'Context/VMTimerProvider';
import { HistoryDispatchContext } from 'Context/HistoryProvider';

const TIME_TO_PUT_OUT_PRODUCT = 2000;

export default function Product({ productInfo }) {
  const setSelectedProduct = useContext(SelectedProductSetContext);
  const [finalPay, setFinalPay] = [useContext(FinalPayContext), useContext(FinalPaySetContext)];
  const { addSelectHistory, resetHistory } = useContext(HistoryDispatchContext);
  const { startVMTimer, stopVMTimer } = useContext(VMTimerSetContext);

  const canBuyProduct = () => (finalPay ? finalPay >= productInfo.price : true);
  const isSoldout = () => productInfo.quantity <= 0;

  const resetVMState = () => {
    setFinalPay(0);
    setSelectedProduct({ detail: null, price: null });
    resetHistory();
  };

  const handleProductClick = () => {
    if (!finalPay) return;

    setSelectedProduct({ detail: productInfo.detail, price: productInfo.price });
    addSelectHistory(productInfo);
    const newProductInfo = productInfo;
    newProductInfo.quantity -= 1;
    stopVMTimer();
    startVMTimer([[resetVMState, TIME_TO_PUT_OUT_PRODUCT]]);
  };

  return (
    <ProductBtn quantity={productInfo.quantity} disabled={!canBuyProduct() || isSoldout()} onClick={handleProductClick}>
      <Detail>{productInfo.detail}</Detail>
      <Price>{addCommasToNumber(productInfo.price)}</Price>
    </ProductBtn>
  );
}

Product.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  productInfo: PropTypes.object
};

Product.defaultProps = {
  productInfo: {}
};
