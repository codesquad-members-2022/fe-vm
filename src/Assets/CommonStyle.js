import styled, { css } from 'styled-components';

const Box_Shadow = css`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const Border = css`
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Common_Button = styled.button`
  font-size: 16px;
  ${Border}
  background-color: white;
  border-radius: 5%;
  width: 120px;
  height: 50px;
  ${Box_Shadow}
`;

const Max_width = css`
  max-width: 1440px;
`;

const Flex = css`
  display: flex;
`;

const Flex_Center = css`
  ${Flex}
  align-items: center;
  justify-content: center;
`;

export { Box_Shadow, Border, Common_Button, Max_width, Flex, Flex_Center };
