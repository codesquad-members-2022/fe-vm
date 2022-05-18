import styled from 'styled-components';

import { COLOR } from '@constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40px;
  background-color: ${COLOR.OFF_WHITE};
  border-radius: 7px;
  margin-bottom: 20px;
  cursor: text;
`;

const Input = styled.p`
  &:focus {
    outline: none;
  }
`;

export { Container, Input };
