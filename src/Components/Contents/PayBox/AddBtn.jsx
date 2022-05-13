import { FontSize } from '../../../Assets/Common.style';
import { changeNumToLocalMoney, getMessage } from '../../../Utils/utils';
import Btn from '../../Button';

export default function AddBtn({ payTotal, payMoney, input, message }) {
  const addBtnClickHandler = (e) => {
    e.preventDefault();
    input.current.value = '';
    if (isNaN(payMoney)) return;
    const updateTotal = payTotal.value + Number(payMoney);
    // const MESSAGE = `${changeNumToLocalMoney(payMoney)}원을 투입했습니다.`;
    const MESSAGE = getMessage('투입', changeNumToLocalMoney(payMoney));

    payTotal.set(updateTotal);
    message.set([...message.value, MESSAGE]);
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
