import { FontSize } from '../../../Assets/Common.style';
import Btn from '../../Button';

export default function AddBtn() {
  return (
    <Btn type="button" title="ADD" textTag="span" fontSize={FontSize.LARGE} />
  );
}
