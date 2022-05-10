import { useContext } from 'react';
import styled, { css } from 'styled-components';
import React from 'react';
import { FlexCenter, ProductText } from '../styled-components/util';
import { myContext } from './App';

const Product = ({ info }) => {
  const { inputMoney } = useContext(myContext);

  return (
    <ProductItem>
      <Btn as="button" active={inputMoney >= info.price}>
        <ProductImg
          src={`${process.env.PUBLIC_URL}${info.src}`}
          alt={info.name}
        />
        <Title as="h3">{info.name}</Title>
        <Price as="strong">{info.price}</Price>
      </Btn>
    </ProductItem>
  );
};

const ProductItem = styled.li`
  width: 20%;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const Btn = styled(FlexCenter)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  padding: ${({ theme }) => theme.padding.medium};
  cursor: pointer;
  border-radius: 1rem;
  ${({ active }) =>
    active &&
    css`
      border: 0.2rem solid ${({ theme }) => theme.color.red};
    `}

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
`;

const ProductImg = styled.img`
  display: block;
  width: 5rem;
`;

const Title = styled(ProductText)`
  margin-top: ${({ theme }) => theme.margin.medium};
  color: ${({ theme }) => theme.color.grey1};
`;

const Price = styled(ProductText)``;

export default React.memo(Product);
