import { useContext } from 'react';
import { MessageContext } from '../../../Context/MessageProvider';
import { PayMoneyContext, PayTotalContext } from '../../../Context/PayProvider';
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

  const addBtnClickHandler = (e) => {
    e.preventDefault();
    if (payMoney === RESET_NUM)
      return setPrintMessages([
        ...printMessages,
        getMessage(MessageType.NOT_PAY_MONEY),
      ]);
    const formatNum = replaceNotNumToSpace(payMoney);
    const updateTotal = payTotal + Number(formatNum);
    const addMessage = getMessage(
      MessageType.ADD,
      changeNumToLocalMoney(formatNum),
    );

    setPayMoney(0);
    setPayTotal(updateTotal);
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
