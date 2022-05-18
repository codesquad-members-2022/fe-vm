/* eslint-disable react/prop-types */
import styled from "styled-components";
import * as uiConst from "constant/uiConstant";

function Product({ name, price }) {
    return (
        <ProductBox>
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}원</ProductPrice>
        </ProductBox>
    );
}

const ProductBox = styled.button`
    margin: ${({ theme }) => theme.margins.lg};
    height: ${uiConst.VENDING_MACHINE_PRODUCT_HEIGHT};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ProductName = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const ProductPrice = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export default Product;
