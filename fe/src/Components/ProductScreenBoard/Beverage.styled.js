import { applyFlex } from "Helper/utils";
import styled from "styled-components";

const createBorder = (isBuyPossible) => {
  // return isBuyPossible ? `border: 2px solid #ec407a` : `border: 2px solid #000`;
  return isBuyPossible
    ? `box-shadow: 0px 0px 20px 1px rgb(200, 0, 200)`
    : `box-shadow: 0px 0px 20px 1px rgb(200, 200, 200)`;
};
export const BeverageContainer = styled.div`
  ${({ isBuyPossible }) => {
    return createBorder(isBuyPossible) + "; cursor:pointer";
  }};
  border: 2px solid #000;
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
