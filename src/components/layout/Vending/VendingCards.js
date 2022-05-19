import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import VendingCard from './VendingCard';
import { DUMMY_DATA, _ } from '../../../constant/constant';
import AmountContext from '../../../store/AmountContext';
import Modal from '../Modal/Modal';

const VendingCards = () => {
  const { money, dispatchMoney, dispatchLog } = useContext(AmountContext);
  const [clickedProduct, setClickedProduce] = useState({
    price: null,
    name: null,
  });
  const [modal, setModal] = useState(false);
  const onSaveInfo = (price, name) => {
    if (money.TOTAL_AMOUNT < price) return alert('금액이 부족합니다');
    setClickedProduce({ price, name });
  };

  useEffect(() => {
    if (!clickedProduct.price) return;
    setModal(true);
    dispatchLog({ type: 'SELECT', payload: clickedProduct.name });
    setTimeout(() => {
      dispatchMoney({ type: 'BUY', payload: clickedProduct.price });
      dispatchLog({ type: 'BUY', payload: clickedProduct });
      setModal(false);
    }, 2000);
  }, [clickedProduct]);

  return (
    <>
      {modal &&
        ReactDOM.createPortal(<Modal />, document.getElementById('overlay'))}
      <VendingCardLists>
        {DUMMY_DATA.map(({ id, name, price }) => (
          <VendingCard
            id={id}
            key={id}
            name={name}
            price={price}
            isAffordable={money.TOTAL_AMOUNT >= price}
            onSave={onSaveInfo}
          />
        ))}
      </VendingCardLists>
    </>
  );
};

const VendingCardLists = styled.ul`
  ${({ theme }) => theme.mixin.flexMixin('row', _, 'space-between', 'wrap')};
  width: 55%;
  height: 90%;
`;

export default VendingCards;
