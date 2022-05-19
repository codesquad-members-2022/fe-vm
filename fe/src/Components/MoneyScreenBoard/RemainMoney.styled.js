import { applyFlex } from "Helper/utils";
import styled from "styled-components";
export const Screen = styled.div`
  ${({ theme }) => theme};
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  margin-top: 50px;
  box-shadow: 0px 0px 20px 1px rgb(200, 200, 200);
`;
