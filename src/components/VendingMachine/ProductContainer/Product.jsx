import styled from 'styled-components';

export default function Product({ info }) {
  return (
    <ProductWrapper>
      <ProductButton>{info.name}</ProductButton>
      <PriceWrapper>
        <PriceState />
        <Price>{info.stock ? info.price + '원' : '품절'}</Price>
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
`;

const PriceWrapper = styled.div`
  width: 65%;
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.gray2};
`;

const PriceState = styled.span`
  display: inline-block;
  padding: 4px;
  margin-right: 4px;
  border-radius: 50%;
  background: green;
`;

const Price = styled.span`
  ${({ theme }) => theme.fontStyles.xSmallBold};
`;
