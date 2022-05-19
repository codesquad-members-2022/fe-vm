import { useState, createContext } from 'react';
import styled from 'styled-components';
import DATA from './data';
import { ContentBox } from '../style';
import ProductList from './ProductList';
import MachineRight from './MachineRight';

export const productImgContext = createContext(0);

export default function VendingMachine() {
  const [pickProductImg, setPickProductImg] = useState(undefined);

  return (
    <productImgContext.Provider value={{ pickProductImg, setPickProductImg }}>
      <MachineContents>
        <ProductList products={DATA} />
        <MachineRight />
      </MachineContents>
    </productImgContext.Provider>
  );
}

const MachineContents = styled(ContentBox)`
  display: grid;
  grid-template-columns: 1fr 380px;
  grid-gap: 20px;
`;
