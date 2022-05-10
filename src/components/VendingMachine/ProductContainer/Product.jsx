import styled, { css } from 'styled-components';
import setLocalString from 'utils/setLocalString';

export default function Product({ info }) {
  return (
    <ProductWrapper>
      <ProductButton stock={info.stock}>{info.name}</ProductButton>
      <PriceWrapper>
        <PriceState stock={info.stock} />
        <Price stock={info.stock}>{info.stock ? setLocalString(info.price) + '원' : '품절'}</Price>
      </PriceWrapper>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductButton = styled.button`
  width: 100%;
  padding: 16px 12px;
  margin-bottom: 8px;
  border: 1px solid transparent;
  ${({ theme }) => theme.fontStyles.smallBold};
  background: ${({ theme }) => theme.colors.white};

  ${props =>
    props.stock
      ? css`
          background: ${({ theme }) => theme.colors.white};
        `
      : css`
          background: ${({ theme }) => theme.colors.gray3};
          color: ${({ theme }) => theme.colors.gray2};
          cursor: default;
        `};
`;

const PriceWrapper = styled.div`
  width: 70%;
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.gray3};
  cursor: default;
`;

const PriceState = styled.span`
  display: inline-block;
  padding: 4px;
  margin-right: 6px;
  border-radius: 50%;

  ${props =>
    props.stock
      ? css`
          background: ${({ theme }) => theme.colors.green};
        `
      : css`
          background: ${({ theme }) => theme.colors.red};
        `};
`;

const Price = styled.span`
  ${({ theme }) => theme.fontStyles.xSmallBold};

  ${props =>
    props.stock
      ? css`
          color: ${({ theme }) => theme.colors.gray3};
        `
      : css`
          color: ${({ theme }) => theme.colors.red};
        `};
`;
