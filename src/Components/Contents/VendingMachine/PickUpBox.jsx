import styled from 'styled-components';
import {
  FontSize,
  Color,
  Radius10,
  Relative,
  Absolute,
} from '../../../Assets/Common.style';
import EnTitle from '../../EnTitle';

export default function PickUpBox() {
  return (
    <PickUpContents>
      <EnTitle
        title="Pick Up Here"
        tag="h3"
        size={FontSize.LARGE}
        color={Color.WHITE}
      />
      <ProductPickUp>
        <TargetProduct>{/* 구매한 상품 이미지 들어가기 */}</TargetProduct>
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
    transition: 0.5s;
    z-index: 1;
  }
`;

const TargetProduct = styled.div`
  ${Absolute}
  left: 0;
  right: 0;
  height: 100%;
  bottom: 100%;
  transition: 0.3s;
`;