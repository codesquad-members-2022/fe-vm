import styled, { css } from 'styled-components';

const Container = styled.div`
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};
  `}
  ${(props) => props.display && props.theme.mixin.flexMixin()}
  ${(props) => props.flexInfo && props.theme.mixin.flexMixin(...props.flexInfo)}
`;

export default Container;
