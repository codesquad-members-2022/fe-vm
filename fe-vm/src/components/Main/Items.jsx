import styled from "styled-components";
import Item from "./Item";

const Items = () => {
  return (
    <ItemsContainer>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Items;
