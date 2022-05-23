import { useContext } from 'react';
import styled from 'styled-components';
import { PayTotalContext } from '../../../Context/PayProvider';

export default function PayTotal() {
  const { convertPayTotal } = useContext(PayTotalContext);
  return <Total>{convertPayTotal}</Total>;
}

const Total = styled.div`
  color: inherit;
`;
