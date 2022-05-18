import styled from 'styled-components';
import BalanceReturnBtn from './controller/BalanceReturnBtn';
import MoneySlot from './controller/MoneySlot';
import ProductViewWindow from './products/ProductViewWindow';

function VendingMachine() {
  return (
    <Container>
      <BgImg src="img/vending-machine.png" alt="자판기" />
      <ProductViewWindow />
      <MoneySlot />
      <BalanceReturnBtn />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 26px auto 0;
  width: 950px;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const BgImg = styled.img`
  display: block;
  width: 100%;
`;

export default VendingMachine;
