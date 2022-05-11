import styled, { css } from 'styled-components';
import setLocalString from 'utils/setLocalString';

export default function Product({ info }) {
  return (
    <ProductWrapper>
      <ProductName stock={info.stock}>{info.name}</ProductName>
      <PriceWrapper stock={info.stock}>
        <span className="price_state"></span>
        <button className="push_btn">
          {info.stock ? setLocalString(info.price) + '원' : '품절'}
        </button>
      </PriceWrapper>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductName = styled.div`
  width: 100%;
  padding: 16px 12px;
  margin-bottom: 8px;
  border: 1px solid transparent;
  ${({ theme }) => theme.fontStyles.smallBold};
  background: ${({ theme }) => theme.colors.white};

  ${({ stock }) =>
    stock
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
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.gray3};
  cursor: default;

  .price_state {
    display: inline-block;
    padding: 4px;
    margin-right: 6px;
    border-radius: 50%;
  }

  .push_btn {
    ${({ theme }) => theme.fontStyles.xSmallBold};
  }

  ${({ stock }) =>
    stock
      ? css`
          border: 2px solid ${({ theme }) => theme.colors.gray4};

          .price_state {
            background: ${({ theme }) => theme.colors.green};
          }

          .push_btn {
            color: ${({ theme }) => theme.colors.gray3};
          }
        `
      : css`
          border: 2px solid ${({ theme }) => theme.colors.red};

          .price_state {
            background: ${({ theme }) => theme.colors.red};
          }

          .push_btn {
            color: ${({ theme }) => theme.colors.red};
          }
        `};
`;
