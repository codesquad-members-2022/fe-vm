import { css } from 'styled-components';

export const Flexbox = css`
  display: flex;
  flex-direction: ${({ dir = 'row' }) => dir};
  justify-content: ${({ jc = 'center' }) => jc};
  align-items: ${({ ai = 'center' }) => ai};
`;
