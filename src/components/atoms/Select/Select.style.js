import styled, { css } from 'styled-components';

import { COLOR, FONT_WEIGHT } from '@constants';

const SelectContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  background-color: ${COLOR.OFF_WHITE};
  border-radius: 7px;
  padding: 8px 10px;
`;

const Value = styled.p`
  font-weight: ${FONT_WEIGHT.MEDIUM};
`;

const Select = styled.ul`
  position: absolute;
  top: calc(100% + 1px);
  width: 150px;
  color: ${COLOR.DARK_GREY};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  background-color: ${COLOR.OFF_WHITE};
  border-radius: 7px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
`;

const Option = styled.li`
  font-weight: ${FONT_WEIGHT.MEDIUM};
  padding: 8px 0;
  margin: 0 10px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${COLOR.LIGHT_GREY};
  }

  ${({ selected }) => {
    return (
      selected &&
      css`
        color: ${COLOR.BLUE};
        font-weight: ${FONT_WEIGHT.BLACK};
      `
    );
  }}
`;

export { SelectContainer, SelectBox, Value, Select, Option };
