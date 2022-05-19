import styled, { css } from 'styled-components';

import { Flexbox } from '@/styles/util';

export const WalletLayout = styled.main`
  ${Flexbox};
`;

export const WalletLayer = styled.div``;

export const CoinList = styled.ol``;

export const Balance = styled.div`
  ${Flexbox};
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.black};
  margin: 20px auto 0;
`;

export const CoinLayer = styled.li`
  ${Flexbox};
  min-width: 200px;
  & + & {
    margin-top: 20px;
  }
`;

export const Amount = styled.div`
  flex-grow: 1;
`;

export const Count = styled.div`
  ${Flexbox};
  padding: 10px;
  min-width: 70px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 999px;
  margin-left: 10px;
`;

export const buttonCommonStyle = css`
  border: 1px solid ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;
  transition: all 400ms;
  height: 55px;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightBlack};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.darkBlack};
  }
`;

export const InsertButton = styled.button`
  ${Flexbox};
  ${buttonCommonStyle};
  width: 150px;
`;

export const IncrementButton = styled.button`
  ${Flexbox};
  ${buttonCommonStyle};
  font-size: 30px;
  font-weight: bold;
  width: 55px;
  border-radius: 999px;
  margin-left: 5px;
`;
