import { applyFlex } from 'Helper/utils';
import styled from 'styled-components';

export const BeverageContainer = styled.div`
  border: 1px solid #000;
  margin: 20px;
  width: 100px;
  height: 100px;
`;
export const Title = styled.div`
  border-bottom: 1px solid;
  width: 100px;
  height: 70px;
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })}
`;
export const Price = styled.div`
  width: 100px;
  height: 30px;
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })}
`;
