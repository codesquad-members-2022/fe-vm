import { Flex, DragDisable } from 'assets/style/common';
import styled from 'styled-components';

const Selector = styled.div`
  ${DragDisable}
  flex-direction: column;
  width: 183px;
  height: 43px;
  cursor: pointer;
`;

const SelectTitle = styled.span`
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.black};
`;

const SelectBox = styled.div`
  ${({ flexType }) => flexType && Flex[flexType]};
  height: 100%;
  padding: 10px;
`;

const SelectList = styled.ul`
  position: absolute;
  width: 185px;
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.black};
  border-radius: 0px 0px 5px 5px;
`;

const SelectorWrapper = styled.div`
  ${Flex.centerLeft}
  width: 270px;
  border-top: 1px solid black;
`;

export { Selector, SelectTitle, SelectBox, SelectList, SelectorWrapper };
