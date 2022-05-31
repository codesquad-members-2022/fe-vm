import { ProductsContainer } from "./Products.style";
import dataOfProducts from "../../data/products";
import {
    useVendingMachineDispatchContext,
    useVendingMachineStateContext,
} from "../../context/VendingMachineContext";
import {
    ProductContainer,
    ProductNameWrapper,
    ProductName,
} from "./Products.style";

function Products() {
    const { money } = useVendingMachineStateContext();
    const { selectProduct } = useVendingMachineDispatchContext();

    const isChoosable = (price) => {
        return money.vendingMachine.amount >= Number(price);
    };

    const clickProduct = (product) => {
        if (!isChoosable(product.price)) {
            return;
        }

        selectProduct(product);
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
