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
  black: '#010305;',
  white: '#FFFFFF',
  gray: '#D9D9D9',
  headerGray: '#1C2024',
  backGroundGray: '#2B2F34;',
  lightGray: '#3D444C',
  darkGray: '#1D2125;',
  yellowGreen: '#12DD88',
  neonGreen: 'rgba(64, 233, 101, 1)',
};

export { F_center, Default_radius, Default_shadow, Color };
