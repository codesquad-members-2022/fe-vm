import { useState } from 'react';
import styled from 'styled-components';
import DATA from './data';
import { ContentBox } from '../style';
import ProductList from './ProductList';
import MachineRight from './MachineRight';
import { createContext } from 'react';

export const payContext = createContext(0);

export default function VendingMachine() {
  const [payMoney, setPayMoney] = useState(0);
  return (
    <payContext.Provider value={{ payMoney, setPayMoney }}>
      <MachineContents>
        <ProductList products={DATA} />
        <MachineRight />
      </MachineContents>
    </payContext.Provider>
  );
}

const MachineContents = styled(ContentBox)`
  display: grid;
  grid-template-columns: 1fr 380px;
  grid-gap: 20px;
`;
