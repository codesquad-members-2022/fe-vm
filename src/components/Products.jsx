import products from "../data/products";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const Product = styled.li`
    color: ${(props) => (props.choosable ? "red" : "black")};
`;

function Products({ moneyInVendingMachine }) {
    const totalMoneyInVendingMachine = Object.keys(
        moneyInVendingMachine
    ).reduce(
        (acc, unit) => acc + moneyInVendingMachine[unit] * Number(unit),
        0
    );

    return (
        <ul>
            {products.map((product) => (
                <Product
                    key={uuid()}
                    choosable={
                        totalMoneyInVendingMachine >= Number(product.price)
                    }
                >
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </Product>
            ))}
        </ul>
    );
}

export default Products;
