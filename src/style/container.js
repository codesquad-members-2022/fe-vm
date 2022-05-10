import styled, { css } from 'styled-components';

const Container = styled.div`
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};
  `}
`;

export default Container;
