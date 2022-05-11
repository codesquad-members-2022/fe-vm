import styled from 'styled-components';
import { Max_width, Flex_Center } from '../../Assets/CommonStyle';
import VendingMachine from './VM';
import Wallet from './wallet';

export function Main({ isVMClicked, isWalletClicked }) {
  return (
    <StyledMain>
      <VendingMachine isClicked={isVMClicked} />
      <Wallet isClicked={isWalletClicked} />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  ${Max_width}
  ${Flex_Center}
  margin : 0 auto;
`;
