import styled from 'styled-components';
import { useContext } from 'react';
import { ProductsContext } from '../../../../index';
import Product from './Product';

function ProductViewWindow() {
  const { products } = useContext(ProductsContext);

  return (
    <ViewWindow>
      {products.map(({ code, alt, price }) => (
        <Product key={code} alt={alt} price={price} />
      ))}
    </ViewWindow>
  );
}

const ViewWindow = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  padding: 0 10px;
  width: 865px;
  height: 254px;
  top: 42px;
  left: 42px;
`;

export default ProductViewWindow;
