import { FontSize } from '../../../Assets/Common.style';
import Btn from '../../Btn';

export default function ReturnBtn() {
  return (
    <Btn
      type="button"
      title="RETURN"
      textTag="span"
      fontSize={FontSize.LARGE}
    />
  );
}
