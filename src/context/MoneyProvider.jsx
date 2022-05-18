/* eslint-disable no-restricted-syntax */
/* eslint-disable react/require-default-props */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const MoneyContext = React.createContext();

export default function MoneyProvider({ children }) {
  const initialTotalPrice = 25050;
  const [inputPrice, setInputPrice] = useState([]);
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);

  const value = useMemo(
    () => ({
      inputPrice,
      setInputPrice,
      totalPrice,
      setTotalPrice,
    }),
    [inputPrice, setInputPrice, totalPrice, setTotalPrice]
  );

  return (
    <MoneyContext.Provider value={value}>{children}</MoneyContext.Provider>
  );
}

MoneyProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
