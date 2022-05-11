import { useState } from 'react';
import styled from 'styled-components';
import {
  Absolute,
  Color,
  Radius10,
  Relative,
  GrayButton,
  FontSize,
  FontWeight,
  F_Center,
  F_ColumnBetweenCenter,
} from '../../../Assets/Common.style';
import soldOutIcon from '../../../Assets/Images/sold-out.svg';

export default function Product({ products }) {
  const item = products.map((product) => <Item product={product} />);
  return item;
}

function Item({ product }) {
  const [isSoldOut, setIsSoldOut] = useState(!product.stock);

  return (
    <ProductItem key={product.id} className={isSoldOut ? 'sold-out' : ''}>
      <button>
        <ImgBox>
          <Img style={{ backgroundImage: `url(${product.image})` }}></Img>
          <span hidden>{product.title}</span>
        </ImgBox>
        <Price>{product.price}원</Price>
      </button>
    </ProductItem>
  );
}

const ProductItem = styled.li`
  ${Relative}
  ${Radius10}
  background: ${Color.WHITE};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  text-align: center;

  &::before {
    content: '';
    ${Absolute}
    ${Radius10}
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &:not(.sold-out):hover::before {
    border: 3px solid ${Color.ORANGE[200]};
    cursor: pointer;
  }

  &.sold-out::before {
    background: rgba(27, 27, 27, 0.6) url(${soldOutIcon}) no-repeat center;
  }

  button {
    ${F_ColumnBetweenCenter}
    width: 100%;
    height: 100%;
    margin-bottom: 5px;
    padding: 10px;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 80px;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
`;

const Price = styled(GrayButton)`
  ${F_Center}
  flex-shrink: 0;
  width: 100%;
  height: 30px;
  border-radius: 15px;
  font-size: ${FontSize.SMALL};
  font-weight: ${FontWeight.BOLD};
  color: ${Color.WHITE};
`;