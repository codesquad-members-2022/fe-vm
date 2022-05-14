import styled, { css } from 'styled-components';

import { BUTTON_THEME, BUTTON_SIZE } from '@components/atoms/Button/index';
import { COLOR, FONT_SIZE, FONT_WEIGHT } from '@constants';

const themeStyles = css`
  ${({ theme }) =>
    theme === BUTTON_THEME.DEFAULT &&
    css`
      border-radius: 7px;
    `}

  ${({ theme }) =>
    theme === BUTTON_THEME.ROUNDED &&
    css`
      border-radius: 30px;
    `}
  }
`;

const sizeStyles = css`
  ${({ size }) =>
    size === BUTTON_SIZE.SMALL &&
    css`
      width: 80px;
      height: 40px;
      font-size: ${FONT_SIZE.MEDIUM};
    `}

  ${({ size }) =>
    size === BUTTON_SIZE.MEDIUM &&
    css`
      width: 100px;
      height: 35px;
      font-size: ${FONT_SIZE.SMALL};
    `}

  ${({ size }) =>
    size === BUTTON_SIZE.LARGE &&
    css`
      width: 150px;
      height: 80px;
      font-size: ${FONT_SIZE.LARGE};
    `}

  ${({ size }) =>
    size === BUTTON_SIZE.X_LARGE &&
    css`
      width: 250px;
      height: 58px;
      font-size: ${FONT_SIZE.MEDIUM};
    `}
  }
`;

const Button = styled.button`
  color: ${COLOR.WHITE};
  font-weight: ${FONT_WEIGHT.BOLD};
  background-color: ${COLOR.BLUE};
  transition: all 200ms;

  &:hover {
    background-color: ${COLOR.DARK_BLUE};
  }

  &:disabled {
    background-color: ${COLOR.LIGHT_GREY};
  }

  span {
    position: relative;
    top: -1px;
  }

  /* 테마 */
  ${themeStyles}

  /* 크기 */
  ${sizeStyles}
`;

export { Button };
