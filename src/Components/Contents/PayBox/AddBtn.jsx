import { useContext } from 'react';
import { MessageContext } from '../../../Context/MessageProvider';
import { PayMoneyContext, PayTotalContext } from '../../../Context/PayProvider';
import { WalletMoneyContext } from '../../../Context/WalletMoneyProvider';
import { MatchType, MessageType, RESET_NUM } from '../../../Utils/constants';
import {
  changeNumToLocalMoney,
  getMessage,
  replaceNotNumToSpace,
} from '../../../Utils/utils';
import { FontSize } from '../../../Assets/Common.style';
import Btn from '../../Btn';

export default function AddBtn({ matchBalance }) {
  const { printMessages, setPrintMessages } = useContext(MessageContext);
  const { payTotal, setPayTotal } = useContext(PayTotalContext);
  const { payMoney, setPayMoney } = useContext(PayMoneyContext);
  const { walletMoneyTotal } = useContext(WalletMoneyContext);

  const addBtnClickHandler = (e) => {
    e.preventDefault();
    setPayMoney(RESET_NUM);

    if (payMoney === RESET_NUM) {
      setPrintMessages([
        ...printMessages,
        getMessage(MessageType.NOT_PAY_MONEY),
      ]);
      return;
    }
    if (walletMoneyTotal === RESET_NUM) {
      setPrintMessages([...printMessages, getMessage(MessageType.NO_MONEY)]);
      return;
    }

    const { FinalPayMoney, FinalPayTotal } = matchBalance({
      matchType: MatchType.ADD,
      payMoney: Number(replaceNotNumToSpace(payMoney)),
      payTotal,
    });

    const addMessage = getMessage(
      MessageType.ADD,
      changeNumToLocalMoney(FinalPayMoney),
    );
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
