import { useContext } from 'react';
import { PayTotalContext } from '../../../Context/PayProvider';
import { MessageContext } from '../../../Context/MessageProvider';
import { MatchType, MessageType, RESET_NUM } from '../../../Utils/constants';
import {
  changeNumToLocalMoney,
  getMessage,
  replaceNotNumToSpace,
} from '../../../Utils/utils';
import { FontSize } from '../../../Assets/Common.style';
import Btn from '../../Btn';

export default function ReturnBtn({ matchBalance }) {
  const { printMessages, setPrintMessages } = useContext(MessageContext);
  const { setPayTotal, payTotal } = useContext(PayTotalContext);

  const returnBtnClickHandler = () => {
    matchBalance({
      matchType: MatchType.RETURN,
      payTotal: Number(replaceNotNumToSpace(payTotal)),
    });
    setPayTotal(RESET_NUM);

    const addMessage = getMessage(
      MessageType.RETURN,
      changeNumToLocalMoney(payTotal),
    );
    setPrintMessages([...printMessages, addMessage]);
  };

  return (
    <Btn
      type="button"
      title="RETURN"
      textTag="span"
      fontSize={FontSize.LARGE}
      eventHandler={returnBtnClickHandler}
    />
  );
}
