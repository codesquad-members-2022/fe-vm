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
const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftCenter = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RightCenter = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CenterBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CenterAround = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CenterEvenly = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Flex = {
  center: Center,
  centerBetween: CenterBetween,
  centerAround: CenterAround,
  centerEvenly: CenterEvenly,
  leftCenter: LeftCenter,
  rightCenter: RightCenter,
};

export { Border, Flex };
