import { applyFlex } from "Helper/utils";
import styled from "styled-components";

const createBorder = ({ isBuyPossible, orderInProgress, id, stock }) => {
  if (orderInProgress === id) {
    return `box-shadow: 0px 0px 20px 1px rgb(0, 200, 200)`;
  }

  return isBuyPossible && stock
    ? `box-shadow: 0px 0px 20px 1px rgb(200, 0, 200)`
    : `box-shadow: 0px 0px 20px 1px rgb(200, 200, 200)`;
};

const createBackground = ({ stock }) => {
  return stock ? `background-color: rgba(255, 255, 255, 1)` : `background-color: rgba(200, 200, 200, 1)`;
};

export const BeverageContainer = styled.div`
  ${({ isBuyPossible, orderInProgress, id, stock }) => {
    return createBorder({ isBuyPossible, orderInProgress, id, stock }) + "; cursor:pointer";
  }};

  ${({ stock }) => createBackground({ stock })};
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
