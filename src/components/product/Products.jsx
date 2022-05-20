import { ProductsContainer } from "./Products.style";
import dataOfProducts from "../../data/products";
import { useVendingMachineContext } from "../../context/VendingMachineContext";
import {
    ProductContainer,
    ProductNameWrapper,
    ProductName,
} from "./Products.style";

function Products() {
    const { money, selectProduct, returnMoneyFromVendingMachine } =
        useVendingMachineContext();

    const isChoosable = (price) => {
        return money.vendingMachine.amount >= Number(price);
    };

    const clickProduct = (product) => {
        if (!isChoosable(product.price)) {
            return;
        }

        selectProduct(product.name);
        const changes = money.vendingMachine.amount - product.price;
        returnMoneyFromVendingMachine(changes);
    };

    return (
        <ProductsContainer>
            {dataOfProducts.map((product) => (
                <ProductContainer
                    key={product.id}
                    onClick={() => clickProduct(product)}
                >
                    <ProductNameWrapper choosable={isChoosable(product.price)}>
                        <ProductName>{product.name}</ProductName>
                    </ProductNameWrapper>
                    <p>{product.price}</p>
                </ProductContainer>
            ))}
        </ProductsContainer>
    );
}

export default Products;
