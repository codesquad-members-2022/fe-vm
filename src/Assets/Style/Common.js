import { css } from 'styled-components';

const F_center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Default_shadow = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Default_radius = css`
  border-radius: 1.5rem;
`;

const Color = {
  white: '#FFFFFF',
  backGroundGray: '#E9E9E9',
  gray: '#D9D9D9',
  lightGray: '#EAEAEA',
  darkGray: '#B6B6B6',
  yellowGreen: '#12DD88',
  neonGreen: 'rgba(64, 233, 101, 1)',
};

export { F_center, Default_radius, Default_shadow, Color };
