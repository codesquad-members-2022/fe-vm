import styled, { css } from 'styled-components';
import { Border, Flex, DragDisable } from 'assets/style/common';

/* SizeType */
const SmallSize = css`
  width: 93px;
  height: 56px;
`;

const MediumSize = css`
  width: 65px;
  height: 58px;
`;

const LargeSize = css`
  width: 270px;
  height: 80px;
`;

const XLargeSize = css`
  width: 468px;
  height: 80px;
`;

const Size = {
  small: SmallSize,
  medium: MediumSize,
  large: LargeSize,
  xLarge: XLargeSize,
};

/* FontType */
const DefaultFont = css`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.black};
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const MediumFont = css`
  ${DefaultFont}
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
`;

const XXLargeFont = css`
  ${DefaultFont}
  font-size: ${({ theme: { fontSize } }) => fontSize.xxLarge};
`;

const LogoFont = css`
  ${DefaultFont}
  font-size: ${({ theme: { fontSize } }) => fontSize.logo};
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const DigitalFont = css`
  font-family: 'Digital7';
  font-size: ${({ theme: { fontSize } }) => fontSize.logo};
  color: ${({ theme: { colors } }) => colors.brightGreen};
  background-color: ${({ theme: { colors } }) => colors.black};
`;

const Font = {
  medium: MediumFont,
  xxLarge: XXLargeFont,
  logo: LogoFont,
  digital: DigitalFont,
};

const StyledLabel = styled.li`
  ${DragDisable}
  ${({ flexType }) => flexType && Flex[flexType]}
  ${({ sizeType }) => sizeType && Size[sizeType]}
  ${({ fontType }) => fontType && Font[fontType]}
  ${({ borderType }) => borderType && Border[borderType]}
`;

export default StyledLabel;
