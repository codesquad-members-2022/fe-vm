import styled, { css } from 'styled-components';
import { Border, Flex } from 'assets/style/common';

/* SizeType */
const SmallSize = css`
  width: 93px;
  height: 56px;
`;

const LargeSize = css`
  width: 465px;
  height: 80px;
`;

const Size = {
  small: SmallSize,
  large: LargeSize,
};

/* FontType */
const DefaultFont = css`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.display};
  color: ${({ theme: { colors } }) => colors.black};
`;

const MediumFont = css`
  ${DefaultFont}
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
`;

const XXLargeFont = css`
  ${DefaultFont}
  font-size: ${({ theme: { fontSize } }) => fontSize.xxLarge};
`;

const Font = {
  medium: MediumFont,
  xxLarge: XXLargeFont,
};

const StyledLabel = styled.li`
  ${({ flexType }) => flexType && Flex[flexType]};
  ${({ sizeType }) => sizeType && Size[sizeType]}
  ${({ fontType }) => fontType && Font[fontType]}
  ${({ borderType }) => borderType && Border[borderType]}
`;

export default StyledLabel;
