import styled from "styled-components";

const ProductsContainer = styled.ul`
    width: 500px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

const ProductContainer = styled.li`
    width: 100px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProductNameWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    border: ${(props) =>
        props.choosable ? "2px solid red" : "1px solid black"};
    border-radius: 10px;
    display: flex;
    justify-contents: center;
    align-items: center;
`;

const ProductName = styled.p`
    width: 100%;
    text-align: center;
    word-break: keep-all;
`;
export { ProductsContainer, ProductContainer, ProductNameWrapper, ProductName };
