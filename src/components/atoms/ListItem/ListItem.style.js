import styled, { css } from 'styled-components';
import { Border, Flex } from 'assets/style/common';

/* SizeType */
const ShortSize = css`
  width: 183px;
  height: 43px;
`;

const LongSize = css`
  width: 250px;
  height: 31px;
`;

const Size = {
  short: ShortSize,
  long: LongSize,
};

/* FontType */
const MediumFont = css`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  color: ${({ theme: { colors } }) => colors.black};
`;

const LargeFont = css`
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  color: ${({ theme: { colors } }) => colors.black};
`;

const Font = {
  medium: MediumFont,
  large: LargeFont,
};

const StyledListItem = styled.li`
  ${({ flexType }) => flexType && Flex[flexType]};
  ${({ sizeType }) => sizeType && Size[sizeType]}
  ${({ fontType }) => fontType && Font[fontType]}
  ${({ borderType }) => borderType && Border[borderType]}
`;

export default StyledListItem;
