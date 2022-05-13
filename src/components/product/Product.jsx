import dataOfProducts from "../../data/products";
import {
    ProductContainer,
    ProductNameWrapper,
    ProductName,
} from "./Product.style";

function Product({ totalMoneyInVendingMachine }) {
    return (
        <>
            {dataOfProducts.map((product) => (
                <ProductContainer key={product.id}>
                    <ProductNameWrapper
                        choosable={
                            totalMoneyInVendingMachine >= Number(product.price)
                        }
                    >
                        <ProductName>{product.name}</ProductName>
                    </ProductNameWrapper>
                    <p>{product.price}</p>
                </ProductContainer>
            ))}
        </>
    );
}

export default Product;
