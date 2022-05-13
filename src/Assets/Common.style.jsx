import styled from 'styled-components';
import { css } from 'styled-components';

const Relative = css`
  position: relative;
`;

const Absolute = css`
  position: absolute;
`;

const F_basic = css`
  display: flex;
`;

const F_basicCenter = css`
  ${F_basic}
  align-items: center;
`;

const F_BetweenCenter = css`
  ${F_basic}
  align-items: center;
  justify-content: space-between;
`;

const F_Center = css`
  ${F_basic}
  align-items: center;
  justify-content: center;
`;

const F_ColumnBetweenCenter = css`
  ${F_BetweenCenter}
  flex-direction: column;
`;

const Radius10 = css`
  border-radius: 10px;
`;

const Radius20 = css`
  border-radius: 20px;
`;

const FontSize = {
  DISPLAY: '2rem', // 32px
  X_LARGE: '1.875rem', // 30px
  LARGE: '1.5rem', // 24px
  MEDIUM: '1.25rem', // 20px
  REGULAR: '1rem', // 16px
  SMALL: '0.875rem', // 14px
};

const FontWeight = {
  REGULAR: '400',
  BOLD: '700',
};

const Color = {
  BLACK: '#1B1B1B',
  ORANGE: {
    100: '#FFA800',
    200: '#FF7A00',
  },
  GRAY: '#C4C4C4',
  WHITE: '#FFF',
  BACKGROUND: '#FFFCE4',
};

const GrayButton = styled.div`
  background: #c4c4c4;

  &.active {
    background: #ff7a00;
  }
`;

export {
  Relative,
  Absolute,
  F_basicCenter,
  F_Center,
  F_BetweenCenter,
  F_ColumnBetweenCenter,
  Radius10,
  Radius20,
  FontWeight,
  FontSize,
  Color,
  GrayButton,
};
