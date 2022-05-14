import styled, { css } from 'styled-components';

import Logo from '@/assets/logo.svg';
import Money from '@/assets/money.svg';
import Stock from '@/assets/stock.svg';
import FlexBox from '@/styles/FlexBox';

const NavbarWrapper = styled(FlexBox)`
  height: 100px;
  background-color: ${({ theme: { color } }) => color.yellow};
`;

const NavbarInner = styled(FlexBox)`
  width: 1440px;
  justify-content: space-between;
`;

const IconBox = styled(FlexBox)`
  width: 230px;
  justify-content: space-around;
`;

const IconStyle = css`
  cursor: pointer;
  margin: 10px;
`;

const LogoIcon = styled(Logo)`
  ${IconStyle}
`;

const MoneyIcon = styled(Money)`
  ${IconStyle}
`;

const StockIcon = styled(Stock)`
  ${IconStyle}
`;

export { NavbarWrapper, NavbarInner, IconBox, LogoIcon, MoneyIcon, StockIcon };
