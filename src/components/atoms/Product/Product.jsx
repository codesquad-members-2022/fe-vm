import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MoneyContext } from 'context/MoneyContext';
import StyledProduct from './Product.style';

function Product({ product, productList, setProductList }) {
  const [buyable, setBuyable] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const { totalInsertMoney } = useContext(MoneyContext);

  useEffect(() => {
    setBuyable(false);
    if (product.price <= totalInsertMoney && product.stock > 0) {
      setBuyable(true);
    }
  }, [totalInsertMoney]);

  useEffect(() => {
    if (product.stock === 0) {
      setSoldOut(true);
      setBuyable(false);
    }
  }, [product]);

  function handleProductClick(event) {
    event.preventDefault();
    if (!buyable) return;
    const selectedProductId = event.target.id;
    const updatedProductList = productList.map(productItem => {
      if (productItem.id === selectedProductId && productItem.stock > 0) {
        const updatedProduct = {
          id: productItem.id,
          icon: productItem.icon,
          price: productItem.price,
          stock: productItem.stock - 1,
        };
        return updatedProduct;
      }
      return productItem;
    });
    setProductList(updatedProductList);
  }

  return (
    <StyledProduct buyable={buyable} soldOut={soldOut}>
      <button type="button" id={product.id} onClick={handleProductClick}>
        {product.icon}
      </button>
      <span>{product.price}</span>
    </StyledProduct>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
  }),
  productList: PropTypes.arrayOf(PropTypes.objectOf),
  setProductList: PropTypes.func,
};

export default Product;
