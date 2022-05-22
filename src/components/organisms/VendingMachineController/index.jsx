import Button from 'components/atoms/Button';
import Label from 'components/atoms/Label';
import LogList from 'components/molecules/LogList';
import NavButton from 'components/molecules/NavButton';
import UserInputBox from 'components/molecules/UserInputBox';
import * as Styled from 'components/organisms/VendingMachineController/VendingMachineController.style';
import { CURRENCY_STR } from 'constants';
import { WalletContext } from 'context/Wallet';
import { useContext } from 'react';

const VMController = () => {
  const { state } = useContext(WalletContext);

  const labelStyle = {
    flexType: 'centerRight',
    sizeType: 'large',
    fontType: 'digital',
    borderType: 'rounded',
  };

  const buttonStyle = {
    sizeType: 'large',
    borderType: 'rounded',
    colorType: 'point',
    fontType: 'medium',
  };

  return (
    <Styled.VMController>
      <NavButton />
      <Styled.ControllerWrapper>
        <Label {...labelStyle}>
          {state?.insertedMoney} {CURRENCY_STR}
        </Label>
        <UserInputBox />
        <Button {...buttonStyle}>반환하기</Button>
        <LogList />
      </Styled.ControllerWrapper>
    </Styled.VMController>
  );
};

export default VMController;
