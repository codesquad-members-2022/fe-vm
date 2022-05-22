import Button from 'components/atoms/Button';
import Label from 'components/atoms/Label';
import LogList from 'components/molecules/LogList';
import NavButton from 'components/molecules/NavButton';
import UserInputBox from 'components/molecules/UserInputBox';
import * as Styled from 'components/organisms/VendingMachineController/VendingMachineController.style';
import { CURRENCY_STR } from 'constants';
import { LogContext } from 'context/Log';
import { WalletContext } from 'context/Wallet';
import { useContext } from 'react';

const VMController = () => {
  const { state, returnMoney, walletDispatch } = useContext(WalletContext);
  const { addLog, LOG_TYPE, logDispatch } = useContext(LogContext);

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

  const handleOnClick = () => {
    const { sumOfInsertedMoney } = state;

    if (!sumOfInsertedMoney) {
      return;
    }

    returnMoney(walletDispatch);
    addLog(logDispatch, LOG_TYPE.OUTPUT, sumOfInsertedMoney);
  };

  return (
    <Styled.VMController>
      <NavButton />
      <Styled.ControllerWrapper>
        <Label {...labelStyle}>
          {state?.sumOfInsertedMoney || 0} {CURRENCY_STR}
        </Label>
        <UserInputBox />
        <Button onClick={handleOnClick} {...buttonStyle}>
          반환하기
        </Button>
        <LogList />
      </Styled.ControllerWrapper>
    </Styled.VMController>
  );
};

export default VMController;
