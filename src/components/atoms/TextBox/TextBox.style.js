import styled from 'styled-components';

import { COLOR, FONT_SIZE, FONT_WEIGHT } from '@constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 80px;
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
  background-color: ${COLOR.OFF_WHITE};
  border-radius: 7px;
`;

export { Container };
