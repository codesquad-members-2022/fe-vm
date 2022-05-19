import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ProductBtn, Detail, Price } from 'components/productsArea/Product.style';
import { addCommasToNumber } from 'utils/util';
import { TIME_TO_SELCT_PRODUCT, TIME_TO_RESET_HISTORY, TIME_TO_PUT_OUT_PRODUCT } from 'constant/constant';
import useVMState from 'hooks/useVMState';
import { FinalPayContext, FinalPaySetContext } from 'Context/FinalPayProvider';
import { SelectedProductSetContext } from 'Context/SelectedProductProvider';
import { VMTimerSetContext } from 'Context/VMTimerProvider';
import { HistoryDispatchContext } from 'Context/HistoryProvider';

export default function Product({ productInfo, toggleSelectableStatus }) {
  const setSelectedProduct = useContext(SelectedProductSetContext);
  const [finalPay, setFinalPay] = [useContext(FinalPayContext), useContext(FinalPaySetContext)];
  const { addSelectHistory, resetHistory } = useContext(HistoryDispatchContext);
  const { startVMTimer, stopVMTimer } = useContext(VMTimerSetContext);
  const { resetVMState } = useVMState();

  const canBuyProduct = () => (finalPay ? finalPay >= productInfo.price : true);
  const isSoldout = () => productInfo.quantity <= 0;

  const updateOrderState = () => {
    const selectedProduct = productInfo;
    selectedProduct.quantity -= 1;
    setFinalPay(finalPay - selectedProduct.price);
    setSelectedProduct({ detail: null, price: null });
    toggleSelectableStatus(true);
  };

  const handleProductClick = () => {
    if (!finalPay) return;

    const totalPay = finalPay - productInfo.price;
    setSelectedProduct({ detail: productInfo.detail, price: productInfo.price });
    addSelectHistory(productInfo, totalPay);
    toggleSelectableStatus(false);
    stopVMTimer();
    startVMTimer([
      [updateOrderState, TIME_TO_PUT_OUT_PRODUCT],
      [() => resetVMState(totalPay), TIME_TO_SELCT_PRODUCT],
      [resetHistory, TIME_TO_RESET_HISTORY]
    ]);
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
  productInfo: PropTypes.object,
  toggleSelectableStatus: PropTypes.func
};

Product.defaultProps = {
  productInfo: {},
  toggleSelectableStatus: () => {}
};
