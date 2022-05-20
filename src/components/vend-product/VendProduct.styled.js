import styled from "styled-components";

const PriceLabel = styled.span`
  display: grid;
  place-items: center;
  margin-top: 30px;
`;

const StyledVendProductContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  li {
    background-color: #f2f2f2;
    border: 1px solid;
    padding: 10px;

    button {
      border: 1px solid;
      border-color: #2fc4b2;
    }
  }
`;

export { PriceLabel, StyledVendProductContainer };
