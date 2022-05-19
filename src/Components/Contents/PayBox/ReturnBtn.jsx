import { useContext } from 'react';
import { contentsContext } from '../../MainContents';
import { FontSize } from '../../../Assets/Common.style';
import { RESET_NUM } from '../../../Utils/constants';
import Btn from '../../Btn';

export default function ReturnBtn() {
  const { setPayTotal } = useContext(contentsContext);
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
