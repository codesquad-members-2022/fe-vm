import styled from 'styled-components';

import { COLOR } from '@constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 33px;
  width: 800px;
  height: 800px;
  background-color: ${COLOR.LIGHT_BLUE};
  border-radius: 10px;
`;

export { Container };
