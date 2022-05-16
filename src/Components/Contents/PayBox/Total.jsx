import { useContext } from 'react';
import styled from 'styled-components';
import { Color, FontSize, Radius10 } from '../../../Assets/Common.style';
import { changeNumToLocalMoney } from '../../../Utils/utils';
import { contentsContext } from '../../MainContents';

export default function PayTotal() {
  const { payTotal } = useContext(contentsContext);
  const formatValue = changeNumToLocalMoney(payTotal);
  return <Total>{formatValue}</Total>;
}

const Total = styled.div`
  height: 60px;
  padding: 0 20px;
  ${Radius10}
  font-family: 'Koulen', cursive;
  text-align: right;
  font-size: ${FontSize.X_LARGE};
  line-height: 60px;
  letter-spacing: 0.2em;
  color: ${Color.ORANGE[100]};
  background: ${Color.BLACK};
`;
