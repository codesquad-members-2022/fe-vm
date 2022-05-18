import styled from 'styled-components';

import { COLOR } from '@constants';

const Container = styled.div`
  width: 350px;
  height: 800px;
  background-color: ${COLOR.LIGHT_BLUE};
  border-radius: 10px;
  padding: 50px;

  > * {
    margin-bottom: 30px;
  }
`;

export { Container };
