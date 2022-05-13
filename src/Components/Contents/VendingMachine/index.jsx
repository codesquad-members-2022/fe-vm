import styled from 'styled-components';
import DATA from './data';
import { ContentBox } from '../style';
import ProductList from './ProductList';
import MachineRight from './MachineRight';
import { useState } from 'react';

export default function VendingMachine({ payTotal, message }) {
  const [payMoney, setPayMoney] = useState(0);
  return (
    <MachineContents>
      <ProductList products={DATA} payTotal={payTotal} message={message} />
      <MachineRight
        payTotal={payTotal}
        payMoney={{ value: payMoney, set: setPayMoney }}
        message={message}
      />
    </MachineContents>
  );
}

const MachineContents = styled(ContentBox)`
  display: grid;
  grid-template-columns: 1fr 380px;
  grid-gap: 20px;
`;
