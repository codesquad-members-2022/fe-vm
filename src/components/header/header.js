import styled from 'styled-components';

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
    <div>
      <VMButton isClick={isVMClicked} onClick={handleVMClick}>
        자판기
      </VMButton>
      <WalletButton isClick={isWalletClicked} onClick={handleWalletClick}>
        지갑
      </WalletButton>
    </div>
  );
};

const VMButton = styled.button`
  color: ${({ isClick }) => isClick && 'tomato'};
  cursor: pointer;
`;

const WalletButton = styled.button`
  color: ${({ isClick }) => isClick && 'tomato'};
  cursor: pointer;
`;
