import { useContext } from 'react';
import { contentsContext } from '../../MainContents';
import { FontSize } from '../../../Assets/Common.style';
import Btn from '../../Btn';

const resetPayNum = 0;

export default function ReturnBtn() {
  const { setPayTotal } = useContext(contentsContext);
  const returnBtnClickHandler = () => {
    setPayTotal(resetPayNum);
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
