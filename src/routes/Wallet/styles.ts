import styled, { css } from 'styled-components';

export const WalletLayout = styled.main`
  ${({ theme }) => theme.mixin.flexbox()};
`;

export const WalletLayer = styled.div``;

export const CoinList = styled.ol``;

export const Balance = styled.div`
  ${({ theme }) => theme.mixin.flexbox()};
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.black};
  margin: 20px auto 0;
`;

export const CoinLayer = styled.li`
  ${({ theme }) => theme.mixin.flexbox()};
  min-width: 200px;
  & + & {
    margin-top: 20px;
  }
`;

export const Amount = styled.div`
  flex-grow: 1;
`;

export const Count = styled.div`
  ${({ theme }) => theme.mixin.flexbox()};
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
  ${({ theme }) => theme.mixin.flexbox()};
  ${buttonCommonStyle};
  width: 150px;
`;

export const IncrementButton = styled.button`
  ${({ theme }) => theme.mixin.flexbox()};
  ${buttonCommonStyle};
  font-size: 30px;
  font-weight: bold;
  width: 55px;
  border-radius: 999px;
  margin-left: 5px;
`;
