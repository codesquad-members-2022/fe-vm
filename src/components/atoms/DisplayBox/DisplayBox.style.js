import styled, { css } from 'styled-components';

import { DISPLAY_BOX_SIZE } from '@components/atoms/DisplayBox';
import { COLOR, FONT_SIZE, FONT_WEIGHT } from '@constants';

const sizeStyles = css`
  ${({ size }) =>
    size === DISPLAY_BOX_SIZE.MEDIUM &&
    css`
      width: 250px;
      height: 150px;
      font-size: ${FONT_SIZE.MEDIUM};

      ${Content} {
        font-size: ${FONT_SIZE.X_LARGE};
      }
    `}

  ${({ size }) =>
    size === DISPLAY_BOX_SIZE.LARGE &&
    css`
      width: 690px;
      height: 200px;

      ${Title} {
        font-size: ${FONT_SIZE.LARGE};
      }

      ${Content} {
        font-size: ${FONT_SIZE.DISPLAY};
      }
    `}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 250px;
  height: 150px;
  background-color: ${COLOR.OFF_WHITE};
  border-radius: 7px;
  padding: 15px;

  /* 크기 */
  ${sizeStyles}
`;

const Title = styled.h3``;

const Content = styled.p`
  position: absolute;
  top: 55%;
  font-weight: ${FONT_WEIGHT.BOLD};
  transform: translateY(-50%);
`;

export { Container, Title, Content };
