import styled from "styled-components";
import { RoundBorder } from "../../GlobalStyle";

const ProductsContainer = styled.ul`
    width: 500px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

const ProductContainer = styled.li`
    width: 100px;
    height: 80px;
    ${({ theme }) => theme.flexLayoutMixin("column", "flex-start", "center")};
    cursor: pointer;
`;

const ProductNameWrapper = styled(RoundBorder)`
    width: 100%;
    height: 100%;
    padding: 10px;
    border: ${({ choosable }) =>
        choosable ? "2px solid red" : "1px solid black"};
    ${({ theme }) => theme.flexLayoutMixin("row", "center", "center")};
    &:hover {
        ${({ choosable }) =>
            choosable ? "background-color: rgba(255, 0, 0, 0.07)" : ""}
    }
`;

const ProductName = styled.p`
    width: 100%;
    text-align: center;
    word-break: keep-all;
`;

export { ProductsContainer, ProductContainer, ProductNameWrapper, ProductName };
