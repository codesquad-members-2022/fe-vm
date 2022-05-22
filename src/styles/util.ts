import { css } from 'styled-components';

interface IFlexbox {
  dir: string;
  jc: string;
  ai: string;
}

export const Flexbox = css<IFlexbox>`
  display: flex;
  flex-direction: ${({ dir = 'row' }) => dir};
  justify-content: ${({ jc = 'center' }) => jc};
  align-items: ${({ ai = 'center' }) => ai};
`;
