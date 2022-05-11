import products from "../../data/products";
import { v4 as uuid } from "uuid";
import {
    ProductContainer,
    ProductNameWrapper,
    ProductName,
} from "./Product.style";

function Product({ moneyInVendingMachine }) {
    return (
        <>
            {products.map((product) => (
                <ProductContainer key={uuid()}>
                    <ProductNameWrapper
                        choosable={
                            moneyInVendingMachine >= Number(product.price)
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
