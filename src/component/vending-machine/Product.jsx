/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as uiConst from "constant/uiConstant";
import styled from "styled-components";

function Product({ name, price, quantity, totalAmout }) {
    const handleItemClick = () => {};

    return (
        <ProductBox
            quantity={quantity}
            totalAmout={totalAmout}
            price={price}
            onClick={handleItemClick}
        >
            <ProductName>{name}</ProductName>
            <ProductPrice>{price.toLocaleString("ko-KR")}원</ProductPrice>
            <span>{quantity ? `(${quantity}개 남음)` : "(품절)"}</span>
        </ProductBox>
    );
}

const ProductBox = styled.button`
    margin: ${({ theme }) => theme.margins.lg};
    height: ${uiConst.VENDING_MACHINE_PRODUCT_HEIGHT};
    cursor: ${(props) => (props.totalAmout > props.price ? "pointer" : null)};
    cursor: ${(props) => !props.quantity && "not-allowed"};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: none;
    background-color: ${(props) => (props.totalAmout > props.price ? "lightgreen" : null)};
    background-color: ${(props) => (props.quantity ? null : "tomato")};
`;

const ProductName = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const ProductPrice = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export default Product;
