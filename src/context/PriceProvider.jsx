/* eslint-disable react/require-default-props */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const PriceContext = React.createContext();

export default function PriceProvider({ children }) {
  const [inputPrice, setInputPrice] = useState(0);
  const [progressMsg, setProgressMsg] = useState([]);
  const [remainMoney, setRemainMoney] = useState(0);

  const updatePrice = (currentMoney) => {
    setInputPrice(currentMoney);
    setProgressMsg([...progressMsg, `${currentMoney}원이 투입되었습니다.`]);
  };

  const value = useMemo(
    () => ({
      inputPrice,
      setInputPrice,
      progressMsg,
      setProgressMsg,
      remainMoney,
      setRemainMoney,
      updatePrice,
    }),
    [
      inputPrice,
      setInputPrice,
      progressMsg,
      setProgressMsg,
      remainMoney,
      setRemainMoney,
      updatePrice,
    ]
  );

  return (
    <PriceContext.Provider value={value}>{children}</PriceContext.Provider>
  );
}

PriceProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
