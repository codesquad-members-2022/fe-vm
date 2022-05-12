import styled from 'styled-components';
import { Box_Shadow, Border, Flex_Center } from '../../Assets/CommonStyle';
export default function Wallet({ isClicked }) {
  return (
    <>
      {isClicked ? (
        <StyledWallet>
          <span>지갑</span>
        </StyledWallet>
      ) : null}
    </>
  );
}

const StyledWallet = styled.div`
  ${Flex_Center}
  width: 200px;
  height: 600px;
  ${Border}
  border-radius: 10px;
  ${Box_Shadow}
  margin-right: 10px;
`;
