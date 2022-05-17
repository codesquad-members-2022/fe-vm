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

const notPayMoney = 0;

export default function AddBtn() {
  const { payTotal, setPayTotal, printMessages, setPrintMessages } =
    useContext(contentsContext);
  const { payMoney, setPayMoney } = useContext(payContext);

  const addBtnClickHandler = (e) => {
    e.preventDefault();
    if (payMoney === notPayMoney)
      return setPrintMessages([...printMessages, getMessage('notPayMoney')]);
    const formatNum = replaceNotNumToSpace(payMoney);
    const updateTotal = payTotal + Number(formatNum);
    const addMessage = getMessage('투입', changeNumToLocalMoney(formatNum));

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
