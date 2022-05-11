import styled from 'styled-components';
import {
  Common_Button,
  Max_width,
  Flex_Center,
} from '../../Assets/CommonStyle';

export const Header = ({ VMStateObj, WalletStateObj }) => {
  const { isVMClicked, setVMClicked } = VMStateObj;
  const { isWalletClicked, setWalletClicked } = WalletStateObj;

  const handleVMClick = () => {
    setVMClicked(!isVMClicked);
  };

  const handleWalletClick = () => {
    setWalletClicked(!isWalletClicked);
  };

  return (
    <StyleHeader>
      <VMButton isClick={isVMClicked} onClick={handleVMClick}>
        자판기
      </VMButton>
      <WalletButton isClick={isWalletClicked} onClick={handleWalletClick}>
        지갑
      </WalletButton>
    </StyleHeader>
  );
};

const StyleHeader = styled.div`
  ${Flex_Center}
  ${Max_width}
  margin: 0 auto;
  height: 100px;
`;

const VMButton = styled(Common_Button)`
  color: ${({ isClick }) => isClick && 'white'};
  background-color: ${({ isClick }) => isClick && '#50BCDF'};
  cursor: pointer;
  margin-right: 10px;
`;

const WalletButton = styled(Common_Button)`
  color: ${({ isClick }) => isClick && 'white'};
  background-color: ${({ isClick }) => isClick && '#50BCDF'};
  cursor: pointer;
`;
