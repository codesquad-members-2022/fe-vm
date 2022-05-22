import styled, { css, keyframes } from 'styled-components';

import { SELECT_PRODUCT_THROTTLE_DELAY } from '@/constants/timer';

export const disabled = css`
  border: 2px solid ${({ theme }) => theme.color.red};
  background-color: ${({ theme }) => theme.color.primaryRed};
  cursor: not-allowed;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightRed};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.darkRed};
  }
`;

export const highlight = css`
  border-color: ${({ theme }) => theme.color.orange};
  background-color: ${({ theme }) => theme.color.primaryOrange};

  &:hover {
    background-color: ${({ theme }) => theme.color.lightOrange};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.darkOrange};
  }
`;

export const ProductLayer = styled.span<{ dir: string; purchasable: boolean; outOfStock: boolean }>`
  ${({ theme, dir }) => theme.mixin.flexbox(dir)};
  background-color: ${({ theme }) => theme.color.primaryBlack};
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 8px;
  position: relative;
  padding: 4px;
  user-select: none;
  cursor: pointer;
  transition: background-color 400ms;
  width: 120px;
  height: 120px;
  overflow: hidden;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightBlack};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.darkBlack};
  }

  ${({ purchasable }) => purchasable && highlight};
  ${({ outOfStock }) => outOfStock && disabled}
`;

export const Name = styled.header`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-align: center;
  flex-grow: 1;
`;

export const Price = styled.footer`
  flex-shrink: 0;
`;

export const Stock = styled.span`
  ${({ theme }) => theme.mixin.flexbox()};
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 50px;
  font-weight: bold;
  color: inherit;
  opacity: 0.1;
  transition: opacity 400ms;

  &:hover {
    opacity: 1;
  }

  span {
    font-size: 30px;
  }
`;

export const DisabledMark = styled.span`
  ${({ theme }) => theme.mixin.flexbox()};
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  bottom: 40px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  width: 150%;
  height: 30%;
  background-color: ${({ theme }) => theme.color.disabled};
  transform: rotate(-30deg);
`;

export const progress = keyframes`
  0% {
    transform: translate3d(0, 100%, 0);
  }
  
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

export const ProgressBox = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.purchasable};
  width: 100%;
  height: 100%;
  transform: translate3d(0, 100%, 0);
  opacity: 0.5;
  animation: ${progress} ${SELECT_PRODUCT_THROTTLE_DELAY}s ease-in-out;
`;
