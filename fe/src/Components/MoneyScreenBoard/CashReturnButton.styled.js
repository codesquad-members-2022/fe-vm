import { applyFlex } from "Helper/utils";
import styled from "styled-components";

export const ReturnButton = styled.button`
  ${({ theme }) => theme};
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  cursor: pointer;
  box-shadow: 0px 0px 20px 1px rgb(200, 200, 200);
`;
