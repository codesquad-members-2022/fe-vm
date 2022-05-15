import { ProductsContainer } from "./Products.style";
import dataOfProducts from "../../data/products";
import { useVendingMachineContext } from "../../context/VendingMachineContext";
import {
    ProductContainer,
    ProductNameWrapper,
    ProductName,
} from "./Products.style";

function Products() {
    const { totalMoneyInVendingMachine } = useVendingMachineContext();
    console.log("자판기에 들어있는 금액");
    console.log(totalMoneyInVendingMachine);

    return (
        <ProductsContainer>
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
        </ProductsContainer>
    );
}

export default Products;
