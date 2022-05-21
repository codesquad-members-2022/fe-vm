import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ProductBtn, Detail, Price } from 'components/productsArea/Product.style';
import { addCommasToNumber } from 'helpers/helper';
import { TIME_TO_SELCT_PRODUCT, TIME_TO_PUT_OUT_PRODUCT } from 'constant/constant';
import useVMState from 'hooks/useVMState';
import { FinalPayContext, FinalPaySetContext } from 'contexts/FinalPayProvider';
import { SelectedProductSetContext } from 'contexts/SelectedProductProvider';
import { VMTimerSetContext } from 'contexts/VMTimerProvider';
import { HistoryDispatchContext } from 'contexts/HistoryProvider';

export default function Product({ productInfo, toggleSelectableStatus }) {
  const setSelectedProduct = useContext(SelectedProductSetContext);
  const [finalPay, setFinalPay] = [useContext(FinalPayContext), useContext(FinalPaySetContext)];
  const { addSelectHistory } = useContext(HistoryDispatchContext);
  const { startVMTimer, stopVMTimer } = useContext(VMTimerSetContext);
  const { startTimerToReset } = useVMState();

  const canBuyProduct = () => (finalPay ? finalPay >= productInfo.price : true);
  const isSoldout = () => productInfo.quantity <= 0;

  const updateOrderState = () => {
    const selectedProduct = productInfo;
    selectedProduct.quantity -= 1;
    setFinalPay(finalPay - selectedProduct.price);
    setSelectedProduct({ detail: null, price: null });
    toggleSelectableStatus(true);
  };

  const hasRestMoney = totalPay => totalPay > 0;

  const startTimerToSelectProduct = totalPay => {
    stopVMTimer();
    startVMTimer([
      [updateOrderState, TIME_TO_PUT_OUT_PRODUCT],
      [() => startTimerToReset(totalPay), TIME_TO_SELCT_PRODUCT]
    ]);
  };

  const returnResetPay = totalPay => {
    updateOrderState();
    startTimerToReset(totalPay);
  };

  const handleProductClick = () => {
    if (!finalPay) return;

    const totalPay = finalPay - productInfo.price;
    setSelectedProduct({ detail: productInfo.detail, price: productInfo.price });
    addSelectHistory(productInfo, totalPay);
    toggleSelectableStatus(false);
    if (hasRestMoney(totalPay)) startTimerToSelectProduct(totalPay);
    else returnResetPay(totalPay);
  };

  return (
    <ProductBtn quantity={productInfo.quantity} disabled={!canBuyProduct() || isSoldout()} onClick={handleProductClick}>
      <Detail>{productInfo.detail}</Detail>
      <Price>{addCommasToNumber(productInfo.price)}</Price>
    </ProductBtn>
  );
}

Product.propTypes = {
  productInfo: PropTypes.shape({
    detail: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  }),
  toggleSelectableStatus: PropTypes.func
};

Product.defaultProps = {
  productInfo: { detail: null, price: null, quantity: null },
  toggleSelectableStatus: () => {}
};
