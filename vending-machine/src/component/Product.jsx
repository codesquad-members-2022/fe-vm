import styled from "styled-components";
import * as uiConst from "../constant/uiConstant";

//TODO: 현재 총액을 context로 받아와서 price와 비교 후 cursor랑 backgroundcolor 변경

function Product({ name, price, quantity }) {
    return (
        <ProductBox>
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}원</ProductPrice>
        </ProductBox>
    );
}

const ProductBox = styled.button`
    margin: 20px;
    height: ${uiConst.VENDING_MACHINE_PRODUCT_HEIGHT}px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ProductName = styled.div`
    font-size: ${uiConst.VENDING_MACHINE_PRODUCT_SIZE}rem;
`;
const ProductPrice = styled.div`
    font-size: 1.2rem;
`;

export default Product;
