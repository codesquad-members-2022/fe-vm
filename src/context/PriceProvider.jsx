/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const PriceContext = React.createContext();

export default function PriceProvider({ children }) {
  const [inputPrice, setInputPrice] = useState(0);
  const [progressMsg, setProgressMsg] = useState([]);
  const [remainMoney, setRemainMoney] = useState(0);

  const updatePrice = ({ currentMoney, msg }) => {
    setProgressMsg([...progressMsg, msg]);

    if (!currentMoney) {
      setRemainMoney(0);
      setInputPrice(0);
      return remainMoney;
    }

    setRemainMoney(remainMoney + currentMoney);
  };

  const insertInput = ({ currentMoney, msg }) => {
    setInputPrice(currentMoney);
    updatePrice({ currentMoney, msg });
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
      insertInput,
    }),
    [
      inputPrice,
      setInputPrice,
      progressMsg,
      setProgressMsg,
      remainMoney,
      setRemainMoney,
      updatePrice,
      insertInput,
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
