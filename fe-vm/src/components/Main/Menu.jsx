import styled from "styled-components";
import Items from "./Items";

const Menu = () => {
  return (
    <MenuContainer>
      <Items />
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  width: 900px;
  border-right: 1rem solid black;
  padding: 2rem;
`;

export default Menu;
