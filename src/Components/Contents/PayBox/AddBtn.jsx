import { useContext } from 'react';
import { MessageContext } from '../../../Context/MessageProvider';
import { PayMoneyContext, PayTotalContext } from '../../../Context/PayProvider';
import { WalletMoneyContext } from '../../../Context/WalletMoneyProvider';
import { MessageType, RESET_NUM } from '../../../Utils/constants';
import {
  changeNumToLocalMoney,
  getMessage,
  replaceNotNumToSpace,
} from '../../../Utils/utils';
import { FontSize } from '../../../Assets/Common.style';
import Btn from '../../Btn';

export default function AddBtn() {
  const { printMessages, setPrintMessages } = useContext(MessageContext);
  const { payTotal, setPayTotal } = useContext(PayTotalContext);
  const { payMoney, setPayMoney } = useContext(PayMoneyContext);
  const {
    walletMoneyTotal,
    resetWalletMoney,
    walletMoneyUnitInfo,
    setMoneyUnitInfo,
  } = useContext(WalletMoneyContext);

  const correctPayMoney = ({ payMoney, walletMoneyTotal }) => {
    let FinalPayMoney = payMoney;

    if (payMoney > walletMoneyTotal) {
      resetWalletMoney();
      return {
        FinalPayMoney: walletMoneyTotal,
        FinalPayTotal: walletMoneyTotal + payTotal,
      };
    }

    let calcPayMoney = payMoney;
    const newMoney = [...walletMoneyUnitInfo];

    for (let i = newMoney.length - 1; i >= 0; i--) {
      const { unit, count } = newMoney[i];
      if (calcPayMoney >= unit && count > 0) {
        const calcCount = Math.min(Math.floor(calcPayMoney / unit), count);
        calcPayMoney -= calcCount * unit;
        newMoney[i] = {
          ...newMoney[i],
          count: count - calcCount,
        };
      }
    }
    setMoneyUnitInfo(newMoney);
    FinalPayMoney = payMoney - calcPayMoney;
    return {
      FinalPayMoney,
      FinalPayTotal: payTotal + FinalPayMoney,
    };
  };

  const addBtnClickHandler = (e) => {
    e.preventDefault();
    if (payMoney === RESET_NUM) {
      setPrintMessages([
        ...printMessages,
        getMessage(MessageType.NOT_PAY_MONEY),
      ]);
      return;
    }
    if (walletMoneyTotal === '0') {
      setPayMoney(0);
      setPrintMessages([...printMessages, getMessage(MessageType.NO_MONEY)]);
      return;
    }

    const { FinalPayMoney, FinalPayTotal } = correctPayMoney({
      payMoney: Number(replaceNotNumToSpace(payMoney)),
      walletMoneyTotal: Number(replaceNotNumToSpace(walletMoneyTotal)),
    });

    const addMessage = getMessage(
      MessageType.ADD,
      changeNumToLocalMoney(FinalPayMoney),
    );

    setPayMoney(0);
    setPayTotal(FinalPayTotal);
    setPrintMessages([...printMessages, addMessage]);
  };

  return (
    <Btn
      type="submit"
      title="ADD"
      textTag="span"
      fontSize={FontSize.LARGE}
      eventHandler={addBtnClickHandler}
    />
  );
}
