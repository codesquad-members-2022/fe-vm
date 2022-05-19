import { useContext } from 'react';
import { PayTotalContext } from '../../../Context/PayProvider';
import { RESET_NUM } from '../../../Utils/constants';
import { FontSize } from '../../../Assets/Common.style';
import Btn from '../../Btn';

export default function ReturnBtn() {
  const { setPayTotal } = useContext(PayTotalContext);
  const returnBtnClickHandler = () => {
    setPayTotal(RESET_NUM);
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
