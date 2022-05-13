import { ProductsContainer } from "./Product.style";
import Product from "./Product";

function Products({ moneyInVendingMachine }) {
    const totalMoneyInVendingMachine = Object.keys(
        moneyInVendingMachine
    ).reduce(
        (acc, unit) => acc + moneyInVendingMachine[unit] * Number(unit),
        0
    );

    return (
        <ProductsContainer>
            <Product totalMoneyInVendingMachine={totalMoneyInVendingMachine} />
        </ProductsContainer>
    );
}

export default Products;
