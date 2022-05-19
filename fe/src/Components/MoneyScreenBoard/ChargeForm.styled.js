import { applyFlex } from "Helper/utils";
import styled from "styled-components";

export const ChargeForm = styled.form`
  ${({ theme }) => theme};
  ${({ flex }) => applyFlex({ flex })};
  padding: 5px;
  box-shadow: 0px 0px 20px 1px rgb(200, 200, 200);
`;

export const CashInput = styled.input`
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  padding: 10px;
  border: none;
  border-bottom: solid 1px;
  flex-grow: 1;
  margin-right: 10px;
  outline: none;
`;

export const Button = styled.button`
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  cursor: pointer;
`;
