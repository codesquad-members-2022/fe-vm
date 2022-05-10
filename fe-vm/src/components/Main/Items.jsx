import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchData from "../../util/fetchData";
import Item from "./Item";

const Items = () => {
  const [itemState, setItemState] = useState([]);
  const setData = async () => {
    const data = await fetchData("http://localhost:4000/data");
    setItemState(data.items);
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <ItemsContainer>
      {itemState.map(({ menu, price, key }) => {
        return <Item menu={menu} price={price} key={key} />;
      })}
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Items;
