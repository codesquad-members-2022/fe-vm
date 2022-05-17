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
  color: inherit;
`;
