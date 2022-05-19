import { useContext } from 'react';
import { FontSize } from '../../../Assets/Common.style';
import { contentsContext } from '../../MainContents';
import { payContext } from '../VendingMachine';
import {
  changeNumToLocalMoney,
  getMessage,
  replaceNotNumToSpace,
} from '../../../Utils/utils';
import Btn from '../../Btn';
import { MessageType, RESET_NUM } from '../../../Utils/constants';

export default function AddBtn() {
  const { payTotal, setPayTotal, printMessages, setPrintMessages } =
    useContext(contentsContext);
  const { payMoney, setPayMoney } = useContext(payContext);

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
