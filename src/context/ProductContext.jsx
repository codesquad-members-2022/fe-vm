import { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import PRODUCTS from 'constants/product';

const ProductContext = createContext({});

function ProductProvider({ children }) {
  const [productList, setProductList] = useState(PRODUCTS);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const productInfo = {
    productList,
    setProductList,
  };
  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.element,
};

export { ProductContext, ProductProvider };
