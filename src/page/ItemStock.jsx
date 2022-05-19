import { useContext } from "react";

import { vendingMachineContext } from "App.jsx";
import styled from "styled-components";

function ItemStock() {
    const handleItemAddition = () => {};

    const { stockLoading, itemList } = useContext(vendingMachineContext);

    const items = stockLoading
        ? "walletLoading..."
        : itemList.map((item) => (
              <Item key={item.id}>
                  <ItemTitle>{item.name}</ItemTitle>
                  <ItemQuantity>{item.quantity.toLocaleString("ko-KR")}개</ItemQuantity>
                  <AddBtn type="button" value="추가" onClick={handleItemAddition} />
              </Item>
          ));

    return (
        <ItemStockBox>
            <ul>{items}</ul>
        </ItemStockBox>
    );
}

const Item = styled.li`
    display: flex;
    align-items: center;
`;

const ItemStockBox = styled.div`
    width: 400px;
    border: 3px solid black;
    margin: 0 auto;
`;

const ItemTitle = styled.span`
    display: inline-block;
    width: 150px;
    margin: 20px;
    font-size: 2rem;
`;

const ItemQuantity = styled.span`
    display: inline-block;
    width: 100px;
    font-size: 2rem;
    text-align: end;
    margin: 10px;
`;

const AddBtn = styled.input`
    margin-left: 15px;
    width: 50px;
    height: 30px;
`;

export default ItemStock;
