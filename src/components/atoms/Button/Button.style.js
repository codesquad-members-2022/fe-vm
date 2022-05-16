import { defaultTheme } from 'assets/style/default';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { Border } from 'assets/style/common';

/* SizeType : width, height */
const ThinSize = css`
  width: 83px;
  height: 30px;
`;

const SmallSize = css`
  width: 87px;
  height: 43px;
`;

const MediumSize = css`
  width: 156px;
  height: 60px;
`;

const LargeSize = css`
  width: 305px;
  height: 56px;
`;

const Size = {
  thin: ThinSize,
  small: SmallSize,
  medium: MediumSize,
  large: LargeSize,
};

/* ColorType : Background, Font */
const BackgroundColors = {
  default: defaultTheme.colors.white,
  active: defaultTheme.colors.green,
  point: defaultTheme.colors.red,
  soldOut: defaultTheme.colors.black,
  disabled: defaultTheme.colors.grey3,
};

const fontColors = {
  default: defaultTheme.colors.black,
  active: defaultTheme.colors.white,
  point: defaultTheme.colors.white,
  soldOut: defaultTheme.colors.white,
  disabled: defaultTheme.colors.white,
};

const ColorStyle = css`
  color: ${({ colorType }) => fontColors[colorType] || fontColors.default};
  background-color: ${({ colorType }) => BackgroundColors[colorType] || BackgroundColors.default};
  &:hover {
    background-color: ${({ colorType }) => lighten(0.1, BackgroundColors[colorType] || BackgroundColors.default)};
  }
  &:active {
    background-color: ${({ colorType }) => darken(0.1, BackgroundColors[colorType] || BackgroundColors.default)};
  }
  &:disabled {
    color: ${fontColors.disabled};
    background-color: ${BackgroundColors.disabled};
  }
`;

const StyledButton = styled.button`
  ${({ sizeType }) => sizeType && Size[sizeType]}
  ${({ borderType }) => borderType && Border[borderType]}
  ${ColorStyle};
`;

export default StyledButton;