import styled from 'styled-components';

import { COLOR, FONT_SIZE, FONT_WEIGHT } from '@constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${COLOR.OFF_WHITE};
  border-radius: 7px;
`;

const Emoji = styled.span`
  font-size: calc(10px + ${FONT_SIZE.DISPLAY});
  line-height: 4rem;
`;

const Name = styled.span`
  font-size: ${FONT_SIZE.X_SMALL};
  font-weight: ${FONT_WEIGHT.BOLD};
  margin-bottom: 8px;
`;

export { Container, Emoji, Name };
