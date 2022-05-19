import { applyFlex } from "Helper/utils";
import styled from "styled-components";

export const Screen = styled.div`
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  ${({ theme }) => theme};
  box-shadow: 0px 0px 20px 1px rgb(200, 200, 200);
`;
