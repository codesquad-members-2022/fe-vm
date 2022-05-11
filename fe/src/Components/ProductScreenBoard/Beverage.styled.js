import { applyFlex } from 'Helper/utils';
import styled from 'styled-components';

const createBorder = (flag) => {
  return flag ? `border: 2px solid #ec407a` : `border: 2px solid #000`;
};
export const BeverageContainer = styled.div`
  box-sizing: border-box;
  ${({ buyPossible }) => {
    return createBorder(buyPossible) + '; cursor:pointer';
  }};
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
