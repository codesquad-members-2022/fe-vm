import styled from 'styled-components';

import { COLORS } from 'constants';
import productData from 'mocks/productData';

import ProductCard from 'components/VendingMachine/ProductCard';

const VendingMachine = () => {
  return (
    <VendingMachineContainer>
      <Products>
        {productData.map(({ id, name, price, count, url }) => (
          <ProductCard key={id} name={name} price={price} count={count} url={url} />
        ))}
      </Products>
      <div className='orderform'>form창</div>
      <div className='history'>로그창</div>
    </VendingMachineContainer>
  );
};

const Products = styled.div`
  grid-area: products;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  padding: 64px;
  border-radius: 24px;
  background: ${COLORS.GRAY_1};
`;

const VendingMachineContainer = styled.div`
  display: grid;
  grid-template-columns: 792px 368px;
  grid-template-rows: 224px 568px;
  grid-template-areas: 'products orderform' 'products history';
  gap: 24px;

  .orderform {
    grid-area: orderform;
  }
  .history {
    grid-area: history;
    padding: 24px;
    border-radius: 24px;
    background: ${COLORS.GRAY_1};
  }
`;

export default VendingMachine;
