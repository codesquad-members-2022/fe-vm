import { css } from 'styled-components';

/* Border */
const DefaultBorder = css`
  border: 1px solid;
  border-color: ${({ theme: { colors } }) => colors.black};
`;

const RoundedBorder = css`
  ${DefaultBorder}
  border-radius: 5px;
`;

const Border = {
  default: DefaultBorder,
  rounded: RoundedBorder,
};

/* Flex */
const FlexContainer = ({ align, justify }) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
`;

const Flex = {
  center: FlexContainer({ align: 'center', justify: 'center' }),
  centerBetween: FlexContainer({ align: 'center', justify: 'space-between' }),
  centerAround: FlexContainer({ align: 'center', justify: 'space-around' }),
  centerEvenly: FlexContainer({ align: 'center', justify: 'space-evenly' }),
  centerLeft: FlexContainer({ align: 'center', justify: 'flex-start' }),
  centerRight: FlexContainer({ align: 'center', justify: 'flex-end' }),
};

/* Drag Disable */
const DragDisable = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export { Border, Flex, DragDisable };
