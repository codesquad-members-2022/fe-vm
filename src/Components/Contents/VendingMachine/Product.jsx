import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMessage } from '../../../Utils/utils';
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

export default function Product({ products, payTotal, message }) {
  const items = products.map((product) => (
    <Item
      key={product.id}
      product={product}
      payTotal={payTotal}
      message={message}
    />
  ));
  return items;
}

function Item({ product, payTotal, message }) {
  const [isSoldOut, setIsSoldOut] = useState(!product.stock);
  const [isActive, setIsActive] = useState(payTotal.value >= product.price);

  const buyProductHandler = () => {
    const MESSAGE = getMessage('구입', product.title);
    const updateTotal = payTotal.value - product.price;

    payTotal.set(updateTotal);
    message.set([...message.value, MESSAGE]);
    product.stock -= 1;
  };

  useEffect(() => {
    setIsActive(payTotal.value >= product.price);
  }, [payTotal.value]);

  useEffect(() => {
    setIsSoldOut(!product.stock);
  }, [product.stock]);

  return (
    <ProductItem
      className={(isSoldOut ? 'sold-out' : '') + (isActive ? ' active' : '')}
      onClick={isActive && !isSoldOut ? buyProductHandler : null}
    >
      <button>
        <ImgBox>
          <Img
            hidden
            style={{ backgroundImage: `url(${product.image})` }}
          ></Img>
          <span>{product.title}</span>
        </ImgBox>
        <Price className={isActive ? 'active' : ''}>{product.price}원</Price>
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

  &.active:not(.sold-out):hover::before {
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
  height: calc(100% - 35px);
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
