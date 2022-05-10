import { BeverageContainer, Price, Title } from './Beverage.styled';

export default function Beverage({ title, price }) {
  return (
    <BeverageContainer>
      <Title flex justify="center" align="center">
        {title}
      </Title>
      <Price flex justify="center" align="center">
        {price}
      </Price>
    </BeverageContainer>
  );
}
