import { useState, useEffect, memo } from 'react';

import styled, { css } from 'styled-components';
import setLocalString from 'utils/setLocalString';

const ProductContainer = memo(({ info, isAvailable, stockConsume, buyProduct }) => {
  const handleClick = () => {
    buyProduct(info);
    stockConsume(info.name);
  };

  return (
    <ProductWrapper>
      <ProductName stock={info.stock} isAvailable={isAvailable}>
        {info.name}
      </ProductName>
      <PriceWrapper stock={info.stock} isAvailable={isAvailable}>
        <PriceState stock={info.stock} isAvailable={isAvailable} />
        <PushBtn stock={info.stock} disabled={!isAvailable || !info.stock} onClick={handleClick}>
          {info.stock ? setLocalString(info.price) + '원' : '품절'}
        </PushBtn>
      </PriceWrapper>
    </ProductWrapper>
  );
});

const Product = ({ info, totalMoney, stockConsume, buyProduct }) => {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    if (totalMoney >= info.price) {
      setIsAvailable(true);
    }

    if (totalMoney === 0 || totalMoney < info.price) {
      setIsAvailable(false);
    }
  }, [totalMoney, info.price]);

  return (
    <ProductContainer
      info={info}
      isAvailable={isAvailable}
      stockConsume={stockConsume}
      buyProduct={buyProduct}
    />
  );
};

export default memo(Product);

const ProductWrapper = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductName = styled.div`
  width: 100%;
  padding: 16px 12px;
  margin-bottom: 8px;

  ${({ theme }) => theme.fontStyles.smallBold};
  background: ${({ theme }) => theme.colors.white};

  ${({ stock }) =>
    !stock &&
    css`
      background: ${({ theme }) => theme.colors.gray3};
      color: ${({ theme }) => theme.colors.gray2};
      cursor: default;
    `};
`;

const PriceWrapper = styled.div`
  width: 84px;
  padding: 4px 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.gray3};
  cursor: default;

  border: ${({ isAvailable, stock }) => {
    if (!stock) {
      return css`2px solid ${({ theme }) => theme.colors.red};`;
    }

    if (isAvailable) {
      return css`2px solid ${({ theme }) => theme.colors.green};`;
    }

    return css`2px solid ${({ theme }) => theme.colors.gray4};`;
  }};
`;

const PriceState = styled.span`
  display: inline-block;
  padding: 4px;
  margin-right: 6px;
  border-radius: 50%;

  background: ${({ isAvailable, stock }) => {
    if (isAvailable && stock) {
      return css`
        ${({ theme }) => theme.colors.green}
      `;
    }

    if (!stock) {
      return css`
        ${({ theme }) => theme.colors.red}
      `;
    }

    return css`
      ${({ theme }) => theme.colors.gray4}
    `;
  }};
`;

const PushBtn = styled.button`
  ${({ theme }) => theme.fontStyles.xSmallBold};

  color: ${({ stock }) =>
    !stock
      ? css`
          ${({ theme }) => theme.colors.red};
        `
      : css`
          ${({ theme }) => theme.colors.gray1};
        `}

  &:disabled {
    cursor: default;
  }
`;
