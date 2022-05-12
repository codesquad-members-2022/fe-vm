import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { COLOR, FONT_WEIGHT } from '@constants';

const activeStyles = css`
  ${({ $active }) =>
    $active
      ? css`
          background-color: ${COLOR.BLUE};
          &:hover {
            background-color: ${COLOR.DARK_BLUE};
          }
        `
      : css`
          background-color: ${COLOR.LIGHT_GREY};
          &:hover {
            background-color: ${COLOR.GREY};
          }
        `}
`;

const Tab = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 58px;
  color: ${COLOR.WHITE};
  font-weight: ${FONT_WEIGHT.BOLD};
  transition: all 200ms;

  span {
    position: relative;
    top: -3px;
  }

  /* 활성화  */
  ${activeStyles}
`;

export { Tab };
