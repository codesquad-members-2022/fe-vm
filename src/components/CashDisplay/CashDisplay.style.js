import styled from 'styled-components';

import { itemStyle } from '@/styles/common';
import FlexBox from '@/styles/FlexBox';
import { theme } from '@/styles/theme';

const displayBoxObj = {
  default: theme.greyScale.primaryGrey,
  warning: theme.color.red,
  active: theme.color.yellow,
};

const DisplayBox = styled(FlexBox)`
  ${itemStyle}
  justify-content: space-between;
  background-color: ${({ theme: { color }, isBalance, inputState }) =>
    isBalance ? color.blue : displayBoxObj[inputState]};
  width: ${({ small }) => (small ? '140px' : '340px')};
  height: ${({ small }) => (small ? '50px' : '80px')};
  padding: 10px;
  position: ${({ small }) => small && 'absolute'};
  top: -65px;
  right: 0;
  transition: all 400ms ease;
`;

const MonetaryUnit = styled.p`
  font-size: ${({ theme: { fontSize }, small }) => (small ? fontSize.medium : fontSize.display)};
  color: ${({ theme: { greyScale }, isBalance }) =>
    isBalance ? greyScale.white : greyScale.black};
`;

const CashForm = styled.form``;

const CashInput = styled.input`
  width: 250px;
  height: 50px;
  font-size: ${({ theme: { fontSize } }) => fontSize.display};
  text-align: right;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Balance = styled.p`
  font-size: ${({ theme: { fontSize }, small }) => (small ? fontSize.large : fontSize.display)};
  color: ${({ theme: { greyScale } }) => greyScale.white};
`;

export { DisplayBox, MonetaryUnit, CashForm, CashInput, Balance };
