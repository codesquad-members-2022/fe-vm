import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { productImgContext } from '.';
import {
  FontSize,
  Color,
  Radius10,
  Relative,
  Absolute,
} from '../../../Assets/Common.style';
import EnTitle from '../../EnTitle';

export default function PickUpBox() {
  const { pickProductImg, setPickProductImg } = useContext(productImgContext);
  const isAnimation = !!pickProductImg;

  useEffect(() => {
    if (!pickProductImg) return;
    setTimeout(() => {
      setPickProductImg(null);
    }, 2000);
  }, [pickProductImg, setPickProductImg]);

  return (
    <PickUpContents>
      <EnTitle
        title="Pick Up Here"
        tag="h3"
        size={FontSize.LARGE}
        color={Color.WHITE}
      />
      <ProductPickUp className={isAnimation ? 'active' : ''}>
        <TargetProduct>
          {pickProductImg && <img src={pickProductImg} alt="구매상품" />}
        </TargetProduct>
      </ProductPickUp>
    </PickUpContents>
  );
}

const PickUpContents = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const ProductPickUp = styled.div`
  ${Relative}
  width: 100%;
  height: 140px;
  ${Radius10}
  background: ${Color.BACKGROUND};
  box-shadow: inset 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &::before {
    content: '';
    ${Absolute}
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${Color.BLACK};
    opacity: 0.4;
    transition: 0.5s 0.3s;
    z-index: 1;
  }

  &.active div {
    transform: translateY(0);
    transition: 0.3s 1s ease-in;
  }
  &.active::before {
    height: 0;
    transition: 0.5s 1.5s;
  }
`;

const TargetProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 10px;
  transform: translateY(-100%);

  img {
    height: 90%;
  }
`;
