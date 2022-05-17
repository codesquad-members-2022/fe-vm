import { applyFlex } from "Helper/utils";
import styled from "styled-components";

export const CoinBoxContainer = styled.div``;

export const CoinBox = styled.div`
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  div {
    box-shadow: 0px 0px 20px 1px rgb(200, 200, 200);
  }
`;

export const TotalBox = styled.div`
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  div {
    ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
    font-size: 2rem;
    width: 300px;
    height: 70px;
    margin: 20px;
    border: 2px solid #000;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const Money = styled.div`
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  font-size: 2rem;
  width: 150px;
  height: 70px;
  margin: 20px;
  border: 2px solid #000;
  border-radius: 10px;
  cursor: pointer;
`;

export const Count = styled.div`
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  font-size: 2rem;
  width: 150px;
  height: 70px;
  margin: 20px;
  border: 2px solid #000;
  border-radius: 10px;
  cursor: pointer;
`;
